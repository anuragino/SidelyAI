# Sidely AI Backend Server

This backend server handles form submissions for Sidely AI. Built with Node.js, Express, TypeScript, and MongoDB.

## Getting Started

### 🚦 Installation

1. **Clone the repository:** `git clone <https://github.com/anuragino/SidelyAI>`

2. **Install dependencies:**  `npm install`

3. **Compile TypeScript files:** `npx tsc`

4. **Start the server:** `node dist/index.js`


### 🌟 API Endpoint

1. **/ping**- A GET request that always returns True
2. **/submit** - A POST request with parameters "name", "email", "phone", "github_link" and "stopwatch_time"
3. **/read** - A GET request with query parameter "index" which is a 0-index for reading the (index+1)th form submission.
4. **/delete** - A DELETE request with query parameter "email" to delete the submission associated with the specified email.
5. **/update** - A PUT request with query parameter "email" and body parameters: "name", "email", "phone", "github_link" and "stopwatch_time".
6. **/search** - A GET request with query parameter "email" to search for a submission with the specified email.




