import React from 'react';

const Projects = () => {
  const projects = [
    {
      name: 'Project 1',
      github: 'https://github.com/gikraz/project1',
      vercel: 'https://vercel.com/gikrazs-projects',
    },
    {
      name: 'Project 2',
      github: 'https://github.com/gikraz/project2',
      vercel: 'https://vercel.com/gikrazs-projects',
    },
    {
      name: 'Project 3',
      github: 'https://github.com/gikraz/project3',
      vercel: 'https://vercel.com/gikrazs-projects',
    },
  ];

  return (
    <div>
      <h1>Projects Page</h1>
      {projects.map((project, index) => (
        <div key={index}>
          <h2>{project.name}</h2>
          <p>
            GitHub: <a href={project.github} target="_blank" rel="noopener noreferrer">Link</a>
          </p>
          <p>
            Vercel: <a href={project.vercel} target="_blank" rel="noopener noreferrer">Link</a>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
