import Starfield from "@/components/Starfield";
import ResumeButton from "@/components/ResumeButton";
import AnimatedName from "@/components/AnimatedName";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import About from "@/components/About";







export default function Home() {
    return (
      <div
        style={{
          position: "relative",
          minHeight: "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          color: "white",
        }}
      >
        <Starfield />
        <Navbar />
  
        {/* Hero Section */}
        <main
          id="home"
          style={{
            flex: "0 0 100vh", // take full viewport height
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            zIndex: 1,
            padding: "0 1rem",
          }}
        >
          <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
            Hi. I'm <AnimatedName />
          </h1>
          <p style={{ fontSize: "1.2rem", marginBottom: "2rem", maxWidth: 600 }}>
            Welcome to my space-themed portfolio. Explore cybersecurity and software projects.
          </p>
        </main>
  
        {/* About Section */}
        <About />
  
        {/* Footer */}
        <Footer />
      </div>
    );
  }
  