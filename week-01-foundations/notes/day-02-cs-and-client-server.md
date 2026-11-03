# Day 02: Computer Science & Client-Server Architecture

## 📌 Overview
Today's study focused on how web applications transfer data between the client (front-end) and server (back-end), alongside data transmission fundamentals and browser network inspection using Pinterest as a live model.

---

## 💡 Core Theoretical Concepts

### 1. Client-Server Architecture
- **Client (Front-End):** The user interface layer (Browser / Mobile App) built with HTML, CSS, and JavaScript. Responsible for presenting UI elements (like the Pinterest pin grid, search bar, and navigation menus) and initiating requests.
- **Server (Back-End):** The application processing layer. Handles business logic, authentication, request validation, and database queries when fetching user pins, boards, or recommendations.
- **Database Layer:** Storage system where application data (user profiles, board metadata, image asset paths, and saved pins) is persisted, queried, and updated.

### 2. Request-Response Lifecycle (Pinterest Example)
1. User enters `pinterest.com` or searches for "minimalist interior design".
2. Browser issues a DNS lookup to resolve the IP address for Pinterest's servers.
3. Client sends an HTTP/HTTPS Request to the target server port.
4. Server evaluates business rules, fetches relevant image pins from the database, and responds with an HTTP Status Code and JSON payload containing pin details and image URLs.

---

## 🛠️ Practical Hands-on: Chrome DevTools Inspection

- **Target Application:** Pinterest (`https://www.pinterest.com`)
- **Tool Used:** Chrome Developer Tools (Network Tab)
- **Observed Data:**
  * **Request URL:** `https://www.pinterest.com/resource/BaseSearchResource/get/`
  * **Request Method:** `GET` (or `POST` for user actions like saving a pin)
  * **Status Code:** `200 OK`
  * **Content Type:** `application/json`

---

## 🎯 QA Takeaways & Bug Isolation Strategy
- **Client-side Defect:** Visual bugs on Pinterest, such as pin grid images overlapping, masonry layout misalignments, or missing client validation on input fields.
- **Server-side Defect:** Data manipulation errors, `500 Internal Server Error` when trying to save a pin, `404 Not Found` on deleted board links, or invalid HTTP JSON payload responses from the API.
