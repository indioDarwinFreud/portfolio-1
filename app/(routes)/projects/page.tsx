import Projects from "@/components/projects";



const ProjectsPage = () => {
    return (
        <>
        
        <div className="grid items-center justify-center h-screen max-w-5xl 
        gap-5 mx-auto md:grid-cols-2 md:px-50">
            <div className="max-w-[450px] mt-20 md:mt-0">
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
                    HOME{" "}
                    <span className="font-bold text-secondary">
                        GYM.
                    </span>
                </h1>
                <p className="mb:3 text-xl text-gray-300">
                    Es una App destinada para todas aquellas personas que necesiten llevar su vida a otro nivel.
                    La App ofrece una amplia variedad de funciones, donde cada cliente contará con el seguimiento de profesionales, en el tema de la gastronomía saludable, y el ejercicio (nutricionistas y preparadores físicos).

                </p>

            </div>
            {/* SLIDER (con esto se puede hacer notas en react) */}
            <div>
            <Projects />
            </div>

        </div>
        </>
        
    )
}

export default ProjectsPage