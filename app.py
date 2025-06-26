from flask import Flask, request, jsonify, send_from_directory
import requests

app = Flask(__name__, static_url_path='', static_folder='.')

# Serve index.html
@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

# Serve static files like CSS and JS
@app.route('/<path:filename>')
def serve_static(filename):
    return send_from_directory('.', filename)

API_KEY = "YOUR_API_KEY"  
MODEL = "mistralai/mixtral-8x7b-instruct"  # or try "openchat/openchat-3.5", "meta-llama/llama-3-70b-instruct"

@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json.get("message", "")

    try:
        response = requests.post(
            "https://openrouter.ai/api/v1/chat/completions",
            headers={
                "Authorization": f"Bearer {API_KEY}",
                "Content-Type": "application/json"
            },
            json={
                "model": MODEL,
                "messages": [
                    {"role": "system", "content": "You are a helpful AI assistant."},
                    {"role": "user", "content": user_message}
                ]
            }
        )

        data = response.json()
        reply = data['choices'][0]['message']['content']
        return jsonify({"reply": reply})

    except Exception as e:
        print("🔥 ERROR:", e)
        return jsonify({"reply": "Server Error: " + str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)

