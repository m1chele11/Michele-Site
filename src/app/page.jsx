import Starfield from "@/components/Starfield";
import ResumeButton from "@/components/ResumeButton";
import AnimatedName from "@/components/AnimatedName";

export default function Home() {
  return (
    <div style={{ position: "relative", height: "100vh", width: "100vw" }}>
      <Starfield />

      <main
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
          textAlign: "center",
          color: "white",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          Hi. I'm <AnimatedName />
        </h1>
        <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
          Welcome to my space-themed portfolio — explore cybersecurity, software,
          and data projects.
        </p>
        <ResumeButton />
      </main>
    </div>
  );
}
