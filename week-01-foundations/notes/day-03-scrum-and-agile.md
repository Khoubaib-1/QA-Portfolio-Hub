Week 1 QA portfolio 


# Day 03: Scrum Framework & Agile Principles

## 📌 Overview
Today's study focused on the Scrum framework within Agile software development, detailing core roles, events, and artifacts, alongside mapping the explicit responsibilities of a Manual QA Engineer across the entire sprint lifecycle.

---

## 💡 Core Theoretical Concepts

### 1. Scrum Roles & QA Integration
- **Product Owner (PO):** Defines product vision, prioritizes the Product Backlog, and writes User Stories with explicit Acceptance Criteria.
- **Scrum Master (SM):** Facilitates Scrum events, removes blockers, and ensures the team adheres to Agile processes.
- **Development Team (Developers & QA):** Cross-functional team responsible for delivering a potentially releasable Increment of software every sprint.
  * **QA's Role:** Acts as the quality advocate—validating acceptance criteria early (shift-left), writing test cases, executing tests, and verifying bug fixes.

### 2. Scrum Events & QA Responsibilities
| Scrum Event | Primary Purpose | QA Specific Responsibilities |
| :--- | :--- | :--- |
| **Sprint Planning** | Define the Sprint Goal and select backlog items. | Analyze user stories, highlight edge cases, and estimate QA effort (story points). |
| **Daily Standup** | 15-minute daily sync (What I did, What I'll do, Blockers). | Report testing progress, announce blocked test execution, or surface critical defects. |
| **Sprint Review** | Demo completed work to stakeholders. | Ensure demonstrated features meet the Definition of Done (DoD) without open critical bugs. |
| **Retrospective** | Process improvement and team reflection. | Provide feedback on testing bottlenecks, environment instability, or requirement gaps. |

### 3. Key Scrum Artifacts
- **Product Backlog:** Ordered list of everything needed in the product.
- **Sprint Backlog:** The subset of Product Backlog items selected for execution in the current sprint.
- **Increment:** The sum of all completed backlog items that meet the **Definition of Done (DoD)**.

---

## 🛠️ Practical Application: Pinterest Feature Breakdown

### User Story Example (Pinterest Board Collaboration)
> **As a** Pinterest user,  
> **I want to** invite a friend to collaborate on my private board via an email link,  
> **So that** we can save and organize shared pin ideas together.

#### Acceptance Criteria (AC):
1. Clicking "Invite Collaborators" opens a modal displaying an email input field and shareable link.
2. Sending an invite to a valid email triggers a confirmation toast: *"Invite sent successfully"*.
3. An invitee clicking the link while logged in is immediately added as a collaborator with edit rights.
4. If an invalid email format is entered, the system displays an inline error: *"Please enter a valid email address"*.

---

## 🎯 QA Scenario Drills & Interview Responses

- **Scenario 1: A User Story lacks Acceptance Criteria during Sprint Planning.**
  * *QA Action:* Flag the story immediately during refinement/planning. Ask the PO to clarify expected behaviors and failure states before agreeing to commit the story to the sprint.

- **Scenario 2: A developer marks a ticket as "Done" on the last day of the sprint without QA testing.**
  * *QA Action:* The ticket cannot be considered "Done" because it violates the **Definition of Done (DoD)**. Move it to the next sprint or notify the Scrum Master that testing must complete before deployment.
