import Projects from "@/components/projects";
import ContainerPage from "@/components/container";
import TransitionPage from "@/components/transition-page";

const ProjectsPage = () => {
    return (
        <ContainerPage>
            <TransitionPage />
            <Projects/>
             
            <p>
                From page
            </p>
            
        </ContainerPage>
    )
}

export default ProjectsPage