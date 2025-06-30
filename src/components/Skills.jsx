"use client";
import { useEffect, useState } from "react";
import MatrixBackground from "@/components/MatrixBackground";

const skills = [
  { name: "OWASP", icon: "🛡️" },
  { name: "Nmap", icon: "📡" },
  { name: "Snort", icon: "⚠️" },
  { name: "Wireshark", icon: "📊" },
  { name: "Burp Suite", icon: "🔧" },
  { name: "JWT", icon: "🔐" },
  { name: "iptables", icon: "🧱" },
  { name: "Linux", icon: "🐧" },
  { name: "Python", icon: "🐍" },
  { name: "Pandas", icon: "📈" },
  { name: "scikit-learn", icon: "🧪" },
  { name: "SQL", icon: "🗄️" },
  { name: "Java", icon: "☕" },
  { name: "Spring Boot", icon: "🌱" },
  { name: "Git", icon: "🔀" },
  { name: "REST APIs", icon: "🔌" },
  { name: "Bcrypt", icon: "🧂" },
  { name: "OAuth", icon: "🔑" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        minHeight: "60vh",
        position: "relative",
        backgroundColor: "#0b0f13",
        overflow: "hidden",
        color: "#00FF66",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "3rem 1rem",
      }}
    >
      <MatrixBackground />
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.05,
          backgroundImage:
            "repeating-linear-gradient(0deg, #00FF66 0 1px, transparent 1px 4px), repeating-linear-gradient(90deg, #00FF66 0 1px, transparent 1px 4px)",
          zIndex: 0,
        }}
      ></div>

      <div
        style={{
          position: "relative",
          width: "80vw",
          height: "350px",
          borderRadius: "1rem",
          border: "1px solid #00FF66",
          backdropFilter: "blur(8px)",
        }}
      >
        {skills.map((skill, i) => {
          const row = Math.floor(i / 6);
          const col = i % 6;
          const top = 10 + row * 30;
          const left = 5 + col * 15;
          return (
            <div
              key={skill.name}
              style={{
                position: "absolute",
                top: `${top}%`,
                left: `${left}%`,
                animation: `float${i} 6s ease-in-out infinite alternate`,
                padding: "0.4rem 0.7rem",
                backgroundColor: "#00220b",
                borderRadius: "9999px",
                boxShadow: "0 0 8px #00FF66",
                fontSize: "1.1rem",
                cursor: "default",
                userSelect: "none",
                whiteSpace: "nowrap",
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
              }}
            >
              <span>{skill.icon}</span> {skill.name}
            </div>
          );
        })}
      </div>

      {/* Floating Animations */}
      <style jsx global>{`
        ${Array.from({ length: 18 }, (_, i) => {
          const dx = 8 + (i % 3) * 4;
          const dy = 6 + (i % 4) * 3;
          const x = i % 2 === 0 ? dx : -dx;
          const y = i % 3 === 0 ? -dy : dy;
          return `
            @keyframes float${i} {
              0% { transform: translate(0, 0); }
              100% { transform: translate(${x}px, ${y}px); }
            }
          `;
        }).join("\n")}
      `}</style>
    </section>
  );
}
