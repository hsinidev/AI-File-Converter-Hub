# AI File Converter Hub

[![Powered by Google Gemini](https://img.shields.io/badge/Powered%20by-Google%20Gemini-blue.svg)](https://ai.google.dev/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

An intelligent, AI-powered web application for transforming your files. Go beyond simple format changes—understand, interpret, and repurpose your content with the power of Google's Gemini model.

## ✨ Introduction

Traditional file converters change a file's container (e.g., `.png` to `.jpg`) but don't understand the content inside. The **AI File Converter Hub** is different. It leverages advanced generative AI to perform intelligent transformations on your documents and images.

Whether you're a student trying to digitize notes, a developer structuring data, or a content creator looking for inspiration, this tool is designed to streamline your workflow and unlock new possibilities.

## 🚀 Features

Our hub offers a suite of specialized, single-purpose tools:

*   🖼️ **Image to Text (OCR):** Extract editable text from any image. Perfect for digitizing documents, receipts, and signs.
*   📄 **Summarize Document:** Get a quick, AI-generated summary of long documents. Supports `.txt`, `.pdf`, and `.doc(x)` files.
*   ✍️ **Rephrase Document:** Rewrite text to fit a different tone—make it more professional, casual, or simple.
*   🧮 **Text to JSON:** Automatically convert unstructured text into a clean, structured JSON format based on your instructions.
*   ✨ **Story from Image:** Generate a short, creative story inspired by the contents of an image.
*   👁️ **Image Description (ALT Text):** Create descriptive, SEO-friendly alt text for images to improve accessibility.

## 🛠️ Tech Stack

*   **Frontend:** [React](https://reactjs.org/) & [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **AI Engine:** [Google Gemini API](https://ai.google.dev/) via the [`@google/genai`](https://www.npmjs.com/package/@google/genai) SDK
*   **Module Loading:** Native ES Modules with [Import Maps](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap)

## 🔧 Getting Started & Local Development

To run this project on your local machine, follow these steps:

### Prerequisites

*   [Node.js](https://nodejs.org/en/) (v18 or higher recommended)
*   A package manager like `npm` or `yarn`
*   A Google Gemini API Key. You can get one from [Google AI Studio](https://aistudio.google.com/app/apikey).

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/ai-file-converter-hub.git
    cd ai-file-converter-hub
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up your environment variables:**
    This project expects the Gemini API key to be available as an environment variable (`process.env.API_KEY`). How you set this will depend on your development server setup. For Vite, you would create a `.env.local` file in the root of the project:
    ```
    VITE_API_KEY=YOUR_GEMINI_API_KEY_HERE
    ```
    You would then need to adapt the code to use `import.meta.env.VITE_API_KEY` instead of `process.env.API_KEY`.

4.  **Run the development server:**
    Most modern React toolchains use a command like:
    ```bash
    npm run dev
    ```
    The application should now be running on a local port (e.g., `http://localhost:5173`).

## 📂 Project Structure

The project is organized with a focus on modularity and clarity:

```
/
├── public/
├── src/
│   ├── components/
│   │   ├── icons/       # SVG icon components
│   │   └── ...          # Other UI components
│   ├── services/
│   │   └── geminiService.ts # Logic for Gemini API interaction
│   ├── App.tsx          # Main application component
│   ├── constants.tsx    # Configuration for all converters
│   ├── index.tsx        # Entry point
│   └── types.ts         # TypeScript type definitions
├── index.html
├── metadata.json
└── package.json
```

## 🤝 Contributing

Contributions are welcome! If you have a suggestion for a new converter or want to improve an existing one, please feel free to:

1.  Fork the repository.
2.  Create a new feature branch (`git checkout -b feature/your-amazing-feature`).
3.  Make and commit your changes (`git commit -m 'Add some amazing feature'`).
4.  Push to the branch (`git push origin feature/your-amazing-feature`).
5.  Open a Pull Request.

## 📄 License

This project is licensed under the MIT License.

---

**Developed by HSINI MOHAMED**
