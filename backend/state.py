from typing import TypedDict


class AgentState(TypedDict):
    message: str
    goal: str
    skills: str
    timeline: str
    response: str