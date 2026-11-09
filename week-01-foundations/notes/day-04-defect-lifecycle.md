# Day 04: Defect Lifecycle & Jira Bug Reporting

## 📌 Overview
Today's study focused on the complete Defect Life Cycle (Bug Life Cycle), understanding defect severity versus priority, mastering root-cause analysis, and writing professional, high-quality bug reports using Pinterest as a practical context.

---

## 💡 Core Theoretical Concepts

### 1. Defect Life Cycle Stages
- **New / Open:** Defect is discovered, logged by QA, and initially triaged.
- **Assigned:** Bug is routed to a specific developer/team for resolution.
- **In Progress / Fixed:** Developer investigates, resolves the root cause, and updates the ticket status.
- **Ready for Test (Re-test):** Code fix is deployed to the QA/Staging environment.
- **Closed:** QA verifies the fix in Staging; behavior matches expected results.
- **Reopened:** QA re-tests the issue and finds the defect persists or partially fails.
- **Deferred / Rejected:** Postponed to a future release or rejected as "Works as Designed."

### 2. Severity vs. Priority Matrix
- **Severity:** Impact of the defect on system functionality (Technical impact).
- **Priority:** Urgency with which the business needs the defect fixed (Business impact).

| Classification | Scenario Example (Pinterest) |
| :--- | :--- |
| **High Severity / High Priority** | Critical payment pipeline crash or user authentication system completely down. |
| **High Severity / Low Priority** | Rare edge-case database crash occurring only on legacy OS versions (iOS 12). |
| **Low Severity / High Priority** | Misspelled company logo or broken legal footer link on the home page before a press release. |
| **Low Severity / Low Priority** | Minor alignment issue of a secondary icon on an infrequently visited settings page. |

---

## 🛠️ Practical Application: Professional Bug Report (Pinterest Example)

### Bug Ticket Title:
`[Bug] Pinterest Desktop - Share Modal: "Copy Link" button fails to copy URL to clipboard`

### Bug Description & Metadata:
- **Environment:** Windows 11 Home (22H2), Google Chrome `v122.0.6261.95`
- **Severity:** Medium (Functional impairment with existing workaround)
- **Priority:** Medium (P2)
- **Preconditions:** User is logged into an active Pinterest account and navigating a public board.

### Steps to Reproduce (STR):
1. Navigate to `https://www.pinterest.com/pin/123456789/`.
2. Click the **Share** button on the top right of the pin container.
3. Click the **"Copy Link"** action button in the share popover.
4. Open a new browser tab and paste (`Ctrl + V`) into the address bar.

### Expected Result:
The Pin URL (`https://www.pinterest.com/pin/123456789/`) is copied to the system clipboard, and a confirmation toast *"Link copied!"* appears.

### Actual Result:
Nothing is copied to the system clipboard (clipboard remains unchanged or keeps previous content). No confirmation toast message is displayed.

---

## 🎯 QA Scenario Drills & Interview Takeaways

- **Scenario: A developer marks your bug report as "Cannot Reproduce" (CNR). How do you proceed?**
  * *Response:* First, verify that the environment parameters match (browser, OS version, build version). Perform a fresh test run, record a clear screen capture/video showing the exact steps and Console/Network logs, attach them to the Jira ticket, and sync directly with the developer to demonstrate the issue.
