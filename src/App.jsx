import { useState } from 'react';
import { topicSuggestions } from './data/sampleResponses';
import { getAIResponse } from './services/groqApi';

// Send Icon Component
const SendIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="22" y1="2" x2="11" y2="13"></line>
        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
    </svg>
);

// Topic Card Component
function TopicCard({ topic, onClick }) {
    return (
        <button className="topic-card" onClick={() => onClick(topic)}>
            <div className="topic-card__icon">{topic.icon}</div>
            <div className="topic-card__title">{topic.question}</div>
            <div className="topic-card__category">{topic.category}</div>
        </button>
    );
}

// Exercise Component
function ExerciseBox({ exercise }) {
    const [selectedOption, setSelectedOption] = useState(null);
    const [showResult, setShowResult] = useState(false);

    const handleOptionClick = (index) => {
        if (!showResult) {
            setSelectedOption(index);
        }
    };

    const handleCheckAnswer = () => {
        if (selectedOption !== null) {
            setShowResult(true);
        }
    };

    const isCorrect = selectedOption === exercise.correctIndex;

    return (
        <div className="exercise-box">
            <div className="exercise-box__question">{exercise.question}</div>
            <div className="exercise-box__options">
                {exercise.options.map((option, index) => {
                    let className = 'exercise-option';
                    if (selectedOption === index) className += ' selected';
                    if (showResult) {
                        if (index === exercise.correctIndex) className += ' correct';
                        else if (selectedOption === index) className += ' incorrect';
                    }

                    return (
                        <button
                            key={index}
                            className={className}
                            onClick={() => handleOptionClick(index)}
                        >
                            <span className="exercise-option__marker">
                                {String.fromCharCode(65 + index)}
                            </span>
                            <span className="exercise-option__text">{option}</span>
                        </button>
                    );
                })}
            </div>

            {!showResult && (
                <button
                    className="exercise-btn"
                    onClick={handleCheckAnswer}
                    disabled={selectedOption === null}
                >
                    ✓ Check Answer
                </button>
            )}

            {showResult && (
                <div className={`exercise-feedback ${isCorrect ? 'exercise-feedback--correct' : 'exercise-feedback--incorrect'}`}>
                    {isCorrect ? '🎉 ' : '💡 '}{exercise.explanation}
                </div>
            )}
        </div>
    );
}

// AI Response Component
function AIResponse({ response }) {
    return (
        <div className="ai-response">
            {/* Simple Explanation Section */}
            <div className="response-section response-section--explanation">
                <div className="response-section__header">
                    <span className="response-section__icon">📖</span>
                    <span className="response-section__title">Simple Explanation</span>
                </div>
                <div className="response-section__content">
                    {response.explanation.split('\n\n').map((paragraph, i) => (
                        <p key={i} dangerouslySetInnerHTML={{
                            __html: paragraph
                                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                .replace(/\n/g, '<br/>')
                        }} />
                    ))}
                </div>
            </div>

            {/* Real-World Example Section */}
            <div className="response-section response-section--example">
                <div className="response-section__header">
                    <span className="response-section__icon">🌍</span>
                    <span className="response-section__title">Real-World Example</span>
                </div>
                <div className="response-section__content">
                    {response.example.split('\n\n').map((paragraph, i) => (
                        <p key={i} dangerouslySetInnerHTML={{
                            __html: paragraph
                                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                .replace(/\n/g, '<br/>')
                        }} />
                    ))}
                </div>
            </div>

            {/* Practice Exercise Section */}
            <div className="response-section response-section--exercise">
                <div className="response-section__header">
                    <span className="response-section__icon">✏️</span>
                    <span className="response-section__title">Practice Exercise</span>
                </div>
                <ExerciseBox exercise={response.exercise} />
            </div>
        </div>
    );
}

// Typing Indicator
function TypingIndicator() {
    return (
        <div className="typing-indicator">
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}

// Message Component
function Message({ message }) {
    return (
        <div className={`message message--${message.type}`}>
            <div className="message__avatar">
                {message.type === 'user' ? '👤' : '🧠'}
            </div>
            <div className="message__content">
                {message.type === 'ai' ? (
                    message.isLoading ? <TypingIndicator /> : <AIResponse response={message.response} />
                ) : (
                    message.text
                )}
            </div>
        </div>
    );
}

// Empty State Component
function EmptyState() {
    return (
        <div className="empty-state">
            <div className="empty-state__icon">💡</div>
            <h2 className="empty-state__title">What are you curious about?</h2>
            <p className="empty-state__text">
                Ask any question and I'll explain it simply with real examples and exercises to help you learn!
            </p>
        </div>
    );
}

// Main App Component
function App() {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSendMessage = async (questionText = inputValue) => {
        if (!questionText.trim() || isLoading) return;

        const userMessage = {
            id: Date.now(),
            type: 'user',
            text: questionText.trim()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsLoading(true);

        // Add loading message
        const loadingMessage = {
            id: Date.now() + 1,
            type: 'ai',
            isLoading: true
        };
        setMessages(prev => [...prev, loadingMessage]);

        // Get real AI response from Groq
        const response = await getAIResponse(questionText);

        // Replace loading message with actual response
        setMessages(prev =>
            prev.map(msg =>
                msg.isLoading
                    ? { ...msg, isLoading: false, response }
                    : msg
            )
        );
        setIsLoading(false);
    };


    const handleTopicClick = (topic) => {
        handleSendMessage(topic.question);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <div className="app-container">
            {/* Header */}
            <header className="header">
                <div className="header__logo">
                    <span className="header__icon">🧠</span>
                    <h1 className="header__title">CuriousMind</h1>
                </div>
                <p className="header__subtitle">
                    Ask anything! I'll explain it simply with real-world examples and fun exercises.
                </p>
            </header>

            {/* Topic Suggestions */}
            {messages.length === 0 && (
                <div className="topic-cards">
                    {topicSuggestions.map(topic => (
                        <TopicCard
                            key={topic.id}
                            topic={topic}
                            onClick={handleTopicClick}
                        />
                    ))}
                </div>
            )}

            {/* Chat Container */}
            <div className="chat-container">
                <div className="messages-container">
                    {messages.length === 0 ? (
                        <EmptyState />
                    ) : (
                        messages.map(message => (
                            <Message key={message.id} message={message} />
                        ))
                    )}
                </div>

                {/* Input Area */}
                <div className="input-area">
                    <input
                        type="text"
                        className="input-field"
                        placeholder="Ask any curious question..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        disabled={isLoading}
                    />
                    <button
                        className="send-btn"
                        onClick={() => handleSendMessage()}
                        disabled={!inputValue.trim() || isLoading}
                        aria-label="Send message"
                    >
                        <SendIcon />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
