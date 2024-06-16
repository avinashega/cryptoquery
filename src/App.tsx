// src/App.tsx
import React, { useState } from 'react';
import QueryForm from './components/QueryForm';
import ResponseDisplay from './components/ResponseDisplay';
import { getCryptoAnswer } from './api/openai';

const App: React.FC = () => {
  const [answer, setAnswer] = useState<string | null>(null);

  const handleQuerySubmit = async (query: string) => {
    const response = await getCryptoAnswer(query);
    setAnswer(response);
  };

  return (
    <div className="App">
      <h1>Crypto Beginner Helper</h1>
      <QueryForm onSubmit={handleQuerySubmit} />
      <ResponseDisplay answer={answer} />
    </div>
  );
};

export default App;
