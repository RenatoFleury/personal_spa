export default function Experience() {
    return (
      <section id="experience" className="mb-16">
        <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
        <div className="space-y-6">
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-xl font-semibold">Job Title</h3>
            <p className="text-gray-600">Company Name</p>
            <p className="text-gray-500">Start Date - End Date</p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Responsibility or achievement</li>
              <li>Responsibility or achievement</li>
              <li>Responsibility or achievement</li>
            </ul>
          </div>
          {/* Add more job experiences as needed */}
        </div>
      </section>
    )
  }
  
  