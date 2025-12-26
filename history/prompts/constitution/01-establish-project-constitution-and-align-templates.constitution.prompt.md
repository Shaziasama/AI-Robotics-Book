---
id: 01
title: Establish Project Constitution and Align Templates
stage: constitution
date: 2025-12-26
surface: agent
model: gemini
feature: none
branch: 
user: Zohaib
command: /sp.constitution
labels: [constitution, setup, documentation]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - .specify/memory/constitution.md
  - .specify/templates/plan-template.md
  - .specify/templates/spec-template.md
  - .specify/templates/tasks-template.md
tests:
  - none
---

## Prompt

/sp.constitution

Project: Educational book on Physical AI and Humanoid Robotics with integrated RAG chatbot

Core principles:
- Accuracy through verifiable technical content and real-world applicability
- Clarity for educational audience (students and practitioners with AI/robotics background)
- Hands-on reproducibility (all examples, code, and simulations runnable by readers)
- Technical rigor (preference for established tools and best practices in ROS 2, NVIDIA Isaac, and RAG systems)

Key standards:
- All technical claims and tutorials must be verifiable against official documentation or reproducible results
- Code and configuration format: Clean, commented, and compatible with specified tools (Spec-Kit Plus, Claude Code, Docusaurus, FastAPI, etc.)
- Tool usage: Strict adherence to Spec-Kit Plus for spec-driven development, Claude Code for agentic coding assistance, OpenAI Agents/ChatKit SDKs for chatbot logic
- Content quality: Engaging explanations with diagrams, code snippets, and step-by-step guides; Flesch-Kincaid grade 12-14 for technical depth
- RAG chatbot accuracy: Responses grounded in book content with high relevance and low hallucination

Constraints:
- Book platform: Built exclusively with Docusaurus and deployed to GitHub Pages
- RAG backend: FastAPI server, Neon Serverless Postgres for metadata/storage, Qdrant Cloud Free Tier for vector database
- Content scope: Strictly cover the provided quarter overview and modules (Robotic Nervous System with ROS 2, Digital Twin with Gazebo/Unity, AI-Robot Brain with NVIDIA Isaac, Vision-Language-Action with LLMs, and Capstone Project)
- No external paid tiers unless explicitly upgraded from free options
- Embedded chatbot: Fully functional within the published book, capable of answering questions on book content including simulations and real-world humanoid applications

Success criteria:
- Book successfully built with Spec-Kit Plus and Claude Code, deployed live on GitHub Pages
- All tutorials and code examples reproducible in standard environments (ROS 2, Gazebo, NVIDIA Isaac Sim, etc.)
- Integrated RAG chatbot embedded and operational, accurately answering queries about the book's content (tested with module-specific questions)
- Zero critical technical errors in deployment or chatbot functionality
- Passes review for educational completeness: Covers all modules, bridges digital AI to physical robotics, and enables students to apply knowledge to simulated/real humanoid robots

## Response snapshot

Okay, the project constitution and templates are now aligned.

New constitution version: `1.0.0`
Reasoning: Initial establishment of the constitution based on your project definition.

I've updated the planning, specification, and task templates to reflect the new principles of Accuracy, Clarity, Reproducibility, and Technical Rigor, and to include the specific technologies for your project.

Suggested commit message:
`docs: establish constitution v1.0.0 and align templates`

I will now create a record of this activity.

## Outcome

- ✅ Impact: The project constitution was created and all relevant templates were updated to reflect the new principles.
- 🧪 Tests: No tests were run.
- 📁 Files: 
  - .specify/memory/constitution.md
  - .specify/templates/plan-template.md
  - .specify/templates/spec-template.md
  - .specify/templates/tasks-template.md
- 🔁 Next prompts: The user can now proceed with feature specification or planning using the updated templates.
- 🧠 Reflection: The process of updating the constitution and propagating the changes to the templates was successful. Using the `replace` tool for targeted changes was effective.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): n/a
- Next experiment (smallest change to try): n/a
