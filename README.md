# WHERENESS Take Home Challenge - AI Prompt Engineer

This repository contains the submission for the WHERENESS AI Prompt Engineer take-home challenge. The goal is to transform a provided building sketch into a photorealistic and structurally consistent image using advanced generative AI techniques.

## Model & Methodology Details

### Chosen Approach: Advanced Prompt Engineering

Given the time constraints and the challenge's focus on precise control, I opted for the **Advanced Prompt Engineering** approach. This method leverages powerful, pre-trained models and combines multi-modal inputs (image + text) to steer the generation process without the need for extensive fine-tuning.

### The Journey: From DALL-E 3 to ControlNet

My initial exploration began with a closed-source model, **DALL-E 3**, via the OpenAI API (see `experiments/open_api.ipynb`). While powerful, it quickly became apparent that DALL-E 3 offers limited capabilities for enforcing strict structural consistency from a source image. The output was often inspired by the sketch but failed to adhere to its precise geometry and element count.

This led me to pivot to **ControlNet with Stable Diffusion**, a more suitable framework for this task. ControlNet excels at conditioning a diffusion model on spatial inputs, allowing the output to retain the exact structure of a source image while a text prompt guides the style, materials, and overall aesthetic.

### Final Model Selection

- **Base Model**: `runwayml/stable-diffusion-v1-5`
- **ControlNet Model**: `ControlNet-1-1-preview/control_v11p_sd15_lineart`
- **Lineart Annotator**: `lllyasviel/Annotators`

This combination provides a robust foundation for image generation with strong structural control.

## Data Strategy

As the **Advanced Prompt Engineering** approach was selected, no dataset was curated for fine-tuning. This section is not applicable.

## Prompting & Pre-processing Setup

The core of this solution lies in the strategic setup of the prompting and pre-processing pipeline, detailed in `experiments/controlnet.ipynb`.

### Pre-processing Strategy: Canny vs. Lineart

The input sketch must be pre-processed into a format that the ControlNet model can interpret.

1.  **Initial Attempt (Canny Edge)**: My first attempt used the `CannyDetector`. However, for a detailed drawing like the provided sketch, Canny edge detection proved to be too aggressive, creating excessive visual noise and capturing texture details rather than the core structural lines.
2.  **Final Approach (Lineart)**: I switched to the `LineartDetector` (`lllyasviel/Annotators`). This pre-processor is specifically designed for sketches and anime-style drawings. It produced a much cleaner, more faithful representation of the sketch's essential lines, providing a superior control map for the generation process.

### Prompt Formulation Strategy

A multi-modal prompting strategy was used:

-   **Image Prompt**: The pre-processed lineart of the sketch serves as the primary structural guide.
-   **Positive Text Prompt**: A highly detailed, multi-paragraph descriptive prompt was engineered to define every aspect of the desired output. Key sections include:
    -   **Overall Style**: `"A photorealistic, high-resolution architectural photograph of a modern, two-story minimalist house, captured from an eye-level, three-quarters perspective, from left."`
    -   **Architecture & Materials**: `"The architecture is cubist and blocky, constructed from large, smooth, off-white or light grey precast concrete panels. The structure features a tiered flat roof system. The main roof is a green roof, covered in lush sedum, ornamental grasses, and small manicured bushes."`
    -   **Exact Window & Door Details**: A specific breakdown of every window and door, e.g., `"On the right side of the facade, there is a two-story section of floor-to-ceiling glass windows."`
    -   **Landscaping & Environment**: `"The house is set in a professionally landscaped front yard... A walkway composed of large, square light-grey concrete pavers curves gently toward the entrance. In the foreground, there is a shallow, square reflecting pool..."`
    -   **Lighting & Mood**: `"The lighting should be soft and even, as if captured on a bright, slightly overcast day to eliminate harsh shadows..."`
-   **Negative Prompt**: A comprehensive negative prompt was used to prevent common failure modes: `low quality, bad quality, sketches, cartoon, drawing, anime, ugly, tiling, blurry, blurred, watermark, grainy, signature, cut off, draft, unrealistic`.

## Achieving Fidelity & Parameter Tuning

Strict fidelity to the sketch was achieved by separating structural and stylistic control, then tuning the parameters to find the optimal balance.

-   **Structural Preservation**: The `control_v11p_sd15_lineart` ControlNet model is solely responsible for enforcing the sketch's structure, including the exact window count, number of floors, and overall building shape.
-   **Material and Style Application**: The detailed positive and negative text prompts are responsible for rendering the structure with the desired photorealistic style, materials, and lighting.
-   **Parameter Tuning**: To achieve the optimal balance between prompt adherence (style) and sketch adherence (structure), a series of experiments were run, as seen in the notebook. The `guidance_scale` (how much the text prompt influences the result) and `controlnet_conditioning_scale` (how much the lineart image influences the result) were systematically varied. The results show that higher values for both generally produce a more detailed and structurally consistent image. The final selected image in the notebook uses a `guidance_scale` of 12 and a `controlnet_conditioning_scale` of 1.5.
-   **Challenges Overcome**:
    -   **Model Selection**: Identifying that DALL-E 3 was unsuitable and pivoting to the more controllable ControlNet framework.
    -   **Preprocessor Choice**: Moving from the noisy Canny detector to the much cleaner Lineart detector was critical for achieving a high-quality result.
    -   **Environment Errors**: The Google Colab environment initially produced a `RuntimeError` due to conflicting PyTorch library versions. This was resolved by adding a setup cell to the notebook that forcefully reinstalls compatible versions of `torch`, `xformers`, and `diffusers`.

## Deployment

### Initial Plan vs. Final Implementation

While a simple web interface was created initially (see `static/` directory), the final solution is presented as a **Google Colab Notebook**. This decision was made because the chosen open-source models require significant computational resources (ideally a GPU) to run in a reasonable amount of time, making a serverless or lightweight deployment impractical for this challenge.

### Access and Execution Instructions

The complete, runnable code is available in the `experiments/controlnet.ipynb` notebook.

1.  **Open in Google Colab**: [**Click here to open the notebook in Google Colab**](https://colab.research.google.com/github/anwarfarihin/prompt-challenge/blob/main/experiments/controlnet.ipynb)
2.  **Set Runtime Type**: In the Colab menu, navigate to `Runtime` -> `Change runtime type` and select `T4 GPU` or another available GPU.
3.  **Run the Setup Cell**: Execute the first code cell to install the correct dependencies.
4.  **Restart the Runtime**: After the installation is complete, **you must restart the runtime**. Go to `Runtime` -> `Restart runtime`.
5.  **Run All Other Cells**: After restarting, run the remaining cells sequentially. The final cells will run a series of experiments and display the generated photorealistic images.
