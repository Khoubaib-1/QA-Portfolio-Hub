# Day 08: Decision Tables & State Transition Testing

## 📌 Overview
Today's study focused on advanced black-box test design techniques—specifically Decision Tables (Cause-Effect Tables) and State Transition Testing. These techniques are used to validate complex business logic with multiple logical combinations and system state changes over time.

---

## 💡 Core Theoretical Concepts

### 1. Decision Table Testing (Cause-Effect Analysis)
- **Concept:** A systematic matrix used to map complex business rules where multiple input conditions (Causes) interact to produce specific system outputs/actions (Effects).
- **Structure:**
  * **Conditions (Inputs):** The logical parameters or user actions being evaluated (TRUE / FALSE or YES / NO).
  * **Actions (Outputs):** The resulting system behaviors triggered by specific condition combinations.
  * **Rules (Columns):** Unique combinations of conditions representing distinct test scenarios.

### 2. State Transition Testing
- **Concept:** Focuses on testing how a system transitions between different operational states based on input events or sequence of interactions.
- **Key Elements:**
  * **States:** The distinct conditions of the system (e.g., *Logged Out*, *Logged In*, *Account Locked*).
  * **Transitions:** The changes from one state to another.
  * **Inputs / Events:** The triggers causing a transition.
  * **Actions:** The immediate system response to an event.

---

## 🛠️ Practical Application: Pinterest Feature Validation

### 1. Decision Table: Pinterest Secret Board Access Rules

**Business Rules:**
- Only the Board Owner or an Invited Collaborator who has accepted the invite can view/edit a Secret Board.
- Unauthenticated users or non-collaborator Pinterest users attempting to access the URL should receive a `404 Not Found` page.

| Conditions & Actions | Rule 1 (Owner) | Rule 2 (Collaborator) | Rule 3 (Logged-in User) | Rule 4 (Logged Out) |
| :--- | :---: | :---: | :---: | :---: |
| **User Logged In?** | Y | Y | Y | N |
| **Is Board Owner?** | Y | N | N | N |
| **Is Accepted Collaborator?** | N | Y | N | N |
| **Action: Display Board & Pins** | **X** | **X** | | |
| **Action: Display 404 / Error Page** | | | **X** | **X** |

---

### 2. State Transition Testing: Pinterest User Account Security State

**System States:** `Logged Out` $\rightarrow$ `Authenticated` $\rightarrow$ `Account Suspended / Locked`