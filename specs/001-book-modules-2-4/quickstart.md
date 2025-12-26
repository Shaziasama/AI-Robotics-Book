# Quickstart Guide: Complete Book Modules 2, 3, and 4

This feature focuses on content creation and Docusaurus site structure. A "quickstart" in the traditional sense (e.g., for setting up a new service or API) is not directly applicable.

This guide outlines how a developer would get started with the Docusaurus project to contribute to or view the content of Modules 2, 3, and 4.

## Prerequisites

*   Node.js (LTS version recommended)
*   npm (usually comes with Node.js)
*   Git

## Getting Started

1.  **Clone the Repository (if not already done):**
    ```bash
    git clone <repository-url>
    cd <repository-directory>/frontend
    ```

2.  **Install Docusaurus Dependencies:**
    ```bash
    npm install
    ```

3.  **Run the Docusaurus Development Server:**
    ```bash
    npm run start
    ```
    This will start a local development server, typically accessible at `http://localhost:3000`. Your browser should automatically open to this address.

4.  **Navigate to Module Content:**
    Once the server is running, you can navigate through the sidebar to view the `Module 2: The Digital Twin (Gazebo & Unity)`, `Module 3: The AI-Robot Brain (NVIDIA Isaac™)`, and `Module 4: Vision-Language-Action (VLA)` sections and their respective chapters.

## Contributing to Content

To contribute new chapters or update existing ones for Modules 2, 3, and 4:

1.  **Locate the Module Directories:**
    New chapters will be created as `.mdx` files within `frontend/docs/module2/`, `frontend/docs/module3/`, or `frontend/docs/module4/`.

2.  **Follow Naming Conventions:**
    Ensure files follow the `01-chapter-title.mdx` format.

3.  **Update `sidebars.js` (if adding new top-level categories or changing existing ones):**
    The `frontend/sidebars.js` file controls the documentation sidebar. Ensure your new chapters are correctly linked.

4.  **Adhere to Content Guidelines:**
    Maintain consistency in educational style, use of admonitions (`:::tip`, `:::info`, `:::warning`), code blocks, and Mermaid diagrams as outlined in `specs/001-book-modules-2-4/spec.md`.
