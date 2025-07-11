"use client";

export default function Projects() {
  const softwareProjects = [
    {
      name: "Movie Matchmaker Frontend",
      description: "React/Next.js frontend app for dual-user movie genre ranking and personalized movie matching with JWT authentication.",
      tech: ["React", "Next.js", "TypeScript", "JWT", "REST API"],
      github: "https://github.com/m1chele11/movie-matchmaker-frontend",
    },
    {
      name: "Movie Matchmaker Backend",
      description: "Java Spring Boot REST API managing user authentication, preferences, and recommendation orchestration with secure JWT and database integration.",
      tech: ["Java", "Spring Boot", "JWT", "Spring Security", "MySQL", "REST API"],
      github: "https://github.com/m1chele11/moviematcher-backend",
    },
    {
      name: "Movie Recommendation Microservice",
      description: "Python Flask microservice using content-based filtering with TF-IDF and cosine similarity to provide movie recommendations via a JSON API.",
      tech: ["Python", "Flask", "Machine Learning", "TF-IDF", "Cosine Similarity", "REST API"],
      github: "https://github.com/m1chele11/movie-recommendation-engine",
    },
    {
      name: "Tree Traversal Algorithm",
      description: "Data structures project exploring tree algorithms like BFS, DFS, heaps, and binary search trees.",
      tech: ["Python", "DSA", "Algorithms"],
      github: "https://github.com/m1chele11/DSA",
    },
    {
        name: "Disneyland Sentiment Analysis",
        description: "NLP project using TF-IDF and Naive Bayes to classify 42K TripAdvisor reviews across 3 Disneyland branches.",
        tech: ["Python", "Pandas", "scikit-learn", "NLP", "Machine Learning"],
        github: "https://github.com/m1chele11/DisneyNLP",
      },
      {
        name: "Personality Traits & Age Analysis",
        description: "Collaborative research applying Random Forest models to explore relationships between age and key personality traits using demographic data.",
        tech: ["Python", "scikit-learn", "pandas", "Random Forest"],
        github: "https://github.com/m1chele11/ResearchPaper/tree/main",
      },
    {
        name: "Android Projects",
        description: "A collection of Android apps built with Jetpack Compose, Kotlin, XML, and React Native.",
        tech: ["Kotlin", "Jetpack Compose", "XML", "React Native", "JavaScript"],
        github: "https://github.com/m1chele11/Android-Development",
      },
      {
        name: "RISC-V Bit Serializer & Deserializer",
        description: "Implemented bit-level serialization and deserialization using C and RISC-V assembly to deepen understanding of low-level data handling.",
        tech: ["C", "Assembly", "RISC-V"],
        github: "https://github.com/m1chele11/AssemblyProject",
      },
      {
        name: "Multibase RPN Calculator",
        description: "Command-line calculator supporting Reverse Polish Notation with multiple number bases, implemented in C.",
        tech: ["C", "CLI"],
        github: "https://github.com/m1chele11/multibase-rpn",
      },
    {
      name: "To-Do App",
      description: "Simple and responsive task manager with add, edit, and delete functionality built in React.",
      tech: ["React", "JavaScript", "CSS"],
      github: "https://github.com/m1chele11/Todo-Project",
    },
  ];

  const cybersecurityProjects = [
    {
      name: "IDS w/ Snort",
      description: "Intrusion Detection System with custom rules.",
      tech: ["Snort", "iptables", "Linux"],
      github: "https://github.com/your-username/snort-ids",
    },
    {
      name: "Certificate-Based File Encryption",
      description: "Encrypts files using RSA keys and mock CA-signed certificates with secure decryption and validation.",
      tech: ["Python", "RSA", "PKI"],
      github: "https://github.com/m1chele11/Certificate-Based-File-Encryption",
    },
    {
        name: "Application Security Labs",
        description: "Collection of offensive security labs from PortSwigger focused on web vulnerabilities such as SQL Injection, XSS, CSRF, etc.",
        tech: ["Burp Suite", "DAST", "OWASP"],
        github: "https://github.com/m1chele11/web-security-labs",
      },
      {
        name: "Transparent DB Encryption Demo",
        description: "Demo of transparent encryption in PostgreSQL using pgcrypto to secure sensitive data.",
        tech: ["PostgreSQL", "pgcrypto"],
        github: "https://github.com/m1chele11/TDE",
      }
      
  ];

  return (
    <section
      id="projects"
      style={{
        minHeight: "100vh",
        padding: "4rem 2rem",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "2rem", marginBottom: "2rem" }}>🔭 Projects</h2>

      <ProjectGroup title="💻 Software Engineering" projects={softwareProjects} />
      <ProjectGroup title="🛡️ Cybersecurity" projects={cybersecurityProjects} />
    </section>
  );
}

function ProjectGroup({ title, projects }) {
  return (
    <div
      style={{
        marginBottom: "4rem",
        width: "100%",
        maxWidth: "1100px",
        padding: "0 1rem",
      }}
    >
      <h3 style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>{title}</h3>

      <div
        style={{
          display: "grid",
          gap: "1.5rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        }}
      >
        {projects.map((proj, i) => (
          <div
            key={i}
            style={{
              backgroundColor: "#111827",
              border: "1px solid rgba(0, 255, 102, 0.3)",
              borderRadius: "12px",
              boxShadow: "0 0 15px rgba(0, 255, 102, 0.1)",
              padding: "1.5rem",
              textAlign: "left",
              transition: "transform 0.3s, box-shadow 0.3s",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.02)";
              e.currentTarget.style.boxShadow = "0 0 20px #00FF66";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 0 15px rgba(0, 255, 102, 0.1)";
            }}
          >
            <h4 style={{ fontSize: "1.1rem", color: "#00FF66", marginBottom: "0.5rem" }}>
              {proj.name}
            </h4>
            <p style={{ fontSize: "0.9rem", color: "#ccc", marginBottom: "1rem" }}>
              {proj.description}
            </p>
            <p style={{ fontSize: "0.75rem", color: "#888", marginBottom: "1rem" }}>
              <strong>Tech:</strong> {proj.tech.join(", ")}
            </p>
            <a
              href={proj.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "0.5rem 1rem",
                backgroundColor: "#00FF66",
                color: "#000",
                borderRadius: "6px",
                fontWeight: "bold",
                fontSize: "0.75rem",
                textDecoration: "none",
              }}
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
