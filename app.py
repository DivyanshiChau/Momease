from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS
from groclake.modellake import ModelLake
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

# Initialize Flask app
app = Flask(__name__)

# Enable CORS for the React frontend only (localhost:5173)
CORS(app, origins=["http://localhost:5173"])

# Get the API key and account ID from the environment variables
GROCLAKE_API_KEY = os.getenv("GROCLAKE_API_KEY")
GROCLAKE_ACCOUNT_ID = os.getenv("GROCLAKE_ACCOUNT_ID")

# Initialize the ModelLake instance
model_lake = ModelLake()

if not GROCLAKE_API_KEY or not GROCLAKE_ACCOUNT_ID:
    raise ValueError("API Key or Account ID missing. Please check the .env file.")

chatbot_name = "Momease Assistant"
conversation_history = []

# Initial context data from the Momease website
momease_website_info = """
Momease provides postpartum care services for women,offering nanny services, mental health support, personalized nutrition charts, and a journey tracker. 
Our mission is to ensure that women receive the necessary care and support during their postpartum period, allowing them to care for others with confidence.
We also provide flexible plans for our services, tailored to each woman's unique needs.
"""

# Add the website context to the conversation history
conversation_history.append({"role": "system", "content": momease_website_info})

# API route to get chatbot response
@app.route('/chat', methods=['POST'])
def chat():
    global conversation_history

    user_input = request.json.get('user_input')
    if not user_input:
        return jsonify({"error": "No user input provided"}), 400

    # Append user input to conversation history
    conversation_history.append({"role": "user", "content": user_input})

    payload = {
        "messages": conversation_history,
        "token_size": 300  # Increase max tokens for more complex answers
    }

    # Pass the payload to chat_complete
    response = model_lake.chat_complete(payload=payload)

    # Extract the assistant's reply
    bot_reply = response.get('answer', 'Sorry, I couldn\'t process that.')

    # Append the bot's reply to conversation history
    conversation_history.append({"role": "assistant", "content": bot_reply})

    return jsonify({"bot_reply": bot_reply})

if __name__ == "__main__":
    app.run(debug=True)
