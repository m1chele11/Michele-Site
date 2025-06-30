import Starfield from "@/components/Starfield";
import ResumeButton from "@/components/ResumeButton";



export default function Home() {
    return (
      <>
        <Starfield />
        <main
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
          textAlign: 'center',
          color: 'white',
        }}
      >
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Hi. I'm 
            <span style={{ color: '#00ffff' }}>Michele</span>.</h1>

        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          Welcome to my space-themed portfolio — explore my cybersecurity and software projects.
        </p>

        <ResumeButton />

        </main>
      </>
    )
  }