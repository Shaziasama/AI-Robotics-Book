# Tasks: Module 1: The Robotic Nervous System (ROS 2)

**Input**: Design documents from `/specs/001-ros2-nervous-system/`
**Prerequisites**: plan.md, spec.md, data-model.md

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions.
- **Ensure each task upholds constitution**: Accuracy, Clarity, Reproducibility.

## Phase 1: Setup (Shared Infrastructure)

- [ ] T001 Create the directory structure for the new module at `docs/module1/`.

---

## Phase 2: Foundational (Blocking Prerequisites)

*No foundational tasks are required for this documentation feature.*

---

## Phase 3: User Story 1 - ROS 2 Fundamentals (Priority: P1) 🎯 MVP

**Goal**: Create Chapter 1, providing readers with a solid foundation in core ROS 2 concepts.
**Independent Test**: Readers can successfully compile and run the talker/listener and client/service examples.

### Implementation for User Story 1

- [ ] T002 [P] [US1] Create the chapter file `docs/module1/01-nodes-topics-services.mdx`.
- [ ] T003 [P] [US1] Add Docusaurus frontmatter (title, sidebar_label) to `docs/module1/01-nodes-topics-services.mdx`.
- [ ] T004 [US1] Write the "ROS 2 Architecture" overview section.
- [ ] T005 [US1] Write the tutorial for creating a ROS 2 publisher and subscriber (talker/listener).
- [ ] T006 [US1] Write the tutorial for creating a ROS 2 service and client.
- [ ] T007 [P] [US1] Add examples of `ros2` CLI commands for introspection.
- [ ] T008 [P] [US1] Create and embed Mermaid diagrams to explain the concepts.
- [ ] T009 [P] [US1] Write the "custom counter" exercise for the end of the chapter.
- [ ] T010 [US1] Review and edit the chapter for clarity, style, and grammar, ensuring it meets the 800-1200 word count.
- [ ] T011 [US1] **Verify** that all code examples and tutorials in the chapter are runnable and produce the expected output.

---

## Phase 4: User Story 2 - Bridging Python Agents (Priority: P1)

**Goal**: Create Chapter 2, teaching readers how to connect Python AI logic with ROS 2.
**Independent Test**: Readers can run the provided reactive agent script and see it control a simulated robot.

### Implementation for User Story 2

- [ ] T012 [P] [US2] Create the chapter file `docs/module1/02-python-agents.mdx`.
- [ ] T013 [P] [US2] Add Docusaurus frontmatter to `docs/module1/02-python-agents.mdx`.
- [ ] T014 [US2] Write the content explaining the role of agents in robotics.
- [ ] T015 [US2] Write the tutorial for the reactive agent, controlling `/cmd_vel` from `/scan` data.
- [ ] T016 [P] [US2] Create and embed a flow diagram illustrating the agent's logic.
- [ ] T017 [P] [US2] Add a section on best practices for writing `rclpy` code.
- [ ] T018 [P] [US2] Write the "improved obstacle avoidance" exercise.
- [ ] T019 [US2] Review and edit the chapter, ensuring it meets the 600-1000 word count.
- [ ] T020 [US2] **Verify** that the reactive agent script is fully runnable and functional as described.

---

## Phase 5: User Story 3 - Humanoid URDF (Priority: P2)

**Goal**: Create Chapter 3, introducing readers to robot modeling with URDF for humanoids.
**Independent Test**: Readers can create a simple URDF file and visualize it correctly in RViz2.

### Implementation for User Story 3

- [ ] T021 [P] [US3] Create the chapter file `docs/module1/03-urdf-humanoids.mdx`.
- [ ] T022 [P] [US3] Add Docusaurus frontmatter to `docs/module1/03-urdf-humanoids.mdx`.
- [ ] T023 [US3] Write the content explaining URDF and Xacro basics.
- [ ] T024 [US3] Write the tutorial for creating a simplified humanoid model.
- [ ] T025 [US3] Write the tutorial for visualizing the URDF in RViz2.
- [ ] T026 [P] [US3] Add recommendations for open-source humanoid models and humanoid-specific tips.
- [ ] T027 [P] [US3] Write the "modify joints" exercise.
- [ ] T028 [US3] Write the module conclusion and a teaser for Module 2.
- [ ] T029 [US3] Review and edit the chapter, ensuring it meets the 700-1000 word count.
- [ ] T030 [US3] **Verify** that the URDF can be created and visualized as described in the tutorial.

---

## Phase N: Polish & Cross-Cutting Concerns

- [ ] T031 [P] Read through all three chapters to ensure a smooth narrative flow, consistent terminology, and correct transitions.
- [ ] T032 [P] Verify the total word count for the module is between 2000 and 3500 words.
- [ ] T033 Final check that all requirements from `plan.md` and `spec.md` are met.
- [ ] T034 Run a final spell check and grammar check across all three files.
