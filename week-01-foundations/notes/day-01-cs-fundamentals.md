# Day 01: QA Mindset & Computer Science Fundamentals

## 📌 Overview
Today's study focused on establishing the core Software Quality Assurance (QA) mindset, understanding the fundamental mechanics of computing systems, binary data representations, and setting up the foundational version control environment using Git and GitHub.

---

## 💡 Core Theoretical Concepts

### 1. The Software Quality Assurance Mindset
- **Quality Control (QC) vs. Quality Assurance (QA):** QC focuses on identifying defects in the final product (reactive testing), whereas QA focuses on optimizing processes to prevent defects during development (proactive quality engineering).
- **Pesticide Paradox:** Running the exact same set of test cases repeatedly will eventually stop revealing new defects. Test suites must be continuously updated and expanded.
- **Early Testing (Shift-Left):** Integrating QA early in the Software Development Life Cycle (SDLC)—such as during requirement gathering and user story grooming—dramatically reduces defect resolution costs.

### 2. Computer Science Fundamentals
- **Binary & Data Representation:** Computers operate on binary digits (bits: 0 and 1). Bytes (8 bits) represent data structures, ASCII/Unicode characters, and network payloads.
- **Memory vs. Storage:** 
  * **RAM (Random Access Memory):** Volatile, high-speed temporary memory used by the operating system and running web browsers to process active execution contexts.
  * **Disk Storage (SSD/HDD):** Non-volatile persistence layer storing database files, operating system files, and static application assets.
- **Operating System (OS) Basics:** Manages hardware allocation (CPU cycles, memory allocation, network I/O) and provides system calls for application processes.

---

## 🛠️ Practical Hands-on: Environment & Version Control Setup

- **Git Initialization:** Configured local repository tracking and established author identity.
- **Key Git Commands Mastered:**
  * `git init` - Initializes local repository tracking.
  * `git add <file>` - Stages changes for commit tracking.
  * `git commit -m "message"` - Creates a local snapshot of changes.
  * `git push origin main` - Synchronizes local commits to GitHub.

---

## 🎯 QA Scenario Drills & Interview Takeaways
- **Question:** *Why is exhaustively testing a software system impossible?*
- **Response:** Due to the infinite combinations of input data, user interaction paths, hardware environments, and network conditions, 100% test coverage is impossible. QA prioritizes testing using risk analysis, equivalence partitioning, and boundary value analysis.
