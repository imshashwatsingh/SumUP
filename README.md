# Sum Up !

## Description
AI Content Summarizer is a web-based application built using the **PERN stack (PostgreSQL, Express.js, React, Node.js)** that allows users to summarize long articles or pieces of content quickly and efficiently using Google's Gemini AI API. The app utilizes a simple interface where users can input text, and AI will provide a concise summary of the content.

## Features
- **Content Summarization**: Automatically summarizes the entered text using Gemini AI's language model.
- **Responsive Design**: Fully responsive UI that works across devices (mobile, tablet, desktop).
- **Error Handling**: Provides error messages when the AI service fails or invalid input is provided.
- **Minimalistic Interface**: A clean and simple interface for better user experience.

## Technologies Used
- **Frontend**:
  - **EJS** (Embedded JavaScript Templates) for rendering dynamic HTML views
  - **CSS** for styling (Responsive Design using custom styles)
- **Backend**:
  - **Node.js** with **Express.js** for building the server
  - **Axios** for making API requests to Gemini AI API
  - **dotenv** for managing environment variables
- **AI Model**:
  - **Google Gemini AI** API for content summarization
- **Database**:
  - **PostgreSQL** (Not actively used but can be extended to store data)

## Prerequisites
Before running the application, make sure you have the following installed:
- **Node.js** (preferably the latest version)
- **PostgreSQL** (if you plan to extend the project with database features)
- **API Key for Gemini AI** (Sign up and get an API key from [Google Cloud](https://cloud.google.com/))

## Installation Instructions
1. **Clone the repository**:
   ```bash
   git clone https://github.com/imshashwatsingh/SumUP.git
    ```
2. **Install dependencies**:
    ```bash
    npm i
    ```

3. **Run the server after seting up your_api_key from Gemini@Google**:
   ```bash
    node index.js
    ```
---

## 🙍🏻‍♂️ Contribution

Feel free to fork this project and submit pull requests to enhance it or report issues.

---
