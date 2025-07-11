# WHERENESS Take Home Challenge - AI Prompt Engineer

## Role

**Prompt/AI Engineer**

## Objective

Showcase your proficiency in extensive fine-tuning of generative AI models for precise image-to-image transformation, or your ability to steer powerful pre-trained models (including closed-source ones) through advanced prompt engineering, to enforce strict design rules and deploy a functional AI service.

## Your Task

Develop, fine-tune, or strategically prompt a small AI model that transforms a predefined hand-drawn building sketch (which we will provide) into a refined, structurally consistent image. The output must closely follow the sketch's core elements, including precise details like window count, overall structure, and the application of specific construction materials.

## Requirements

### Input & Interface

- **Create a simple web interface**
- The interface should clearly display the predefined hand-drawn building sketch provided to you
- **Process**: The system should process this sketch using your AI model or prompt engineering strategy upon a simple "Generate" click button
- **Output**: Display the generated building image
- **Hosting**: Host your solution publicly (e.g., Hugging Face Spaces, Colab share link). Provide access instructions

### AI Model & Engineering Depth (Core Focus)

You have two primary approaches to choose from, depending on your expertise and the desired outcome:

#### Option 1: Extensive Fine-tuning

You must perform substantial fine-tuning on an existing pre-trained image generation model (e.g., a Stable Diffusion variant, ControlNet).

- **Clearly articulate** your chosen base model and the specific fine-tuning methodology (e.g., LoRA, Dreambooth, training a custom ControlNet checkpoint, or other parameter-efficient methods)

**Data Strategy for Fine-tuning:**

- For this challenge, you should curate or generate a small, suitable dataset (e.g., 20-50 high-quality sketch-to-image pairs, or leverage/augment a publicly available relevant dataset like Sketchy Database, if feasible within the timeframe)
- The dataset should exemplify the desired structural and material transformations
- Explain your process for data collection, cleaning, formatting, and any augmentation strategies used for fine-tuning

**Fine-tuning Process:**

- Describe your training setup (hardware, libraries), hyperparameters (learning rate, epochs/steps, batch size), and any iteration or debugging during the fine-tuning process

**Internal Prompting:**

- Explain how you leverage internal prompts (e.g., fixed positive/negative prompts, conditioning inputs) within your fine-tuned model to achieve desired output quality and adherence

#### Option 2: Advanced Prompt Engineering with Close Source Models

If you choose not to fine-tune, you must demonstrate the ability to achieve the required output fidelity by strategically leveraging prompt engineering techniques with powerful pre-trained models, including potentially closed-source APIs (e.g., Midjourney, DALL-E 3, Stable Diffusion API with advanced prompting).

- **Clearly articulate** your chosen model(s) and your specific prompt engineering strategy
- This includes detailing how you construct prompts, use parameters, or employ iterative refinement to achieve the precise control over structure, count, and materials as outlined in the "Output Adherence" section
- Explain any multimodal prompting strategies (e.g., combining text prompts with image inputs like the sketch) if applicable to your chosen model
- While this option focuses on prompting, you should still discuss any pre-processing of the input sketch (e.g., edge detection, vectorization) that aids your prompt engineering strategy

### Output Adherence (Precision & Model Control)

Regardless of your chosen approach (fine-tuning or prompt engineering), the generated image should be a plausible building structure.

**Strict Fidelity** (Achieved via Fine-tuning or Prompt Engineering): Your AI solution must accurately reflect the predefined sketch's details:

- **Window Count**: If the sketch has 'X' windows, the output must show 'X' windows (no more, no less)
- **Overall Structure**: The general shape, number of floors, and main building blocks should remain the same
- **Construction Materials**: The model should demonstrate the ability to apply specific materials (e.g., wooden panel, stone) based on implicit cues from the sketch style or learned patterns from your fine-tuning data, or through precise prompt instructions
- **Structural Plausibility**: The building should look architecturally sound (e.g., aligned windows, realistic proportions)

## Documentation & Code

- Provide a GitHub link to your code, including your fine-tuning script and any custom weights (e.g., LoRA adapters) if small enough, or instructions to download them
- If using a prompt engineering approach, include any scripts or notebooks demonstrating your prompting strategy and API interactions

Include a concise `README.md` explaining:

- **Model & Methodology Details**: Your chosen approach (fine-tuning or prompt engineering), the specific model(s) used, detailed methodology (fine-tuning details OR prompt engineering strategy)
- **Data Strategy** (if fine-tuning): Your dataset strategy, including collection, cleaning, formatting, and augmentation
- **Training/Prompting Setup**: Your training setup (hardware, libraries, hyperparameters) if fine-tuning, or your API interaction setup and prompt formulation strategy if using pre-trained models
- **Achieving Fidelity**: Specific techniques used in fine-tuning or inference/prompting to enforce exact element counts, structural preservation, and material application. What challenges did you overcome?
- **Deployment**: Your hosting setup and access instructions

## Assessment Criteria

| Criterion                                                                 | Weight |
| ------------------------------------------------------------------------- | ------ |
| **Extensive Fine-tuning / Advanced Prompting Implementation & Rationale** | 40%    |
| **Output Quality & Strict Adherence**                                     | 30%    |
| **Engineering & Deployment**                                              | 10%    |
| **Strategic Thinking & Communication**                                    | 20%    |

### Detailed Breakdown:

- **Extensive Fine-tuning / Advanced Prompting Implementation & Rationale (40%)**: Demonstrated ability to perform meaningful fine-tuning, or to effectively steer powerful models via prompt engineering, with justified model/method/data/prompt choices, and understanding of training dynamics or prompt mechanics

- **Output Quality & Strict Adherence (30%)**: How precisely the output matches sketch elements, overall structure, and material application (as a direct result of fine-tuning or strategic prompting)

- **Engineering & Deployment (10%)**: Functional app, clean code, reliable hosting

- **Strategic Thinking & Communication (20%)**: Quality of your write-up, problem-solving insights

---

**Note**: We will provide the predefined hand-drawn building sketch attached on the email. Good luck!
