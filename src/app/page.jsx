import Starfield from "@/components/Starfield";




export default function Home() {
    return (
      <>
        <Starfield />
        <main style={{ position: 'relative', zIndex: 1, color: 'white', padding: '2rem' }}>
          <h1>🚀 Welcome to My Space Portfolio</h1>
          <p>Cybersecurity | Software | Data</p>
        </main>
      </>
    )
  }