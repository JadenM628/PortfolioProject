export const Home = () => {
    return <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6  leading-right">
                Hi, I'm Jaden Marquez
            </h1>

            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                Aspiring Software Engineer building practical, real-world solutions.
            </p>
            <div className="flex justify-center space-x-4">
                <a href="#about" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">About Me</a>

                <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">View Projects</a>

                <a href="#contact" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">Contact Me</a>
            </div>
        </div>
    </section>
}