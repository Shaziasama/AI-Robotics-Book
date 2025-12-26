<!--
Sync Impact Report:
- Version change: 0.0.0 -> 1.0.0
- List of modified principles:
  - [PRINCIPLE_1_NAME] -> Accuracy
  - [PRINCIPLE_2_NAME] -> Clarity
  - [PRINCIPLE_3_NAME] -> Hands-on Reproducibility
  - [PRINCIPLE_4_NAME] -> Technical Rigor
- Added sections:
  - Key Standards
  - Project Constraints and Success Criteria
- Removed sections:
  - [PRINCIPLE_5_NAME]
  - [PRINCIPLE_6_NAME]
- Templates requiring updates:
  - ✅ .specify/templates/plan-template.md
  - ✅ .specify/templates/spec-template.md
  - ✅ .specify/templates/tasks-template.md
- Follow-up TODOs: None
-->
# Educational book on Physical AI and Humanoid Robotics with integrated RAG chatbot Constitution

## Core Principles

### I. Accuracy
Accuracy through verifiable technical content and real-world applicability. All technical claims and tutorials must be verifiable against official documentation or reproducible results.

### II. Clarity
Clarity for an educational audience, including students and practitioners with an AI/robotics background. Content should be presented with engaging explanations, diagrams, code snippets, and step-by-step guides, targeting a Flesch-Kincaid grade level of 12-14 for technical depth.

### III. Hands-on Reproducibility
All examples, code, and simulations must be runnable by readers in standard environments (ROS 2, Gazebo, NVIDIA Isaac Sim, etc.). Code and configuration should be clean, commented, and compatible with the specified tools.

### IV. Technical Rigor
Preference for established tools and best practices in ROS 2, NVIDIA Isaac, and RAG systems. Development must adhere strictly to Spec-Kit Plus for spec-driven development and utilize Claude Code for agentic coding assistance.

## Key Standards

- **Verifiability**: All technical claims and tutorials must be verifiable against official documentation or reproducible results.
- **Code Format**: Code and configuration must be clean, commented, and compatible with specified tools (Spec-Kit Plus, Claude Code, Docusaurus, FastAPI, etc.).
- **Tool Usage**: Strict adherence to Spec-Kit Plus for spec-driven development, Claude Code for agentic coding assistance, and OpenAI Agents/ChatKit SDKs for chatbot logic.
- **Content Quality**: Engaging explanations with diagrams, code snippets, and step-by-step guides; Flesch-Kincaid grade 12-14 for technical depth.
- **RAG Chatbot Accuracy**: Responses must be grounded in the book content with high relevance and low hallucination.

## Project Constraints and Success Criteria

### Constraints
- **Platform**: The book will be built exclusively with Docusaurus and deployed to GitHub Pages.
- **RAG Backend**: The RAG backend will use a FastAPI server, Neon Serverless Postgres for metadata/storage, and the Qdrant Cloud Free Tier for the vector database.
- **Content Scope**: The content must strictly cover the provided quarter overview and modules (Robotic Nervous System with ROS 2, Digital Twin with Gazebo/Unity, AI-Robot Brain with NVIDIA Isaac, Vision-Language-Action with LLMs, and Capstone Project).
- **Cost**: No external paid tiers are to be used unless explicitly upgraded from free options.
- **Embedded Chatbot**: The chatbot must be fully functional within the published book and capable of answering questions on book content.

### Success Criteria
- The book is successfully built with Spec-Kit Plus and Claude Code and deployed live on GitHub Pages.
- All tutorials and code examples are reproducible.
- The integrated RAG chatbot is operational and accurately answers queries about the book's content.
- There are zero critical technical errors in the deployment or chatbot functionality.
- The project passes a review for educational completeness, covering all modules and enabling knowledge application.

## Governance

This constitution supersedes all other practices. Amendments require documentation, approval, and a migration plan. All PRs and reviews must verify compliance with these principles. Complexity must be justified.

**Version**: 1.0.0 | **Ratified**: 2025-12-26 | **Last Amended**: 2025-12-26