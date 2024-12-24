export default function MainContent() {
    return (
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Single Page App</h1>
          <p className="text-lg">This is a simple single page application built with React and Next.js.</p>
        </section>
        
        <section id="about" className="mb-8">
          <h2 className="text-2xl font-bold mb-2">About</h2>
          <p>This app demonstrates the basic structure of a single page application. It uses React for the UI and Next.js for routing and server-side rendering capabilities.</p>
        </section>
        
        <section id="contact">
          <h2 className="text-2xl font-bold mb-2">Contact</h2>
          <p>You can reach us at contact@example.com</p>
        </section>
      </main>
    )
  }
  
  