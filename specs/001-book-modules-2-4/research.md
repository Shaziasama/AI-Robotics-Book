# Research Findings: Complete Book Modules 2, 3, and 4

This document summarizes research conducted during the planning phase for implementing Modules 2, 3, and 4 into the Docusaurus project.

## Research Questions & Resolutions

### 1. Docusaurus ID Generation for Chapter Files

*   **Question**: How does Docusaurus generate document IDs from filenames, especially when leading numbers are present?
*   **Resolution**: Docusaurus automatically infers document IDs from filenames. It typically strips leading numbers and hyphens if a custom `id` is not provided in the frontmatter. For example, a file named `01-chapter-title.mdx` will result in an ID `chapter-title`.
*   **Rationale**: Observed behavior during Module 1 implementation, where the sidebar configuration needed to be adjusted to `module1/nodes-topics-services` instead of `module1/01-nodes-topics-services`.
*   **Implication for Plan**: The `sidebars.js` configuration will need to use these inferred IDs (e.g., `moduleX/chapter-title`) rather than the full filename with leading numbers.

## Technology Choices & Best Practices

### Docusaurus Content Structure

*   **Decision**: Continue using MDX for all chapter content.
*   **Rationale**: MDX allows for a rich combination of Markdown and React components, enabling features like admonitions (`:::tip`, `:::info`, `:::warning`) and embedded Mermaid diagrams, which are explicitly requested in the feature specification. This maintains consistency with Module 1.
*   **Best Practices**:
    *   Utilize frontmatter (`title`, `sidebar_label`) for consistent display and navigation.
    *   Organize content logically within `docs/moduleX/` directories.
    *   Ensure proper use of Markdown and MDX syntax for code blocks, lists, and headings.

### Integration of Mermaid Diagrams

*   **Decision**: Leverage Docusaurus's built-in or plugin support for Mermaid diagrams.
*   **Rationale**: Mermaid is explicitly requested and provides a text-based way to create diagrams, which aligns with documentation-as-code principles.
*   **Best Practices**:
    *   Embed Mermaid syntax within code blocks of type `mermaid`.
    *   Ensure diagrams are clear, concise, and accurately represent the described concepts (e.g., ROS 2 communication flows, agent architectures).

### Code Reproducibility

*   **Decision**: Prioritize providing complete, runnable code examples for all tutorials.
*   **Rationale**: A key success criterion is that "all code/examples reproducible on standard setups." This requires careful attention to dependencies, environment setup, and providing clear instructions.
*   **Best Practices**:
    *   Specify exact versions for ROS 2 distributions, Python, and any other relevant software.
    *   Provide `package.xml` and `setup.py` (for Python) or equivalent configuration files where necessary.
    *   Include clear setup instructions and expected output.

## Assumptions

*   The existing Docusaurus project is properly configured and functioning (as demonstrated by Module 1's successful implementation after fixes).
*   The Docusaurus version supports MDX, admonitions, and Mermaid diagrams directly or via installed plugins.
*   The target audience (students with AI background) has a basic understanding of programming concepts and can follow technical instructions.
