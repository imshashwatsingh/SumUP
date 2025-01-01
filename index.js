import express from "express";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

const app = express();
const PORT = process.env.PORT || 3000;

// Enable `.env` configuration
dotenv.config();

// Gemini API setup
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Middleware
app.use(express.urlencoded({ extended: true }));

// Resolve __dirname for ESM
app.use(express.static("public"));

// Routes
app.get("/", (req, res) => {
  res.render("index.ejs");
});


// for testing !
app.get("/error",(req,res)=>{
    res.render("error.ejs",{
        message : "testing error"
    })
})

// Summarization route
app.post("/summarize", async (req, res) => {
  const { content } = req.body;

  try {
    // Use Gemini API to generate content summary
    const result = await model.generateContent(
      `Summarize the following content: ${content}`
    );
    const summary = result.response.text();

    res.render("result.ejs", { summary });
  } catch (error) {
    console.error("Error during summarization:", error.message, error.stack);
    res
      .status(500)
      .render("error.ejs", {
        message:
          "An error occurred while summarizing your content. Please try again later.",
      });
  }
});

// Start server
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
