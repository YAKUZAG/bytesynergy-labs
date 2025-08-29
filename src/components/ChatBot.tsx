import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm ByteBot, your AI assistant. How can I help you learn more about ByteSynergy Labs?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const quickReplies = [
    "Tell me about your services",
    "What industries do you serve?",
    "How do I get started?",
    "What's your pricing model?",
  ];

  const predefinedAnswers: { [key: string]: string } = {
    "Tell me about your services": "We offer AI solutions, cloud development, web & mobile apps, and digital transformation services.",
    "What industries do you serve?": "We serve technology, healthcare, retail, finance, and more. Our solutions are tailored for each industry.",
    "How do I get started?": "Just reach out via our contact form or schedule a free consultation. We'll guide you through every step!",
    "What's your pricing model?": "Our pricing is flexible and project-based. Contact us for a custom quote based on your needs.",
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages([...messages, newMessage]);
    setInputValue('');

    // Predefined bot response
    setTimeout(() => {
      let botText = "Thanks for your message! Our team will get back to you shortly. In the meantime, feel free to explore our services or schedule a consultation.";
      const lowerInput = newMessage.text.toLowerCase();
      for (const key in predefinedAnswers) {
        if (lowerInput.includes(key.toLowerCase())) {
          botText = predefinedAnswers[key];
          break;
        }
      }
      const botResponse = {
        id: newMessage.id + 1,
        text: botText,
        isBot: true,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
    }, 600);
  };

  const handleQuickReply = (reply: string) => {
    setInputValue(reply);
    setTimeout(() => {
      // Wait for inputValue to update before sending
      handleSendMessage();
    }, 0);
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#dfed25] text-black rounded-full shadow-2xl hover:bg-[#c9d91f] transition-all duration-300 flex items-center justify-center group"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: [
            '0 0 20px rgba(223, 237, 37, 0.5)',
            '0 0 40px rgba(223, 237, 37, 0.8)',
            '0 0 20px rgba(223, 237, 37, 0.5)',
          ],
        }}
        transition={{
          boxShadow: {
            duration: 2,
            repeat: Infinity,
          },
        }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-40 w-96 h-[500px] bg-gray-800 border border-[#dfed25] rounded-xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-gray-900 to-black p-4 border-b border-[#dfed25]/30">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#dfed25] rounded-full flex items-center justify-center mr-3">
                  <Bot className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="font-bold text-white">ByteBot</h3>
                  <p className="text-sm text-[#dfed25]">AI Assistant</p>
                </div>
                <div className="ml-auto">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 h-80 overflow-y-auto space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${message.isBot
                      ? 'bg-gray-700 text-white'
                      : 'bg-[#dfed25] text-black'
                      }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Replies */}
            {messages.length === 1 && (
              <div className="px-4 pb-2">
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickReply(reply)}
                      className="text-xs px-3 py-1 bg-gray-700 text-[#dfed25] rounded-full hover:bg-[#dfed25] hover:text-black transition-colors duration-300"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-gray-700">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1 px-3 py-2 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:border-[#dfed25] transition-colors duration-300"
                  placeholder="Type your message..."
                />
                <motion.button
                  onClick={handleSendMessage}
                  className="w-10 h-10 bg-[#dfed25] text-black rounded-lg hover:bg-[#c9d91f] transition-colors duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;