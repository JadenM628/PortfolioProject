export const About = () => {

    const frontendSkills = [
        "React",
        "Vue",
        "HTML",
        "JavaScript",
        "TailwindCSS",
    ];

    const backendSkills = [
        "Python",
        "SQL",
        "MongoDB",
        "API-Development",
        "Flask",
    ];

    const languagesAndMisc = [
        "Java",
        "Python",
        "C",
        "C++",
        "HTML/CSS",
        "JavaScript",
        "Git/Github",
        "Agile Development",
    ];

    return <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">About Me</h2>
            <img src="/public/ProfilePicture.jpg" alt="ProfilePic" className="w-96 h-96 rounded-full mx-auto block" />

            <div>
                <p className="pt-4">
                    I'm a passionate software engineer with a Bachelor of Science Degree in Computer Science from UNC Charlotte.
                    I have gained a strong foundation of software engineering skills through my education, as well as through creating several projects.
                    I enjoy breaking down complex problems and creating simple, efficient solutions, and I'm constantly learning new tools and technologies to expand my skill set.
                    I'm currently looking for entry-level software engineering opportunities where I can grow, contribute, and make a impact.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {frontendSkills.map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Backend</h3>
                        <div className="flex flex-wrap gap-2">
                            {backendSkills.map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Languages/Misc</h3>
                        <div className="flex flex-wrap gap-2">
                            {languagesAndMisc.map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow=[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong>B.S. in Computer Science</strong> - UNC Charlotte
                                </li>
                                
                                <li>
                                     Relevant Coursework: Data Structures, Web Development, Mobile Application Development, Software Engineering, Database Design and Development
                                </li>
                            </ul>
                </div>

            </div>
        </div>
    </section>
};