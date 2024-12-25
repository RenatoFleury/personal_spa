import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="mb-16">
      <h2 className="text-3xl font-bold mb-8 dark:text-gray-100">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center md:justify-center">
          <div className="relative w-64 h-64">
            <Image
              src="/foto_3x4.png"
              alt="Profile picture"
              width={256}
              height={256}
              className="rounded-full object-cover shadow-lg"
              priority
            />
          </div>
        </div>
        <div>
          <p className="text-gray-600 dark:text-gray-300 mr-20">
            Hello! I'm a passionate software engineer with over 1 years of experience in web development. 
            I worked with python in data analisys, django in a data driven application, kotlin for mobile development, react, javascript and nextjs in web development and I'm always eager to learn new technologies 
            and tackle challenging problems. I have a strong background in building scalable web applications 
            and enjoy working in collaborative team environments.
          </p>
        </div>
      </div>
    </section>
  )
}

