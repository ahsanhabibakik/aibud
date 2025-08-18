export default function Home() {
  return (
    <main style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Minimal Next.js Test</h1>
      <p>If you can see this, basic Next.js routing is working on Vercel.</p>
      <p>Timestamp: {new Date().toISOString()}</p>
    </main>
  )
}