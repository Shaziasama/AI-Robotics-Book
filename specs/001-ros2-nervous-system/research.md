# Research for Module 1: The Robotic Nervous System (ROS 2)

## Technology Choices

### Decision: Use ROS 2 Humble
- **Rationale**: As specified in the prompt, ROS 2 Humble is the recommended LTS version, ensuring stability and long-term support for the tutorials. It is the standard for modern robotics development.
- **Alternatives considered**: None, as the version was explicitly requested.

### Decision: Use Docusaurus
- **Rationale**: Docusaurus is a modern static website generator that is ideal for documentation-heavy projects. It supports MDX, which allows for embedding interactive components within the documentation. This fits the requirement for code blocks, diagrams, and step-by-step tutorials.
- **Alternatives considered**: Other static site generators like Jekyll or Hugo were implicitly considered, but Docusaurus is a better fit for this project's needs.

### Decision: Use `rclpy`
- **Rationale**: `rclpy` is the official Python client library for ROS 2. It is the standard and most robust way to interface Python code with the ROS 2 ecosystem.
- **Alternatives considered**: None, as this is the standard library for this purpose.
