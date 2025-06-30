"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then(mod => mod.Player),
  { ssr: false }
);

export default function About() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        padding: "4rem 2rem",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        zIndex: 1,
      }}
    >
      <h2 style={{ fontSize: "2rem", marginBottom: "2rem" }}>About Me</h2>

      {/* Side-by-side container */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "3rem",
          maxWidth: "900px",
          width: "100%",
          marginBottom: "3rem",
          flexWrap: "wrap",
          textAlign: "left",
        }}
      >
        {isClient && (
          <Player
            autoplay
            loop
            src="/lottie/SpaceDude.json"
            style={{ height: 200, width: 200, flexShrink: 0 }}
          />
        )}

        <div style={{ flex: 1 }}>
          <p>
            I'm Michele, a Computer Science graduate with a passion for cybersecurity and software engineering.
            I enjoy building secure, scalable systems, from intrusion detection setups to full-stack apps and machine learning models.
          </p>
        </div>
      </div>

      {/* Beyond Section */}
<div
  style={{
    position: "relative",
    width: "100%",
    maxWidth: "1000px",
    padding: "4rem 2rem",
    marginTop: "4rem",
    borderTop: "1px solid rgba(255,255,255,0.3)",
    overflow: "hidden",
  }}
>
  {/* Background Lottie */}
  {isClient && (
    <Player
      autoplay
      loop
      src="/lottie/SpaceShip.json"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        zIndex: 0,
        opacity: 0.3,
        pointerEvents: "none",
      }}
    />
  )}

  {/* Foreground content */}
  <div
    style={{
      position: "relative",
      zIndex: 1,
      textAlign: "center",
      color: "white",
    }}
  >
    <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
      Beyond Computer Science
    </h3>
    <p style={{ maxWidth: "800px", margin: "0 auto" }}>
      Outside the world of coding and cybersecurity, I enjoy hitting the gym,
      playing chess, and watching or playing pick-up basketball. These activities
      help me stay balanced, inspired, and bring fresh perspectives to my technical work.
      Recently, I've been getting into poker (still a noob), and how it relates to game theory.
    </p>
  </div>
</div>

    </section>
  );
}


