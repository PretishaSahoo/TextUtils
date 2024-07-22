import React, { useState, useEffect, useRef } from 'react';
import Groq from "groq-sdk";
import ReactMarkdown from 'react-markdown';

const ChatAI = ({ mode }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{ role: 'Ai', content: 'Hello, I am Your AI ChatBot. Ask me anything you need help with, I am here to help!' }]);
  const endRef = useRef(null);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const groq = new Groq({ apiKey: process.env.REACT_APP_GROQ_API_KEY, dangerouslyAllowBrowser: true });

  const groqResponse = async (input) => {
    try {
      const response = await groq.chat.completions.create({
        messages: [
          {
            role: "system",
            content: `You only answer education , text utility  , technology , science related prompts.\n 
                      The entire conversation with you till now:\n.`
          },
          {
            role: "user",
            content: input,
          },
        ],
        model: "llama3-8b-8192",
        stream: false,
      });

      return response.choices[0].message.content;
    } catch (error) {
      console.error("Error in groqResponse:", error);
      return "Sorry, something went wrong.";
    }
  };

  const handleSend = async () => {
    if (input.trim() === '') return;
    const newMessage = { role: "user", content: input.trim() };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInput("");

    try {
      const reply = await groqResponse(input.trim());
      const AiReply = { role: "Ai", content: reply.trim() };
      setMessages((prevMessages) => [...prevMessages, AiReply]);
    } catch (error) {
      console.error("Error in handleSend:", error);
    }
  };

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      <div className="text-center mt-5 mb-2">
        <h2 className="display-4 font-weight-bold primary-color">AI ChatBot</h2>
      </div>

      <div className={`d-flex flex-column container w-100 max-w-1200 mx-auto p-4 rounded ${mode === 'dark' ? 'bg-dark text-light' : 'bg-white text-dark'}`}
        style={{ boxShadow: "0 0 20px 10px rgba(128, 128, 128, 0.1)", marginBottom: "20px", height: "80vh", padding: "10px" }}>
        <div className="d-flex flex-column h-100">
          <div className="flex-grow-1 overflow-auto mb-4">
            <div className="d-flex flex-column space-y-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-3 rounded ${msg.role === 'Ai' ? 'align-self-start' : 'align-self-end'}`}
                  style={{ 
                    backgroundColor: msg.role === 'Ai' ? '#FF8C00' : '#FF69B4', 
                    maxWidth: '75%',
                    color: '#fff' 
                  }}
                >
                  <ReactMarkdown>{msg.content}</ReactMarkdown>
                </div>
              ))}
              <div ref={endRef} />
            </div>
          </div>
          <div className="d-flex">
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Type your message..."
              className={`flex-grow-1 p-3 border ${mode === 'dark' ? 'border-light bg-secondary text-light' : 'border-secondary bg-white text-dark'} rounded-left`}
            />
            <button
              onClick={handleSend}
              className="p-3 btn  rounded-right"
              style={{backgroundColor:"#FF69B4"}}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatAI;
