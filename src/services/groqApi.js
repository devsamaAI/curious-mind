// Groq AI API Service
const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY || '';
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

const SYSTEM_PROMPT = `You are CuriousMind, a friendly AI learning assistant. Your job is to explain complex topics in simple language that anyone can understand.

For EVERY response, you MUST structure your answer in EXACTLY this JSON format:
{
  "explanation": "A clear, simple explanation of the concept. Use simple words and short sentences. Avoid jargon. Make it easy for a 10-year-old to understand.",
  "example": "A relatable real-world analogy or example. Use everyday objects and situations like cooking, sports, or everyday activities to illustrate the concept.",
  "exercise": {
    "question": "A multiple choice question to test understanding",
    "options": ["Option A", "Option B", "Option C", "Option D"],
    "correctIndex": 0,
    "explanation": "Brief explanation of why this answer is correct"
  }
}

IMPORTANT RULES:
1. ONLY output valid JSON, no other text before or after
2. Use ** for bold text in explanation and example fields
3. Use line breaks (\\n\\n) to separate paragraphs
4. Make examples fun and relatable
5. Exercise should have exactly 4 options
6. correctIndex is 0-based (0=A, 1=B, 2=C, 3=D)
7. Keep explanations concise but complete`;

export async function getAIResponse(question) {
    try {
        const response = await fetch(GROQ_API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${GROQ_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'llama-3.3-70b-versatile',
                messages: [
                    { role: 'system', content: SYSTEM_PROMPT },
                    { role: 'user', content: `Please explain: ${question}` }
                ],
                temperature: 0.7,
                max_tokens: 1500,
            }),
        });

        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();
        const content = data.choices[0]?.message?.content;

        if (!content) {
            throw new Error('No response content');
        }

        // Parse the JSON response
        const parsed = JSON.parse(content);

        return {
            explanation: parsed.explanation || 'No explanation provided.',
            example: parsed.example || 'No example provided.',
            exercise: parsed.exercise || {
                question: 'What did you learn?',
                options: ['Something new!', 'It was interesting', 'I need to read more', 'All of the above'],
                correctIndex: 3,
                explanation: 'Learning is always valuable!'
            }
        };
    } catch (error) {
        console.error('AI API Error:', error);

        // Return a fallback response
        return {
            explanation: `I encountered an issue while processing your question about "${question}". This could be due to network issues or the AI service being temporarily unavailable.\n\nPlease try again in a moment, or try rephrasing your question!`,
            example: `Think of this like when your internet connection is slow — sometimes you just need to refresh and try again. The AI is working hard to understand your question!`,
            exercise: {
                question: 'What should you do when an AI response fails?',
                options: [
                    'Give up immediately',
                    'Try again or rephrase the question',
                    'Blame the computer',
                    'Stare at the screen'
                ],
                correctIndex: 1,
                explanation: 'Persistence is key! Sometimes rephrasing a question helps the AI understand better.'
            }
        };
    }
}
