from gemini_service import get_response


def skill_extractor(state):
    prompt = f"""
You are an information extractor.

Task:
Extract ONLY the skills already known by the user.

Examples:

User: Mujhe Python aur HTML aati hai.
Output: Python, HTML

User: I know Java and DSA.
Output: Java, DSA

User: Mujhe kuch nahi aata.
Output: Beginner

User:
{state["message"]}
"""

    skills = get_response(prompt)

    state["skills"] = skills.strip()

    return state