# 🤖 AI Chatbot (Flask + OpenRouter API)

A simple yet powerful AI chatbot built using Flask (Python) on the backend and HTML/CSS/JavaScript on the frontend. It connects to OpenRouter’s API to generate responses using open-source LLMs like Mixtral, OpenChat, or LLaMA3.

---

## 📁 Project Structure

```

chatbot/
├── app.py              # Flask backend server
├── index.html          # Chat UI
├── style.css           # Styles for chatbot
├── script.js           # Frontend logic
├── requirements.txt    # Python dependencies
└── README.md

````

---

## ⚙️ How It Works

- User types a message → frontend sends it to `/chat`
- Flask backend routes the request to OpenRouter API
- AI model responds → chatbot displays the reply

---

## 🔐 Setup (Local Development)

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/ai-chatbot-flask.git
cd ai-chatbot-flask
````

### 2. Install Dependencies

```bash
pip install -r requirements.txt
```

### 3. Add Your API Key

Create a `.env` file in the root (do **not** upload this to GitHub):

```
OPENROUTER_API_KEY=sk-or-xxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

Update `app.py` to load the key:

```python
from dotenv import load_dotenv
import os

load_dotenv()
API_KEY = os.getenv("OPENROUTER_API_KEY")
```

### 4. Run the Flask Server

```bash
python app.py
```

Visit `http://127.0.0.1:5000` in your browser.

---

## 🧠 Models You Can Use

In `app.py`, change the model string:

```python
MODEL = "mistralai/mixtral-8x7b-instruct"
```

Some supported models:

* `mistralai/mixtral-8x7b-instruct`
* `openchat/openchat-3.5`
* `meta-llama/llama-3-8b-instruct`
* `nousresearch/nous-capybara-7b`

Full list: [https://openrouter.ai/docs#models](https://openrouter.ai/docs#models)

---

## 📜 License

This project is open-source under the [MIT License](LICENSE).

---

## 🛡️ Important

> 🔒 **Never commit your `.env` or actual API key to GitHub**
> ✅ Add `.env` to your `.gitignore` file.

---

## 🙏 Acknowledgments

* [OpenRouter](https://openrouter.ai) – free access to powerful LLMs
* Flask – lightweight Python web framework
* You – for trying this out!

---

