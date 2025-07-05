# How to Run the Code

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd prompt-challenge
    ```
3.  **Create and activate a virtual environment:**
    ```bash
    python3 -m venv venv
    source venv/bin/activate
    ```
4.  **Install dependencies:**
    ```bash
    pip install -r requirements.txt
    ```
5.  **Run the backend server:**
    ```bash
    uvicorn backend.app:app --reload --port 5001
    ```
6.  **Open your browser** and go to `http://127.0.0.1:5001`.
