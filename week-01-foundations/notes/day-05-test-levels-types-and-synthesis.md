# Day 05: Test Levels, Test Types & Week 1 Synthesis

## 📌 Overview
Today's study focused on categorizing levels of testing, distinguishing non-functional from functional testing types, and performing a comprehensive synthesis of Week 1 manual QA foundations using Pinterest as a target operational model.

---

## 💡 Core Theoretical Concepts

### 1. Test Levels (V-Model / Testing Hierarchy)
- **Unit Testing:** Validating isolated code functions/methods (executed by developers).
- **Integration Testing:** Verifying communication between integrated modules or API interfaces (e.g., verifying Pinterest client API calls to the backend database).
- **System Testing:** End-to-end evaluation of the fully integrated software application against specified requirements (executed by QA).
- **User Acceptance Testing (UAT):** Validating product suitability for real business end-users before production deployment.

### 2. Functional vs. Non-Functional Testing
- **Functional Testing:** Verifying *what* the system does (e.g., Smoke, Sanity, Regression, Boundary Value Analysis, Equivalence Partitioning).
- **Non-Functional Testing:** Verifying *how* the system performs under constraints (e.g., Performance/Load, Security, Accessibility, Usability, Compatibility).

---

## 🛠️ Practical Application: Pinterest Test Classification

| Test Type | Test Level | Pinterest Operational Example |
| :--- | :--- | :--- |
| **Integration** | Component/API | Verifying Pinterest search API returns standard JSON schema to the front-end grid. |
| **Functional (Smoke)** | System | Verifying a user can successfully log in and save a pin to a board. |
| **Functional (Regression)** | System | Executing full test suite on board settings after introducing a new collaboration feature. |
| **Non-Functional (Load)** | System | Simulating 50,000 concurrent user requests during peak holiday traffic to test server response times. |
| **Non-Functional (Usability)** | UAT / System | Assessing visual clarity, masonry grid alignment, and screen reader compatibility across desktop viewports. |

---

## 🎯 Week 1 Synthesis & Interview Review

- **Core QA Takeaway:** QA prevents defects early through shift-left testing, validates user stories during Scrum events, reports reproducible defects with clear severity/priority metrics, and evaluates software across multiple testing levels to ensure delivery of a high-quality product Increment.
