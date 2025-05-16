export const Projects = () => {
    return <section id="projects" className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2">Weather Dashboard</h3>
                    <p className="text-gray-400 mb-4">A responsive weather application that provides real-time weather information based on user-selected locations.
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["JavaScript", "React", "API Integration"].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition all">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex jusitfy-between items-center">
                            <a href="https://github.com/JadenM628/Weather_Dashboard" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Github Repo for this Project →</a>
                        </div>
                    </p>
                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2">This Portfolio Page</h3>
                    <p className="text-gray-400 mb-4">A responsive weather application that provides real-time weather information based on user-selected locations.
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "Vue", "TailwindCSS", "HTML", "JavaScript"].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition all">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex jusitfy-between items-center">
                            <a href="https://github.com/JadenM628/PortfolioProject" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Github Repo for this Project →</a>
                        </div>
                    </p>
                </div>

            </div>
        </div>
    </section>
}