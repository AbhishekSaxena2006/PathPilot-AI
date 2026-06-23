import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()

genai.configure(
    api_key=os.getenv("GEMINI_API_KEY")
)

model = genai.GenerativeModel(
    "gemini-3.1-flash-lite"
)


def get_response(prompt):
    try:
        response = model.generate_content(prompt)

        if not response.text:
            return (
                "Sorry, I could not generate a response."
            )

        return response.text

    except Exception as e:
        print("Gemini Error:", e)

        return (
            "❌ AI service is temporarily unavailable. "
            "Please try again."
        )