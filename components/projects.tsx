import Image from "next/image";

const Projects = () => {
  return (
    <div className="relative flex px-6 py-8 h-[290px] rounded-lg 
                cursor-pointer bg-[rgba(65,47,123,0.15)] sm:flex-col 
                group hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 
                hover:border-secondary border-2 overflow-hidden">
      
      {/* Imagen de fondo ajustada al tamaño del cuadro */}
      <Image 
        src="/HomeGym.PNG" 
        layout="fill" 
        objectFit="cover" 
        alt="Home Gym"
        className="absolute top-0 left-0 w-full h-full rounded-lg"
      />
    </div>
  );
}

export default Projects;

