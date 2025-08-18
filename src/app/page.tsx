import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ 
      padding: '2rem', 
      backgroundColor: 'black', 
      color: 'white', 
      minHeight: '100vh',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ 
          fontSize: '3rem', 
          fontWeight: 'bold', 
          marginBottom: '1rem',
          background: 'linear-gradient(to right, #60a5fa, #a855f7)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          AI Buddy
        </h1>
        <h2 style={{ 
          fontSize: '1.5rem', 
          marginBottom: '2rem', 
          color: '#d1d5db' 
        }}>
          Your All-in-One AI Productivity Copilot
        </h2>
        <p style={{ 
          fontSize: '1.125rem', 
          lineHeight: '1.7', 
          marginBottom: '2rem',
          color: '#9ca3af' 
        }}>
          Turn scattered GPT experiments into your streamlined business workflow—instantly. 
          Boost productivity with Agent GG AI-powered task management, calendar integration, and automated workflows.
        </p>
        
        <div style={{ marginBottom: '3rem' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#f3f4f6' }}>
            Navigation Test
          </h3>
          <ul style={{ listStyle: 'none', padding: '0' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/agentgg" style={{ color: '#60a5fa', textDecoration: 'none' }}>
                → Agent GG Product Page
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/blog" style={{ color: '#60a5fa', textDecoration: 'none' }}>
                → Blog
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/test" style={{ color: '#60a5fa', textDecoration: 'none' }}>
                → Test Page
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/simple" style={{ color: '#60a5fa', textDecoration: 'none' }}>
                → Simple Page
              </Link>
            </li>
          </ul>
        </div>

        <div style={{ 
          padding: '1.5rem', 
          backgroundColor: '#1f2937', 
          borderRadius: '8px',
          border: '1px solid #374151'
        }}>
          <p style={{ margin: '0', fontSize: '0.875rem', color: '#9ca3af' }}>
            <strong>Status:</strong> Simplified version deployed to test routing.<br/>
            <strong>Build time:</strong> {new Date().toISOString()}<br/>
            <strong>Framework:</strong> Next.js 15.3.2 with App Router
          </p>
        </div>
      </div>
    </main>
  );
}
