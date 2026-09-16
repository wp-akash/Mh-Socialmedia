"use client";
import { useEffect, useState } from "react";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ from: "bot" | "user"; text: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [typingText, setTypingText] = useState("");
  const [isTypingIntro, setIsTypingIntro] = useState(false);

  const services = [
    {
      name: "Software Support And Service",
      description:
        " We assist you to keep your software running smoothly with ongoing support, providing end-to-end software maintenance with troubleshooting and timely updates. Our team ensures your systems stay reliable, safe and secure.",
      link: "https://theicthub.com/services/software-support",
    },
    {
      name: "Custom Software Solutions",
      description:
        " Every business is different. We develop custom software that fits your processes and meets your goals, making sure it’s practical, scalable, and easy to use.",
      link: "https://theicthub.com/services/custome-software-development",
    },
    {
      name: "Web Application Services",
      description:
        " From simple tools to complex platforms, we build modern web applications that are efficient, user-friendly, and tailored to your needs, delivering seamless experiences across all devices.",
      link: "https://theicthub.com/services/web-application",
    },
    {
      name: "E-Commerce & Marketplace Development",
      description:
        " We create e-commerce platforms and marketplace solutions that drive your sales and customer engagement more effectively and manage operations with ease. Our solutions can seamlessly integrate with our ERP systems to automate processes and keep inventory management simple and accurate.",
      link: "https://theicthub.com/services/e-commerce",
    },
    {
      name: "Mobile Application Development",
      description:
        " Whether for iOS, Android, or both, we develop mobile apps that strengthen customer interaction and bring your services closer to them through feature-rich and engaging applications.",
      link: "http://theicthub.com/services/mobile-app-development",
    },
    {
      name: "Enterprise Software Development",
      description:
        " We provide strong, dependable enterprise solutions that fuel business growth, improve efficiency, and simplify complex business operations. Our ready-to-use products are already trusted by many customers, proving their reliability in real-world use cases.",
      link: "http://theicthub.com/services/enterprise-software",
    },
    {
      name: "Game Development Services",
      description:
        " Our team crafts engaging 2D and 3D games using Unity and Unreal Engine, from concept art to final deployment — delivering immersive experiences for all platforms.",
      link: "https://theicthub.com/game-development-services",
    },
  ];

  // Typing animation for bot text
  const typeText = (text: string) => {
    return new Promise<void>((resolve) => {
      let index = 0;
      setTypingText("");
      const interval = setInterval(() => {
        if (index < text.length) {
          setTypingText((prev) => prev + text[index]);
          index++;
        } else {
          clearInterval(interval);
          setMessages((prev) => [...prev, { from: "bot", text }]);
          setTypingText("");
          resolve();
        }
      }, 25);
    });
  };

  // Show bot messages in sequence
  const showBotMessageSequence = async (texts: string[]) => {
    for (const text of texts) {
      await typeText(text);
    }
  };

  useEffect(() => {
    if (isOpen) {
      setMessages([]);
      setTypingText("");
      setLoading(true);
      setShowServices(false);
      setIsTypingIntro(true);

      setTimeout(async () => {
        setLoading(false);

        await showBotMessageSequence([
          " Hello! I’m The ICT Hub's AI Assistant.",
          " How can I help you today? Please choose a service below 👇",
        ]);

        // Add small pause before showing services
        setTimeout(() => {
          setShowServices(true);
          setIsTypingIntro(false);
        }, 600);
      }, 1000);
    }
  }, [isOpen]);

  const handleServiceClick = async (serviceName: string) => {
    const selectedService = services.find((s) => s.name === serviceName);
    if (!selectedService) return;

    setMessages((prev) => [...prev, { from: "user", text: serviceName }]);
    setShowServices(false);
    setLoading(true);

    setTimeout(async () => {
      setLoading(false);
      await typeText(selectedService.description);
      await typeText(`🔗 Learn more: ${selectedService.link}`);

      // Bring services back after short delay
      setTimeout(() => {
        setShowServices(true);
      }, 800);
    }, 800);
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-[#D92D45] text-white w-[60px] h-[60px] rounded-full text-[26px] shadow-lg hover:bg-[#000000] hover:scale-105 transition-all duration-300 z-[1000]"
        >
          💬
        </button>
      )}

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-[90px] right-[25px] w-[370px] h-[430px] bg-white rounded-xl shadow-lg flex flex-col overflow-hidden animate-fadeInUp z-[999] max-[420px]:w-[90%] max-[420px]:right-[5%] max-[420px]:h-[70vh]">
          {/* Header */}
          <div className="bg-[#D92D45] text-white px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-[35px] h-[35px] rounded-full overflow-hidden flex items-center justify-center bg-white">
                {/* <img
                  src="/Bot.png"
                  alt="Bot Avatar"
                  className="w-full h-full object-cover"
                /> */}
              </div>
              <div>
                <h4 className="text-[15px] font-semibold m-0">Web Assistant</h4>
                <p className="text-[12px] opacity-80 m-0">This is an Amazing Bot</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-[18px] cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Chat Body */}
          <div className="flex-1 p-4 overflow-y-auto bg-[#f9f9f9]">
            {loading && (
              <p className="text-center text-gray-400 mt-20 animate-pulse">Thinking...</p>
            )}

            {/* Hide "No messages" while typing intro */}
            {!loading && messages.length === 0 && !isTypingIntro && (
              <p className="text-center text-gray-400 mt-24">No messages yet</p>
            )}

            {/* Messages */}
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 flex ${msg.from === "bot" ? "justify-start" : "justify-end"}`}
              >
                {msg.text.startsWith("🔗") ? (
                  <a
                    href={msg.text.replace("🔗 Learn more: ", "").trim()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-200 text-blue-600 underline px-3 py-2 rounded-lg max-w-[80%] text-[13px]"
                  >
                    {msg.text}
                  </a>
                ) : (
                  <div
                    className={`${
                      msg.from === "bot"
                        ? "bg-gray-200 text-gray-800"
                        : "bg-[#D92D45] text-white"
                    } px-3 py-2 rounded-lg max-w-[80%] text-[13px]`}
                  >
                    {msg.text}
                  </div>
                )}
              </div>
            ))}

            {/* Typing Animation */}
            {typingText && (
              <div className="flex justify-start mb-2">
                <div className="bg-gray-200 text-gray-800 px-3 py-2 rounded-lg max-w-[80%] text-[13px]">
                  {typingText}
                  <span className="animate-pulse">|</span>
                </div>
              </div>
            )}

            {/* Service Options */}
            {showServices && (
              <div className="flex flex-col gap-2 mt-3 animate-fadeIn">
                {services.map((service, i) => (
                  <button
                    key={service.name}
                    onClick={() => handleServiceClick(service.name)}
                    className={`text-left border border-gray-300 rounded-lg px-3 py-2 text-[13px] bg-white hover:bg-[#D92D45] hover:text-white transition-all opacity-0 animate-fadeInButton`}
                    style={{ animationDelay: `${i * 0.1}s`, animationFillMode: "forwards" }}
                  >
                    {service.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {/* <div className="flex items-center p-2 border-t border-gray-200 bg-white">
            <input
              type="text"
              placeholder="Chat with The ICT Hub AI Assistant"
              className="flex-1 border border-gray-300 rounded-full px-3 py-2 text-[13px] outline-none"
              disabled
            />
            <button className="bg-[#D92D45] text-white border-none rounded-full w-[35px] h-[35px] text-[16px] ml-2 cursor-pointer opacity-60">
              ➤
            </button>
          </div> */}
        </div>
      )}

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.3s ease forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease forwards;
        }

        @keyframes fadeInButton {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInButton {
          animation: fadeInButton 0.5s ease forwards;
        }
      `}</style>
    </>
  );
}
