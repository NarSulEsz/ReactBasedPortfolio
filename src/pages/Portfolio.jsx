export default function Portfolio() {
  const projects = [
    {
      title: "HTML Seo Refactor",
      image: "/images/HTML_seo_refactor.png",
      deployedLink: "https://narsulesz.github.io/html-seo-refactor/",
      githubLink: "https://github.com/NarSulEsz/html-seo-refactor"
    },
    {
      title: "Blog Demo",
      image: "/images/blog_demo.png",
      deployedLink: "https://narsulesz.github.io/blog-demo/",
      githubLink: "https://github.com/NarSulEsz/blog-demo"
    },
    {
      title: "Professional README generator",
      image: "/images/readme_generator.png",
      deployedLink: "https://drive.google.com/file/d/198U7JrrMb0TfnFfllc6n_wXzPQQLDqkb/view",
      githubLink: "https://github.com/NarSulEsz/Professional_README_Generator"
    },
    {
      title: "SQL tables",
      image: "/images/SQL_tables.png",
      deployedLink: "https://drive.google.com/file/d/17j3CV8pZi94gJ8vbpzOedqZoqrLmXgD4/view",
      githubLink: "https://github.com/NarSulEsz/employeesRolesDepartments"
    },
    {
      title: "E-commerce-Back-End",
      image: "/images/E_commece_Back_End.png",
      deployedLink: "https://drive.google.com/file/d/1UNpsf0Hb2En3HfaCh7FzDDE0wKoXQM_L/view?usp=sharing",
      githubLink: "https://github.com/NarSulEsz/E-commerce-Back-End"
    },
    {
      title: "Employee Payroll Tracker",
      image: "/images/EmployeePayrollTracker.png",
      deployedLink: "https://narsulesz.github.io/Employee-Payroll-Tracker/",
      githubLink: "https://github.com/NarSulEsz/Employee-Payroll-Tracker"
    }
  ];

  return (
    <div>
      <h1>My Portfolio</h1>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-item">
            <h2>{project.title}</h2>
            <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} />
            </a>
            <p>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                GitHub Repository
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}