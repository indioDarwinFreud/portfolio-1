
import TransitionPage from "@/components/transition-page";
import CircleImage from "@/components/circle-image";
import SliderProject from "@/components/slider-projects";

const ProjectsPage = () => {
    return (
        <>
            <TransitionPage />
            <CircleImage />
            <div className="grid items-center justify-center h-screen max-w-7xl
            gap-4 mx-auto md:grid-cols-7 md:px-20">
                    <div className="max-w-[450px] mt-20 md:mt-0">
                    </div>
                    <div>
                    <SliderProject />
                    </div>
                </div>
                

            
        </>
    )
}

export default ProjectsPage;
