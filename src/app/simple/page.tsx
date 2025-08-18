import Link from 'next/link';

export default function SimplePage() {
  return (
    <main style={{ padding: '2rem', backgroundColor: 'black', color: 'white', minHeight: '100vh' }}>
      <h1>AI Buddy - Simple Test</h1>
      <p>This is a minimal page to test if the basic app structure works.</p>
      <p>Build time: {new Date().toISOString()}</p>
      <div>
        <h2>Navigation Test</h2>
        <ul>
          <li><Link href="/" style={{ color: '#60a5fa' }}>Home</Link></li>
          <li><Link href="/agentgg" style={{ color: '#60a5fa' }}>Agent GG</Link></li>
          <li><Link href="/blog" style={{ color: '#60a5fa' }}>Blog</Link></li>
          <li><Link href="/test" style={{ color: '#60a5fa' }}>Test Page</Link></li>
        </ul>
      </div>
    </main>
  );
}