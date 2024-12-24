import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="mb-16">
      <h2 className="text-3xl font-bold mb-8">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center">
          <div className="relative w-64 h-64">
            <Image
              src="/placeholder.svg?height=256&width=256"
              alt="Profile picture"
              width={256}
              height={256}
              className="rounded-full object-cover shadow-lg"
              priority
            />
          </div>
        </div>
        <div>
          <p className="text-gray-600 mr-20">
            Hello! I&apos;m a passionate software engineer with over 5 years of experience in web development. 
            I specialize in React, Node.js, and TypeScript, and I&apos;m always eager to learn new technologies 
            and tackle challenging problems. I have a strong background in building scalable web applications 
            and enjoy working in collaborative team environments.
          </p>
        </div>
      </div>
    </section>
  )
}

