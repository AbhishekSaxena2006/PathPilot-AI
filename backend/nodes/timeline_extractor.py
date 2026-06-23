from gemini_service import get_response


def timeline_extractor(state):
    prompt = f"""
You are an information extractor.

Task:
Extract ONLY the preparation timeline.

Examples:

User: Mujhe 6 months mein AI Engineer banna hai.
Output: 6 Months

User: I want to become a developer in 1 year.
Output: 1 Year

User: Mujhe jaldi job chahiye.
Output: Not Specified

User:
{state["message"]}
"""

    timeline = get_response(prompt)

    state["timeline"] = timeline.strip()

    return state