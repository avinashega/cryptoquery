# CryptoQuery Assistant

CryptoQuery Assistant is a React application designed to help beginners learn about cryptocurrency. By leveraging the OpenAI API, users can ask questions and receive informative answers about various aspects of the cryptocurrency world.

## Features

- User-friendly interface for asking cryptocurrency-related questions.
- Real-time responses from the OpenAI API.
- Clear and concise answers tailored for beginners.

## Installation

### Prerequisites

- Node.js (v12 or later)
- npm (v6 or later)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/cryptoquery-assistant.git
   cd cryptoquery-assistant

 2. Install dependencies:
    ```bash
    npm install
  
 3. Set up your OpenAI API key:
    - Create a file named .env in the root directory.
    - Add your OpenAI API key to the .env file:
    ```bash
    REACT_APP_OPENAI_API_KEY=your-openai-api-key-here

 4. Start the development server:
    ```bash
    npm start

## Project Structure
```bash
cryptoquery-assistant/
├── public/
├── src/
│   ├── api/
│   │   └── openai.ts
│   ├── components/
│   │   ├── QueryForm.tsx
│   │   └── ResponseDisplay.tsx
│   ├── types/
│   │   └── index.ts
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── index.tsx
│   └── react-app-env.d.ts
├── .gitignore
├── package.json
├── README.md
└── tsconfig.json
```

### Usage

### Enter a question about cryptocurrency in the input field.
Click the "Ask" button.
View the response provided by the OpenAI API.

### Example Questions
What is Bitcoin?

How do I buy Ethereum?

What is blockchain technology?

Are cryptocurrencies a good investment?

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes.
