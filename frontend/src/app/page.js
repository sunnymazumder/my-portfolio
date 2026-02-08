"use client"
import { useEffect, useState } from 'react';

export default function Home() {
 
  ✅ এই কোডটা বসাও:

  const projects = [
    {
      id: 1, 
      title: "My First AI Project", 
      tech: "FastAPI & Gemini",
      link: "https://github.com/sunny/ai-project",
      description: "এটি আমার প্রথম এআই প্রজেক্ট যা গুগল জেমিনি এপিআই ব্যবহার করে তৈরি করা হয়েছে।"
    },
    {
      id: 2, 
      title: "Portfolio Website", 
      tech: "Next.js & Tailwind",
      link: "https://github.com/sunny/portfolio",
      description: "এটি একটি আধুনিক পোর্টফোলিও ওয়েবসাইট যা রিয়েক্ট এবং ফাস্টএপিআই দিয়ে তৈরি।"
    },
    {
      id: 3, 
      title: "SQA Automation Tool", 
      tech: "Python & Selenium",
      link: "https://github.com/sunny/sqa-tool",
      description: "অটোমেশন টেস্টিংয়ের জন্য বানানো একটি শক্তিশালী টুল যা বাগ খুঁজে বের করে।"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6 md:p-12 font-sans">
      <div className="max-w-4xl mx-auto">
        
        
        {/* Header Section */}

        <header className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <img 
            src="/profile.jpg" 
            alt="Sanjidul Islam Mazumder" 
            className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-2xl object-cover"
          />
          <div className="text-center md:text-left">
            <h1 className="text-5xl font-extrabold text-blue-400">Sanjidul Islam Mazumder</h1>
            <p className="text-xl text-slate-400 mt-2">
              Junior SQA Engineer | Automation & Manual Testing
            </p>

            <p className="text-sm text-slate-500 mt-2 max-w-md">
              Ensuring software quality through bug hunting, API testing, and automation with Python & Selenium.
            </p>

           <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-2">
              <span className="bg-slate-800 px-3 py-1 rounded-full text-sm border border-slate-700 text-blue-300">Manual Testing</span>
              <span className="bg-slate-800 px-3 py-1 rounded-full text-sm border border-slate-700 text-blue-300">API Testing</span>
              <span className="bg-slate-800 px-3 py-1 rounded-full text-sm border border-slate-700 text-blue-300">Python</span>
            </div>

            {/* 🟢 Action Buttons (Hire Me & CV) 🟢 */}
            <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
              <a 
                href="mailto:sanjidulislammajumder@gmail.com" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-blue-500/50 flex items-center gap-2"
              >
                📩 Hire Me
              </a>
              <a 
                href="/resume.pdf" 
                download
                className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-slate-500/50 border border-slate-600 flex items-center gap-2"
              >
                📄 Download CV
              </a>
            </div>

          </div>
        </header>
        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-slate-200 mb-8 border-b border-slate-800 pb-2">My Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Python', 'Manual Testing', 'Selenium',  'JIRA', 'Load Testing' , 'Git', 'SQL'].map((skill) => (
              <div key={skill} className="bg-slate-800 p-4 rounded-xl text-center font-bold text-slate-300 hover:bg-blue-600 hover:text-white transition-all shadow-md cursor-pointer">
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Projects List */}
        
        {/* Projects Section - Smart Grid Design */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-slate-200 border-b border-slate-800 pb-2">
            My Featured Projects
          </h2>
          
          {/* Grid Layout: বড় স্ক্রিনে পাশাপাশি ২টা করে দেখাবে */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.length > 0 ? projects.map((p) => (
              <a 
                key={p.id} 
                href={p.link} 
                target="_blank" 
                className="group relative block p-5 bg-slate-800/50 hover:bg-slate-800 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10"
              >
                {/* আইকন বা ডেকোরেশন */}
                <div className="absolute top-5 right-5 text-slate-600 group-hover:text-blue-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </div>

                <h3 className="text-xl font-bold text-slate-100 group-hover:text-blue-400 mb-2">
                  {p.title}
                </h3>
                
                <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-300 bg-blue-900/30 rounded-full mb-3 border border-blue-900/50">
                  {p.tech}
                </span>
                
                <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                  {p.description}
                </p>
              </a>
            )) : (
              <div className="col-span-full p-8 text-center bg-slate-800/50 rounded-xl border border-dashed border-slate-700">
                <p className="text-slate-500 italic">প্রজেক্টগুলো ব্যাকএন্ড থেকে লোড হচ্ছে...</p>
              </div>
            )}
          </div>
        </section>

        {/* Social Media Links */}
        <section className="mt-16 border-t border-slate-800 pt-10">
          <h2 className="text-3xl font-bold text-slate-200 mb-6">Connect With Me</h2>
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-blue-500/50"
            >
              Facebook
            </a>
            <a 
              href="https://www.linkedin.com/in/sanjidul-islam-majumder-44231913a/" 
              target="_blank" 
              className="bg-sky-700 hover:bg-sky-800 text-white px-6 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-sky-500/50"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/sunnymazumder" 
              target="_blank" 
              className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-slate-500/50"
            >
              GitHub
            </a>
          </div>
        </section>

        <footer className="mt-20 text-center text-slate-600">
          © 2026 Built with 💻 GitHub Codespaces
        </footer>
      </div>
    </div>
  );
}