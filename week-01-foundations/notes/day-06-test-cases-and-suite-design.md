# Day 06: Test Cases & Test Suite Design

## 📌 Overview
Today's study focused on transitioning from user stories to formal test design. We covered test case attributes, writing clear steps and verification points, organizing test suites, and structuring professional test cases based on Pinterest features.

---

## 💡 Core Theoretical Concepts

### 1. Anatomy of a High-Quality Test Case
A standard formal test case includes the following key fields:
- **Test Case ID:** Unique identifier (e.g., `TC_PIN_BOARD_001`).
- **Title / Summary:** Concise statement of what functionality is being verified.
- **Preconditions:** Initial state or prerequisite setup required before execution.
- **Test Steps:** Sequential, unambiguous actions taken by the tester.
- **Test Data:** Specific inputs used during execution (e.g., credentials, search strings).
- **Expected Result:** The exact intended system behavior or outcome.
- **Postconditions:** Clean-up actions required after test execution.

### 2. Test Suite Organization
- **Test Suite:** A structured collection of test cases grouped by functional domain, execution priority, or release objective (e.g., *Smoke Test Suite*, *Board Management Suite*, *Regression Suite*).
- **Test Execution Statuses:** `PASS`, `FAIL`, `BLOCKED`, `SKIPPED`.

---

## 🛠️ Practical Application: Test Case Design (Pinterest Example)

### Test Case: Creating a New Board with Privacy Toggle

| Field | Details |
| :--- | :--- |
| **Test Case ID** | `TC_PIN_BOARD_001` |
| **Title** | Verify creation of a secret (private) board on Pinterest |
| **Priority** | High (P1) |
| **Preconditions** | User is logged in to a valid Pinterest account on desktop web. |
| **Test Data** | Board Name: `Modular Home Decor 2026`, Privacy: `Secret (Enabled)` |

#### Test Steps & Expected Results:
1. **Step:** Click on the profile icon in the top right navigation bar.  
   *Expected Result:* User profile page loads with existing pins and boards visible.
2. **Step:** Click the **"+"** button and select **"Board"** from the drop-down menu.  
   *Expected Result:* "Create board" modal appears with inputs for Board Name and Secret toggle.
3. **Step:** Enter `Modular Home Decor 2026` into the **Name** field.  
   *Expected Result:* Text populates the input field without truncation or errors.
4. **Step:** Toggle the **"Keep this board secret"** switch to **ON**.  
   *Expected Result:* Toggle UI state changes to active/green.
5. **Step:** Click the **"Create"** action button.  
   *Expected Result:* Modal closes, user is redirected to the new board page, and a lock icon appears next to the board title indicating secret status.

---

## 🎯 QA Scenario Drills & Interview Takeaways

- **Scenario: What is the difference between a Test Case and a Test Scenario?**
  * *Response:* A **Test Scenario** is a high-level description of *what* to test (e.g., *"Validate board creation"*), whereas a **Test Case** provides detailed, step-by-step instructions on *how* to test it, including specific inputs, preconditions, and explicit expected results.
