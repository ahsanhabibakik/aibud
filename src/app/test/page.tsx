export default function TestPage() {
  return (
    <div style={{ padding: '2rem', backgroundColor: 'black', color: 'white', minHeight: '100vh' }}>
      <h1>Test Page</h1>
      <p>If you can see this, the basic routing is working.</p>
      <p>Timestamp: {new Date().toISOString()}</p>
    </div>
  );
}