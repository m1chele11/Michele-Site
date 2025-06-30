import Starfield from "@/components/Starfield";
import ResumeButton from "@/components/ResumeButton";
import AnimatedName from "@/components/AnimatedName";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";







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
            Welcome to my space-themed portfolio. Explore my cybersecurity and software projects.
          </p>
        </main>
  
        {/* About Section */}
        <About />

        <Skills />


        <section
        id="education"
        style={{
            minHeight: "100vh",
            padding: "4rem 2rem",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
            zIndex: 1,
        }}
        >
        <h2 style={{ fontSize: "2rem", marginBottom: "2rem" }}>📚 Education</h2>

        {/* Degree + Minors */}
        <div style={{ marginBottom: "2rem" }}>
            <p>
                <strong>B.S. in Computer Science, Software Engineering</strong> – Minor in Cybersecurity and Data Science<br />
                <em>Indiana University, Bloomington (Class of 2025)</em><br />
                Dean’s List (Multiple Semesters)<br />
            </p>
            <p>
                <strong>Relevant Coursework:</strong><br />
            </p>
        </div>


        {/* Relevant Courses */}
        <div
            style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1.5rem",
            maxWidth: "800px",
            marginBottom: "3rem",
            }}
        >
            {[
            { name: "Network Security", icon: "🛡️" },
            { name: "Software Engineering I & II", icon: "🧠" },
            { name: "Mobile App Development", icon: "📱" },
            { name: "Data Structures & Algorithms", icon: "🧮" },
            { name: "Systems & Protocol Security", icon: "🔐" },
            { name: "Applied Algorithms", icon: "📊" },
            { name: "Machine Learning", icon: "🤖" },
            { name: "Database Concepts", icon: "🗄️" },
            { name: "Data Analysis w/ Python", icon: "📊" },
            { name: "Cryptography", icon: "🗝️ " },
            { name: "Applied Linear Algebra", icon: "📐" },
            { name: "C and Unix", icon: "💻" },
            { name: "Java Development", icon: "☕" },





            ].map(({ name, icon }) => (
            <div
                key={name}
                style={{
                background: "rgba(255,255,255,0.05)",
                padding: "1rem",
                borderRadius: "10px",
                minWidth: "200px",
                textAlign: "left",
                }}
            >
                <span style={{ fontSize: "1.2rem" }}>{icon}</span> {name}
            </div>
            ))}
        </div>

        {/* Certifications */}
        <div style={{ maxWidth: "800px" }}>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>📄 Certifications</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
            <li>• AWS Certified Cloud Practitioner (In Progress)</li>
            <li>• TryHackMe: Junior Penetration Tester Path (Ongoing)</li>
            <li>• PortSwigger Web Security Academy – Labs Completed</li>
            </ul>
        </div>
        </section>

        <Experience />

        <Projects />


  
        {/* Footer */}
        <Footer />
      </div>
    );
  }
  