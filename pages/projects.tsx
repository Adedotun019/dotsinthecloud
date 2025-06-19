export default function Projects() {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: "EventSense AI",
      description: "An AI-powered event recommendation platform that analyzes user preferences and suggests relevant events. VERSION 2 COMING SOON!",
      technologies: ["React", "Node.js", "TensorFlow", "AWS"],
      link: "https://event-sense-ai.vercel.app/"
    },
    {
      id: 2,
      title: "Cloud Deployment Dashboard (COMING SOON)",
      description: "A real-time monitoring dashboard for cloud deployments across multiple providers.",
      technologies: ["Next.js", "TypeScript", "Docker", "GCP"],
      link: "https://github.com/Adedotun019/cloud-dashboard"
    },
    {
      id: 3,
      title: "Financial Analytics Tool (COMING SOON)",
      description: "A tool that leverages my business background to provide financial insights for tech startups.",
      technologies: ["Python", "Pandas", "D3.js", "Flask"],
      link: "https://github.com/Adedotun019/fin-analytics"
    },
    {
      id: 4,
      title: "Personal Portfolio",
      description: "This website! Built with Next.js and Tailwind CSS to showcase my projects and journey.",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
      link: "https://github.com/Adedotun019/portfolio"
    }
  ];

  return (
    <>
      <h1 className="text-4xl font-bold mb-6 text-blue-600 dark:text-blue-400">My Projects</h1>
      
      <p className="text-lg mb-8">
        Here are some of the projects I've been working on. Each represents a different aspect of my technical skills and interests.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-bold mb-2 text-blue-600 dark:text-blue-400">{project.title}</h2>
            <p className="mb-4">{project.description}</p>
            
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">Technologies:</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <a 
              href={project.link} 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
      
      <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">Want to Collaborate?</h2>
        <p className="mb-4">
          I'm always open to new projects and collaborations. If you have an idea or project you'd like to discuss, feel free to reach out!
        </p>
        <a 
          href="mailto:adenzdavid35@gmail.com" 
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors duration-200"
        >
          Get in Touch
        </a>
      </div>
    </>
  );
}
