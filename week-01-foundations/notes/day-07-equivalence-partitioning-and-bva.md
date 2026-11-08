# Day 07: Equivalence Partitioning & Boundary Value Analysis

## 📌 Overview
Today's study focused on black-box test design techniques—specifically Equivalence Partitioning (EP) and Boundary Value Analysis (BVA). These techniques enable QA engineers to maximize test coverage while minimizing redundant test cases when validating input fields, boundary limits, and data validation rules.

---

## 💡 Core Theoretical Concepts

### 1. Equivalence Partitioning (EP)
- **Concept:** Divides the input data domain into valid and invalid partitions (classes) where the system is expected to exhibit identical processing behavior for any value within that class.
- **Goal:** Select one representative value from each partition to reduce test suite redundancy without dropping quality coverage.

### 2. Boundary Value Analysis (BVA)
- **Concept:** Focuses on testing at the boundaries (edges) of valid and invalid input partitions, where software defect probability is highest.
- **Standard Values Tested (2-Point BVA):**
  * **Min / Max (Valid Boundaries)**
  * **Min - 1 / Max + 1 (Invalid Boundaries)**
- **Extended Values (3-Point BVA):** `Min-1`, `Min`, `Min+1`, `Nominal (Typical)`, `Max-1`, `Max`, `Max+1`.

---

## 🛠️ Practical Application: Pinterest Board Name Input Field Validation

### Requirement Specification:
> Pinterest board names must be between **1 and 50 characters** long. Empty field submissions or board names exceeding 50 characters must be rejected with an inline validation error.

### 1. Equivalence Partitioning (EP) Table
| Partition ID | Input Description | Character Count Range | Expected Result | Partition Type |
| :--- | :--- | :--- | :--- | :--- |
| **EP1** | Empty / Missing Input | `0 characters` | Reject & display "Board name cannot be empty" error | Invalid |
| **EP2** | Valid Board Name length | `1 to 50 characters` | Accept & create board successfully | Valid |
| **EP3** | Exceeds Max length | `51+ characters` | Reject or truncate input at 50 characters | Invalid |

### 2. Boundary Value Analysis (BVA) Test Cases (2-Point BVA)
| Test Case ID | Character Count | Test Data Value | Expected Result | Boundary Tested |
| :--- | :--- | :--- | :--- | :--- |
| `TC_BVA_001` | `0` | `""` (Empty string) | Inline Validation Error | Invalid (Min - 1) |
| `TC_BVA_002` | `1` | `"A"` | Board Created Successfully | Valid (Min) |
| `TC_BVA_003` | `50` | 50-character string (`"A"*50`) | Board Created Successfully | Valid (Max) |
| `TC_BVA_004` | `51` | 51-character string (`"A"*51`) | Rejected / Truncated | Invalid (Max + 1) |

---

## 🎯 QA Scenario Drills & Interview Takeaways

- **Scenario: Why do we combine EP and BVA instead of testing random inputs?**
  * *Response:* Exhaustive testing is impossible. Equivalence Partitioning ensures we test every logical input condition without executing redundant tests, while Boundary Value Analysis targets the exact edge cases where developers typically make off-by-one errors ($<$ vs $\le$). Combining both provides maximum defect detection with optimal test suite efficiency.
