"use client";

export default function Projects() {
  const softwareProjects = [
    { title: "Hydro Hero", description: "Hydration tracker with OCR & React." },
    { title: "Portfolio Site", description: "Interactive space-themed developer site." },
    // Add more...
  ];

  const cybersecurityProjects = [
    { title: "Snort IDS", description: "Built intrusion detection system using Snort." },
    { title: "JWT Auth Demo", description: "Secure login flow with JWT and bcrypt." },
    // Add more...
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

      <ConstellationSection title="💻 Software Engineering" projects={softwareProjects} />
      <ConstellationSection title="🛡️ Cybersecurity" projects={cybersecurityProjects} />
    </section>
  );
}

function ConstellationSection({ title, projects }) {
    return (
      <div style={{ marginBottom: "4rem", width: "100%" }}>
        <h3 style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>{title}</h3>
  
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "3rem 2rem", // more spacing for constellation effect
            position: "relative",
          }}
        >
          {projects.map((proj, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "120px", // keep them equally sized
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "16px",
                  height: "16px",
                  backgroundColor: "#00FF66",
                  borderRadius: "50%",
                  boxShadow: "0 0 10px #00FF66",
                  marginBottom: "0.5rem",
                }}
              ></div>
              <span style={{ fontSize: "0.85rem", color: "#fff" }}>
                {proj.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  