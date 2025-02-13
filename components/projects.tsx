

const Projects = () => {
  return (
    <div className="flex px-6 py-8 h-auto md:h-[290px] rounded-lg 
                cursor-pointer bg-[rgba(65,47,123,0.15)] sm:flex-col gap-x-6 sm:gap-x-0 
                group hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 
                hover:border-secondary border-2">
      <div className="mb-4 text-4xl text-secondary">{ }</div>
      <div>
        <h3 className="mb-4 text-lg">{ }</h3>
        <p className="text-sm">{ }</p>
      </div>
    </div>
  );

}

export default Projects;