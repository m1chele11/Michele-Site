"use client";

export default function Experience() {
  const experience = [
    {
      company: "Recreational Sports Dept – Indiana University",
      role: "Assistant Supervisor",
      date: "Aug 2022 – May 2025",
      responsibilities: [
        "Led real-time communication and coordination during high-pressure incidents, ensuring clear updates to staff and stakeholders.",
        "Acted as the primary point of contact between participants and event organizers, effectively resolving conflicts and technical issues.",
        "Trained and mentored new team members on operational procedures and crisis response protocols.",
      ],
      tech: ["Teamwork", "Communication", "Leadership", "Problem Solving", "Time Management"],
    },
    {
      company: "LTC Language Solutions - Indianapolis, IN",
      role: "Software Engineer Intern",
      date: "June 2024 – Aug 2024",
      responsibilities: [
        "Assisted in implementing secure authentication and authorization mechanisms following OWASP best practices.",
        "Conducted code reviews to identify and mitigate common vulnerabilities such as SQL injection, XSS, and CSRF.",
        "Focused on privacy: Used bcrypt and OAuth for secure login handling.",
        "Documented security protocols and best practices for internal development teams to follow.",
      ],
      tech: ["Java", "Springboot", "OAuth", "Bcrypt", "JWT"],
    },
  ];

  return (
    <section
      id="experience"
      style={{
        minHeight: "100vh",
        padding: "4rem 2rem",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "left",
      }}
    >
      <h2 style={{ fontSize: "2rem", marginBottom: "2rem" }}>🛰️ Experience</h2>

      <div style={{ width: "100%", maxWidth: "800px" }}>
        {experience.map((item, index) => (
          <div
            key={index}
            style={{
              borderLeft: "2px solid #00FF66",
              paddingLeft: "1.5rem",
              marginBottom: "2rem",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "-10px",
                width: "12px",
                height: "12px",
                backgroundColor: "#00FF66",
                borderRadius: "50%",
                boxShadow: "0 0 10px #00FF66",
              }}
            ></div>

            <h3 style={{ marginBottom: "0.3rem" }}>
              {item.role} @ <span style={{ color: "#00FF66" }}>{item.company}</span>
            </h3>
            <p style={{ fontStyle: "italic", fontSize: "0.9rem", marginBottom: "0.8rem" }}>
              {item.date}
            </p>
            <ul style={{ paddingLeft: "1rem", marginBottom: "0.8rem" }}>
              {item.responsibilities.map((r, i) => (
                <li key={i} style={{ marginBottom: "0.4rem" }}>{r}</li>
              ))}
            </ul>
            <p style={{ fontSize: "0.85rem", color: "#aaa" }}>
              <strong>Tools:</strong> {item.tech.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
