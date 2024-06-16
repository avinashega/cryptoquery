import React from 'react';

interface ResponseDisplayProps {
  answer: string | null;
}

const ResponseDisplay: React.FC<ResponseDisplayProps> = ({ answer }) => {
  return (
    <div>
      {answer ? <p>{answer}</p> : <p>Ask a question to get started!</p>}
    </div>
  );
};

export default ResponseDisplay;
