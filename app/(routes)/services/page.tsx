import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
    return (
        <>
            <TransitionPage />
            <CircleImage />
            <AvatarServices />
            <div className="grid items-center justify-center h-screen max-w-5xl 
            gap-6 mx-auto md:grid-cols-2 md:px-20">
                <div className="max-w-[450px] mt-20 md:mt-0">
                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
                        Mis{" "}
                        <span className="font-bold text-secondary">
                            servicios.
                        </span>
                    </h1>
                    <p className="mb:3 text-xl text-gray-300">
                        Ofrezco servicios de desarrollo full stack, especializados en la creación de sitios web 
                        y aplicaciones atractivas y funcionales.
                        Utilizo tecnologías como HTML, CSS, JavaScript, TypeScript 
                        y React para el frontend, y trabajo con Node.js y Python para el backend. 
                        Agrego el uso de bases de datos como MongoDB y MySQL.
                        Diseño interfaces intuitivas y responsivas.
                        Además, implemento optimización de 
                        rendimiento, para garantizar soluciones escalables y eficientes.
                    </p>
                    <button className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">Contacta conmigo</button>
                </div>
                {/* SLIDER (con esto se puede hacer notas en react) */}
                <div>
                    <SliderServices />
                </div>

            </div>
        </>
    );
}

export default ServicesPage;