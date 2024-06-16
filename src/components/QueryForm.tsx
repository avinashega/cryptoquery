import React, { useState } from 'react';

interface QueryFormProps {
  onSubmit: (query: string) => void;
}

const QueryForm: React.FC<QueryFormProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ask a question about cryptocurrency"
        required
      />
      <button type="submit">Ask</button>
    </form>
  );
};

export default QueryForm;
