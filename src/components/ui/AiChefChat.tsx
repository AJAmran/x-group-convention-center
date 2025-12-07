"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, ChefHat, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface Message {
    id: string;
    sender: "user" | "ai";
    text: string;
}

const generateId = () => Math.random().toString(36).substr(2, 9);

const INITIAL_MESSAGES: Message[] = [
    {
        id: "1",
        sender: "ai",
        text: "Bonjour! I am Chef Gustav. How can I assist you with your menu planning today?",
    },
];

export const AiChefChat: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
    const [inputText, setInputText] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    useEffect(() => {
        const handleOpenChat = () => setIsOpen(true);
        window.addEventListener("open-ai-chat", handleOpenChat);
        return () => window.removeEventListener("open-ai-chat", handleOpenChat);
    }, []);

    const handleSendMessage = () => {
        if (!inputText.trim()) return;

        const newMessage: Message = {
            id: generateId(),
            sender: "user",
            text: inputText,
        };

        setMessages((prev) => [...prev, newMessage]);
        setInputText("");
        setIsTyping(true);

        // Mock AI Response
        setTimeout(() => {
            const responseText = getMockAiResponse(inputText);
            const aiMessage: Message = {
                id: generateId(),
                sender: "ai",
                text: responseText,
            };
            setMessages((prev) => [...prev, aiMessage]);
            setIsTyping(false);
        }, 1500);
    };

    const getMockAiResponse = (input: string): string => {
        const lower = input.toLowerCase();
        if (lower.includes("price") || lower.includes("cost")) {
            return "Our packages start from $45/head for corporate lunches and go up to $85/head for our Royal Gala. I can customize a quote based on your guest count!";
        }
        if (lower.includes("vegetarian") || lower.includes("vegan")) {
            return "Absolutely! We specialize in fusion vegetarian cuisine. Our Mango Cardamom Mousse is a crowd favorite.";
        }
        if (lower.includes("wedding")) {
            return "Congratulations! For weddings, I highly recommend our Grand Sapphire Ballroom. Would you like to see a sample 7-course menu?";
        }
        return "That sounds wonderful. Tell me more about your preferences, and I can suggest the perfect pairing from our culinary portfolio.";
    };

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed bottom-24 right-6 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 flex flex-col max-h-[500px]"
                    >
                        {/* Header */}
                        <div className="bg-convention p-4 flex justify-between items-center text-white">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                    <ChefHat size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm">Chef Gustav</h3>
                                    <p className="text-xs text-blue-100 flex items-center gap-1">
                                        <span className="w-2 h-2 bg-green-400 rounded-full"></span>{" "}
                                        Online
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white/80 hover:text-white"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 h-80">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={cn(
                                        "flex max-w-[80%]",
                                        msg.sender === "user" ? "ml-auto justify-end" : ""
                                    )}
                                >
                                    <div
                                        className={cn(
                                            "p-3 rounded-2xl text-sm shadow-sm",
                                            msg.sender === "user"
                                                ? "bg-convention text-white rounded-br-none"
                                                : "bg-white text-gray-800 border border-gray-200 rounded-bl-none"
                                        )}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex max-w-[80%]">
                                    <div className="bg-white p-3 rounded-2xl rounded-bl-none border border-gray-200 shadow-sm">
                                        <Loader2 size={16} className="animate-spin text-gray-400" />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-3 bg-white border-t border-gray-100">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={inputText}
                                    placeholder="Ask about menu, venues..."
                                    className="flex-1 px-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-convention/50"
                                    onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                                    onChange={(e) => setInputText(e.target.value)}
                                />
                                <button
                                    onClick={handleSendMessage}
                                    disabled={!inputText.trim()}
                                    className="w-10 h-10 bg-convention text-white rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-convention-dark transition"
                                >
                                    <Send size={16} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Launcher */}
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 w-14 h-14 bg-convention text-white rounded-full shadow-lg flex items-center justify-center z-50 hover:shadow-convention/50 transition"
            >
                {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
            </motion.button>
        </>
    );
};
