from langgraph.graph import StateGraph, START, END
from state import AgentState

from nodes.goal_extractor import goal_extractor
from nodes.skill_extractor import skill_extractor
from nodes.timeline_extractor import timeline_extractor
from nodes.roadmap_generator import roadmap_generator

# Create Graph
builder = StateGraph(AgentState)

# Add Nodes
builder.add_node("goal", goal_extractor)
builder.add_node("skills", skill_extractor)
builder.add_node("timeline", timeline_extractor)
builder.add_node("roadmap", roadmap_generator)

# Define Flow
builder.add_edge(START, "goal")
builder.add_edge("goal", "skills")
builder.add_edge("skills", "timeline")
builder.add_edge("timeline", "roadmap")
builder.add_edge("roadmap", END)

# Compile Graph
graph = builder.compile()