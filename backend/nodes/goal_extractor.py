from gemini_service import get_response


def goal_extractor(state):
    prompt = f"""
You are an information extractor.

Task:
Extract ONLY the user's career goal.

Examples:

User: Mujhe AI Engineer banna hai.
Output: AI Engineer

User: I want to become a Full Stack Developer.
Output: Full Stack Developer

User: I want to prepare for Data Science.
Output: Data Scientist

If the goal is not clear, output:
Unknown

User:
{state["message"]}
"""

    goal = get_response(prompt)

    state["goal"] = goal.strip()

    return state