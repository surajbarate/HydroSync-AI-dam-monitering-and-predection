<<<<<<< Updated upstream
import Link from "next/link"
import { Button } from "@/components/ui/button"
=======
"use client"

import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

export default function Home() {
  const router = useRouter()
  const [theme, setTheme] = useState("aqua")

  // 🎨 Themes (ONLY COLORS)
  const themes = {
    light: {
      main: "bg-white text-gray-900",
      border: "border-gray-200",
      section: "bg-gray-100",
      card: "bg-white border-gray-200",
      text: "text-blue-600",
      button: "bg-blue-600 hover:bg-blue-500 text-white"
    },
    aqua: {
      main: "bg-cyan-50 text-gray-900",
      border: "border-cyan-200",
      section: "bg-cyan-100",
      card: "bg-white border-cyan-200",
      text: "text-cyan-600",
      button: "bg-cyan-600 hover:bg-cyan-500 text-white"
    },
    green: {
      main: "bg-green-50 text-gray-900",
      border: "border-green-200",
      section: "bg-green-100",
      card: "bg-white border-green-200",
      text: "text-green-600",
      button: "bg-green-600 hover:bg-green-500 text-white"
    },
    dark: {
      main: "bg-black text-white",
      border: "border-gray-800",
      section: "bg-gray-950",
      card: "bg-gray-900 border-gray-800",
      text: "text-cyan-400",
      button: "bg-cyan-500 hover:bg-cyan-400 text-black"
    }
  }

  // 💾 Load saved theme
  useEffect(() => {
    const saved = localStorage.getItem("theme")
    if (saved) setTheme(saved)
  }, [])

  // 💾 Save theme
  useEffect(() => {
    localStorage.setItem("theme", theme)
  }, [theme])
>>>>>>> Stashed changes

export default function LandingPage() {
  return (
<<<<<<< Updated upstream
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-black to-gray-900 text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 backdrop-blur-lg bg-white/5 border-b border-white/10">
        <h1 className="text-2xl font-bold tracking-wide">HydroSync AI</h1>

        <div className="space-x-4">
          <Link href="/login">
            <Button variant="outline">Login</Button>
          </Link>
          <Link href="/register">
            <Button>Register</Button>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center h-[85vh] px-6">
        <h2 className="text-5xl font-bold mb-6 animate-in fade-in">
          AI Powered Dam Monitoring & Flood Prediction
        </h2>

        <p className="text-gray-300 max-w-2xl text-lg">
          Real-time analytics, inflow-outflow monitoring, rainfall tracking and AI risk prediction for water infrastructure.
        </p>

        
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-8 px-12 pb-20">
        <Feature title="Live Monitoring" desc="Track water levels, inflow & rainfall in real time." />
        <Feature title="AI Risk Engine" desc="Predict flood probability using ML models." />
        <Feature title="Interactive Dam Map" desc="Locate dams and monitor surrounding villages." />
      </section>
    </div>
  )
}

function Feature({ title, desc }) {
  return (
    <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 hover:scale-105 transition">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400">{desc}</p>
=======
    <div className={`${themes[theme].main} min-h-screen`}>

      {/* 🎛️ THEME SWITCHER */}
      <div className="fixed top-5 right-5 flex gap-2 z-50">
        <button onClick={()=>setTheme("light")} className="border px-2 py-1 text-sm">Light</button>
        <button onClick={()=>setTheme("aqua")} className="border px-2 py-1 text-sm">Aqua</button>
        <button onClick={()=>setTheme("green")} className="border px-2 py-1 text-sm">Green</button>
        <button onClick={()=>setTheme("dark")} className="border px-2 py-1 text-sm">Dark</button>
      </div>

      {/* NAVBAR */}
      <nav className={`flex justify-between items-center px-12 py-6 border-b ${themes[theme].border}`}>
        <h1 className={`text-2xl font-bold ${themes[theme].text}`}>HydroSync AI</h1>
        <div className="flex gap-6">
          <button onClick={()=>router.push("/login")} className="hover:opacity-70">Login</button>
          <button
            onClick={()=>router.push("/register")}
            className={`${themes[theme].button} px-4 py-2 rounded-lg`}
          >
            Register
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="grid md:grid-cols-2 gap-12 px-12 py-20 items-center">
        <div>
          <h1 className="text-6xl font-bold leading-tight">
            AI Dam Monitoring{" "}
            <span className={themes[theme].text}> & Flood Prediction</span>
          </h1>
          <p className="mt-6 text-lg opacity-70">
            HydroSync predicts floods using artificial intelligence, real-time dam monitoring and village risk analysis.
          </p>
          <button
            onClick={()=>router.push("/register")}
            className={`${themes[theme].button} mt-8 px-6 py-3 rounded-lg font-semibold`}
          >
            Live Dam Monitoring
          </button>
        </div>

        <div className={`rounded-xl overflow-hidden border shadow ${themes[theme].border}`}>
          <img src="/images/hydro_ai.png" alt="Hydro AI illustration" className="w-full"/>
        </div>
      </section>

      {/* FEATURES */}
      <section className={`${themes[theme].section} py-24 px-12`}>
        <h2 className="text-4xl font-bold text-center mb-16">HydroSync Features</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className={`${themes[theme].card} p-8 rounded-xl border`}>
            <h3 className={`text-xl font-bold mb-3 ${themes[theme].text}`}>Real Time Dam Monitoring</h3>
            <p className="opacity-70 mt-2">Monitor water level, reservoir capacity and nearby villages on an interactive map.</p>
          </div>
          <div className={`${themes[theme].card} p-8 rounded-xl border`}>
            <h3 className={`text-xl font-bold mb-3 ${themes[theme].text}`}>AI Flood Prediction</h3>
            <p className="opacity-70 mt-2">Predict floods using rainfall data, reservoir capacity and water flow analysis.</p>
          </div>
          <div className={`${themes[theme].card} p-8 rounded-xl border`}>
            <h3 className={`text-xl font-bold mb-3 ${themes[theme].text}`}>Village Alert System</h3>
            <p className="opacity-70 mt-2">Nearby villages receive alerts before flood water reaches critical levels.</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-12 py-24">
        <h2 className="text-4xl font-bold text-center mb-16">How HydroSync Works</h2>
        <div className="grid md:grid-cols-4 gap-12 text-center">
          {["Data Collection", "AI Processing", "Flood Prediction", "Village Alerts"].map((step,index)=>(
            <div key={index} className={`${themes[theme].card} p-6 rounded-xl border`}>
              <img src="/images/hydro_ai.png" className="w-20 mx-auto mb-4" />
              <h3 className={`font-bold ${themes[theme].text}`}>{step}</h3>
              <p className="text-sm mt-2 opacity-70">Illustration of {step.toLowerCase()} process.</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className={`border-t text-center py-10 opacity-70 ${themes[theme].border}`}>
        HydroSync AI Monitoring System © 2026
      </footer>

>>>>>>> Stashed changes
    </div>
  )
}