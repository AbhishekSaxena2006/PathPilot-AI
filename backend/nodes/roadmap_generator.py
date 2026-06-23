from gemini_service import get_response


def roadmap_generator(state):
    prompt = f"""
You are PathPilot AI,
an expert career mentor.

Generate a personalized career roadmap.

Goal:
{state["goal"]}

Existing Skills:
{state["skills"]}

Timeline:
{state["timeline"]}

IMPORTANT RULES:

1. If the user writes in Hindi or Hinglish,
reply in simple Hinglish.

2. If the user writes in English,
reply in English.

3. Return response in MARKDOWN.

4. Keep the roadmap practical,
beginner friendly and actionable.

Use this format:

# Career Roadmap

## Goal
Goal name

## Current Skills
- Skill 1
- Skill 2

## Learning Plan

### Month 1
- Topic
- Topic

### Month 2
- Topic
- Topic

### Month 3
- Topic
- Topic

## Technologies to Learn
- Technology
- Technology

## Projects to Build
1. Project Name
2. Project Name
3. Project Name

## Recommended Resources
- YouTube Channels
- Courses
- Websites

## Weekly Study Plan
- Hours per week
- Suggested schedule

## Final Advice
Give motivational advice and next steps.

Use proper headings,
bullet points,
numbered lists,
and tables if useful.
"""

    roadmap = get_response(prompt)

    state["response"] = roadmap

    return state