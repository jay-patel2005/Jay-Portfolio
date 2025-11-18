import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const PROJECTS = [
  {
    title: '🌾 AgroLand – Agricultural Land Buy/Sell Portal',
    desc: 'A full-featured platform for buying and selling agricultural land with dynamic listings, user dashboards, property approvals, and secure database integration.',
    ss: '/agroland.png',
    tech: ['Express', 'React', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    live: '#',
    code: 'https://github.com/jay-patel2005/agroland_portal'
  },
  {
    title: '📘 E-Learning Platform',
    desc: 'A complete online learning system with interactive courses, video lectures, quizzes, progress tracking, and user-friendly dashboards for students and instructors.',
    ss: '/elerning.png',
    tech: ['Python', 'HTML', 'CSS', 'Javascript'],
    live: '#',
    code: 'https://github.com/jay-patel2005/E-learing-project'
  },
  {
    title: '💬 DocuChat – Gemini AI Chatbot',
    desc: 'An intelligent document interaction app powered by Gemini API that understands and answers queries from uploaded PDFs.',
    ss: '/Docuchat.png',
    tech: ['Gemini API', 'LangChain', 'Python', 'Streamlit'],
    live: 'https://docuchat-chatbot.streamlit.app/',
    code: 'https://github.com/jay-patel2005/Document-Chatbot'
  },
  {
    title: '🌐 Ecom Marketplace — Python/Django E-Commerce (OLX-style)',
    desc: 'A full-stack marketplace for buying, selling, and refurbishing products — OLX-like functionality built with Django + REST API and a modern frontend. Features: user listings, cart & instant buy, payments, location-based search, seller dashboard, and admin approvals.',
    ss: '/e-com.png',
    tech: ['Python','Django','Django REST Framework','Stripe / Razorpay'],
    live: '#',
    code: 'https://github.com/RonakNadiya/Refurbmart'
  }
  ,
  {
    title: '🍽️ Recipe Finder Website',
    desc: 'A smart recipe discovery platform that lets users search dishes by ingredients, cuisine, diet type, and cooking time. Built with a clean UI, API integration, and dynamic filtering for quick meal inspiration.',
    ss: '/recipi.png',
    tech: ['React', 'Express', 'Node.js', 'JavaScript','REST API'],
    live: 'https://recipefinder-jay.netlify.app/',
    code: 'https://github.com/jay-patel2005/recipe'
  },
  {
    title: '📰 AI News Generator Website',
    desc: 'An AI-powered platform that automatically generates fresh and relevant news articles using NLP models. Features include category-wise news generation, trending topics detection, AI summaries, and a clean, responsive UI for fast reading.',
    ss: '/news.png',
    tech: ['Python', 'REST API', 'JavaScript','OpenAI API'],
    live: 'live-news24.base44.app',
    code: 'https://github.com/jay-patel2005/News_genarated'
  }
]

export default function Projects() {
  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
    >
      <div className="card" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 30 }}>
        <motion.h2
          className="text-4xl font-semibold text-cyan-400 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          🚀 Projects
        </motion.h2>
        <p className="text-gray-400 mb-10">
          A collection of my major works — blending research, AI innovation, and modern UI design.
        </p>

        <div className="projects-grid" style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              style={{
                background: 'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))',
                border: '1px solid rgba(0,255,255,0.1)',
                borderRadius: 16,
                padding: 16,
                overflow: 'hidden',
                boxShadow: '0 0 20px rgba(0,255,255,0.08)'
              }}
            >
              <motion.div className="ss" whileHover={{ scale: 1.05 }} style={{ borderRadius: 12, overflow: 'hidden' }}>
                <img
                  src={p.ss}
                  alt={p.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: 12
                  }}
                />
              </motion.div>

              <div style={{ marginTop: 12 }}>
                <h3 style={{ fontSize: 18, color: '#0ea5e9', marginBottom: 6 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: '#bbb', marginBottom: 8, lineHeight: 1.6 }}>{p.desc}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: 'rgba(0,255,255,0.05)',
                        border: '1px solid rgba(0,255,255,0.1)',
                        padding: '3px 8px',
                        borderRadius: 6,
                        fontSize: 12,
                        color: '#aaf'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
                  <motion.a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'rgba(255,255,255,0.05)',
                      color: '#0ea5e9',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      border: '1px solid rgba(0,255,255,0.1)',
                      textDecoration: 'none'
                    }}
                  >
                    <Github size={14} /> Code
                  </motion.a>
                  <motion.a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'linear-gradient(90deg, #06b6d4, #0891b2)',
                      color: '#fff',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      textDecoration: 'none'
                    }}
                  >
                    <ExternalLink size={14} /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
