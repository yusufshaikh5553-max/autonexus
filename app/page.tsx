"use client";

import { useEffect, useRef, useState } from "react";

export default function AutoNexusWebsite() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I'm the AutoNexus AI Assistant. Ask me about automations, chatbots, or booking systems.",
    },
  ]);

  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [leadCaptured, setLeadCaptured] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = {
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);

    const currentInput = input;

    setInput("");
    setIsTyping(true);

    try {
      const response = await fetch(
        "https://api.sambanova.ai/v1/chat/completions",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",

            Authorization: `Bearer 4bf9f4a1-5c46-455a-86ea-75765e0975ee`,
          },

          body: JSON.stringify({
            model: "gpt-oss-120b",

            messages: [
              {
                role: "system",

                content:
                  "You are AutoNexus AI, an assistant for an AI automation agency.",
              },

              {
                role: "user",
                content: currentInput,
              },
            ],

            temperature: 0.7,
          }),
        }
      );

      const data = await response.json();

      const aiReply =
        data?.choices?.[0]?.message?.content ||
        "We help businesses automate support, bookings, and workflows using AI.";

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: aiReply,
          },
        ]);

        setIsTyping(false);
      }, 1200);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",

          content:
            "There was an issue connecting to the AI system.",
        },
      ]);

      setIsTyping(false);
    }
  };

  const services = [
    {
      title: "AI Chatbots",
      description:
        "24/7 AI-powered chat support for websites, WhatsApp, and social platforms.",
    },
    {
      title: "Appointment Automation",
      description:
        "Automated booking systems with reminders, confirmations, and follow-ups.",
    },
    {
      title: "Instagram & WhatsApp DM Automation",
      description:
        "Convert incoming messages into qualified leads and booked appointments automatically.",
    },
    {
      title: "AI Voice Assistants",
      description:
        "Never miss another customer call with intelligent AI phone agents.",
    },
    {
      title: "Customer Support Automation",
      description:
        "Reduce support workload with AI-driven responses and workflows.",
    },
    {
      title: "Workflow Automations",
      description:
        "Automate repetitive business operations using AI and no-code tools.",
    },
  ];

  const caseStudies = [
    {
      niche: "Dental Clinic",
      title: "Reduced No-Shows By 40%",
      result:
        "Implemented AI appointment reminders and automated confirmations for a dental clinic, significantly reducing missed appointments and improving patient scheduling.",
      metrics: ["40% fewer no-shows", "24/7 appointment booking", "3x faster responses"],
    },
    {
      niche: "Real Estate Agency",
      title: "Instant Lead Response System",
      result:
        "Built an AI-powered Instagram and WhatsApp automation system that responded instantly to inquiries and automatically qualified leads.",
      metrics: ["63% faster lead response", "Higher conversion rates", "Automated follow-ups"],
    },
    {
      niche: "Fitness Studio",
      title: "Membership Automation Workflow",
      result:
        "Created a complete onboarding and membership follow-up automation system for a fitness studio using AI workflows and reminders.",
      metrics: ["Saved 15+ hours weekly", "Automated onboarding", "Higher member retention"],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-black tracking-tight">
            Auto<span className="text-cyan-400">Nexus</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
            <a href="#services" className="hover:text-white transition-colors">
              Services
            </a>

            <a href="#booking" className="hover:text-white transition-colors">
              Book Call
            </a>

            <a href="#case-studies" className="hover:text-white transition-colors">
              Case Studies
            </a>

            <a href="#why" className="hover:text-white transition-colors">
              Why Us
            </a>
          </div>

          <a
            href="#booking"
            className="rounded-xl bg-white text-black px-5 py-2 font-semibold hover:scale-105 transition-transform"
          >
            Get Started
          </a>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-cyan-500/20 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-28 lg:py-36">
          <div className="max-w-4xl">
            <div className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm backdrop-blur-md mb-6">
              AI Automation Agency
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
              AI That Runs
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Your Business 24/7
              </span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-zinc-300 leading-relaxed max-w-2xl">
              AutoNexus helps businesses automate customer support,
              appointment booking, follow-ups, Instagram DMs, and voice
              calls using AI.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#booking"
                className="rounded-2xl bg-white text-black px-7 py-4 font-semibold hover:scale-105 transition-transform"
              >
                Book Discovery Call
              </a>

              <a
                href="#services"
                className="rounded-2xl border border-white/20 px-7 py-4 font-semibold hover:bg-white/10 transition"
              >
                Explore Services
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <div className="text-4xl font-black">24/7</div>
                <div className="text-zinc-400 mt-2">AI customer response systems</div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <div className="text-4xl font-black">40%</div>
                <div className="text-zinc-400 mt-2">Lower no-show rates with automation</div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <div className="text-4xl font-black">10x</div>
                <div className="text-zinc-400 mt-2">ROI potential from AI appointment systems</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-14">
          <p className="text-cyan-400 uppercase tracking-[0.2em] text-sm mb-3">
            Services
          </p>
          <h2 className="text-4xl md:text-5xl font-black">
            Built For Businesses That Want To Scale Faster
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-zinc-900/60 p-8 hover:border-cyan-400/40 hover:-translate-y-1 transition-all"
            >
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-zinc-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="border-y border-white/10 bg-zinc-950/80">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="mb-14">
            <p className="text-cyan-400 uppercase tracking-[0.2em] text-sm mb-3">
              Case Studies Framework
            </p>
            <h2 className="text-4xl md:text-5xl font-black">
              Real Business Problems. Automated.
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-black/40 p-8 hover:border-cyan-400/30 transition-all"
              >
                <div className="text-cyan-400 text-sm uppercase tracking-wider mb-4">
                  {study.niche}
                </div>

                <h3 className="text-2xl font-bold mb-4 leading-tight">
                  {study.title}
                </h3>

                <p className="text-zinc-400 leading-relaxed">
                  {study.result}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {study.metrics.map((metric, i) => (
                    <div
                      key={i}
                      className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
                    >
                      {metric}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why AutoNexus */}
      <section id="why" className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-cyan-400 uppercase tracking-[0.2em] text-sm mb-3">
              Why AutoNexus
            </p>
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              We Don’t Sell AI.
              <span className="block text-zinc-400 mt-3">
                We Help Businesses Stop Losing Customers.
              </span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              "Instant lead responses",
              "Never miss another appointment request",
              "Reduce repetitive support work",
              "Automate follow-ups and reminders",
              "Operate 24/7 without hiring a larger team",
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-lg"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section
        id="booking"
        className="border-t border-white/10 bg-gradient-to-b from-zinc-950 to-black"
      >
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <p className="text-cyan-400 uppercase tracking-[0.2em] text-sm mb-3">
            Discovery Call
          </p>

          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            Let’s Automate Your Business
          </h2>

          <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
            Book a free strategy call to identify where AI automation can
            save time, reduce missed leads, and increase conversions.
          </p>

          <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-3">
                Book Your Free Strategy Session
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Choose a time that works for you and let’s discuss how AI automation can help your business scale.
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/40">
              <iframe
                src="https://calendly.com/yusufshaikh5553/30min"
                width="100%"
                height="700"
                frameBorder="0"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 text-center text-zinc-500 text-sm">
        © 2026 AutoNexus — AI Automation Agency
      </footer>

      {/* Floating Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {isChatOpen && (
          <div className="mb-4 w-[350px] overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 shadow-2xl shadow-cyan-500/20 backdrop-blur-xl">
            <div className="border-b border-white/10 bg-cyan-500 p-4 text-black">
              <div className="font-black text-lg">AutoNexus AI</div>
              <div className="text-sm text-black/70">
                Usually replies instantly
              </div>
            </div>

            <div className="h-[350px] overflow-y-auto space-y-4 p-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    message.role === "user"
                      ? "ml-auto bg-cyan-500 text-black"
                      : "bg-white/10 text-white"
                  }`}
                >
                  {message.content}
                </div>
              ))}

              {isTyping && (
                <div className="w-fit rounded-2xl bg-white/10 px-4 py-3 text-sm text-zinc-300">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400"></span>
                    <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400 [animation-delay:0.2s]"></span>
                    <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400 [animation-delay:0.4s]"></span>
                  </div>
                </div>
              )}

              {!leadCaptured && messages.length > 3 && (
                <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-4">
                  <div className="font-bold text-cyan-300 mb-2">
                    Free AI Automation Audit
                  </div>

                  <p className="text-sm text-zinc-300 mb-4">
                    Drop your email and our team will reach out with automation ideas for your business.
                  </p>

                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none focus:border-cyan-400"
                    />

                    <button
                      onClick={() => setLeadCaptured(true)}
                      className="rounded-xl bg-cyan-500 px-4 py-3 text-sm font-bold text-black hover:bg-cyan-400"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <div className="flex gap-2 border-t border-white/10 p-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask about AI automation..."
                className="flex-1 rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none focus:border-cyan-400"
              />

              <button
                onClick={handleSend}
                className="rounded-2xl bg-cyan-500 px-5 py-3 font-bold text-black hover:bg-cyan-400"
              >
                Send
              </button>
            </div>
          </div>
        )}

        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="group relative flex items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-500 px-5 py-4 text-black shadow-2xl shadow-cyan-500/30 transition-all hover:scale-105 hover:bg-cyan-400"
        >
          <div className="flex h-3 w-3">
            <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-black opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-black"></span>
          </div>

          <div className="text-left">
            <div className="text-sm font-black leading-none">
              AI Assistant
            </div>
            <div className="text-xs text-black/70">
              Usually replies instantly
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
