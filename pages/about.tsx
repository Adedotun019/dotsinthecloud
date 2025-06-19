export default function About() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-6 text-blue-600 dark:text-blue-400">About Me</h1>
      
      <div className="space-y-6">
        <p className="text-lg">
          I'm Adedotun Adeeko, a business graduate who discovered a passion for technology and software development. 
          My journey from Nigeria to the UK has shaped my perspective and approach to problem-solving.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-600 dark:text-blue-400">My Journey</h2>
        <p>
          With a background in business administration, I've always been fascinated by how technology transforms industries. 
          This curiosity led me to explore coding, cloud technologies, and web development.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-600 dark:text-blue-400">Skills</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Frontend: React, Next.js, TypeScript, Tailwind CSS</li>
          <li>Backend: Node.js, Express, MongoDB</li>
          <li>Cloud: AWS, Azure, Google Cloud Platform</li>
          <li>Tools: Git, Docker, CI/CD pipelines</li>
          <li>Business: Project Management, Data Analysis, Strategic Planning</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-600 dark:text-blue-400">What I'm Learning</h2>
        <p>
          I'm currently deepening my knowledge in cloud architecture, serverless computing, and AI integration. 
          I believe in continuous learning and staying ahead of technological trends.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-600 dark:text-blue-400">Connect With Me</h2>
        <p>
          I'm always open to discussing new projects, technologies, or opportunities. 
          Feel free to reach out through any of the social links below or via email.
        </p>
        
        <div className="flex space-x-4 mt-4">
          <a href="https://github.com/Adedotun019" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">GitHub</a>
          <a href="https://linkedin.com/in/adedotun-adeeko" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">LinkedIn</a>
          <a href="https://twitter.com/adenz101" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">Twitter</a>
          <a href="mailto:adenzdavid35@gmail.com" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">Email</a>
        </div>
      </div>
    </>
  );
}
