// src/api/openai.ts
import axios from 'axios';

const API_KEY = 'your-openai-api-key-here'; // Replace with your OpenAI API key

const apiClient = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_KEY}`
  }
});

export const getCryptoAnswer = async (query: string) => {
  try {
    const response = await apiClient.post('/completions', {
      model: 'text-davinci-003',
      prompt: query,
      max_tokens: 150,
    });

    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error fetching data from OpenAI', error);
    throw error;
  }
};
