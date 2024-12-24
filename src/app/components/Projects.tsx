export default function Projects() {
    return (
      <section id="projects" className="mb-16">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Project Name</h3>
            <p className="text-gray-600 mb-4">Brief description of the project and your role in it.</p>
            <div className="flex space-x-2">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">React</span>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Node.js</span>
            </div>
          </div>
          {/* Add more projects as needed */}
        </div>
      </section>
    )
  }
  
  