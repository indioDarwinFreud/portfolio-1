import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech, CrossIcon, Crosshair, PersonStanding, PictureInPicture2 } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Youtube size={30} strokeWidth={1} />,
        src: "https://www.youtube.com/watch?v=4BdbWEnHmNc",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/luis-lovos-7936b0249/",
    },
    
    
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
  
];

export const dataAboutPage = [
    {
        id: 1,
        title: "FrontEnd" + " " + "BackEnd",
        subtitle: "React"+" "+"JavaScript",
        description: "Desarrollo de interfaces atractivas e interactivas, para un mejor manejo enfocado para el usuario, implementando una base solida perfectamente diseñada.",
        date: "2023-2024",
    },
    {
        id: 2,
        title: "Bases de datos",
        subtitle: "MySQL"+" "+"MongoDB",
        description: "Armado y maquetado de estructuras útiles para insertar y organizar datos.",
        date: "2022-2023",
    },
    {
        id: 3,
        title: "FullStack",
        subtitle: "TypeScript"+" "+"NodeJS"+" "+"Express"+ " " +"CSS"+" "+"HTML",
        description: "Desarrollo de aplicaciones web completas, desde el diseño hasta la implementación, con una base sólida y un diseño atractivo.",
        date: "2022",
    },
    {
        id: 4,
        title: "C.R.U.D",
        subtitle: "Python",
        description: "Implementación de operaciones básicas de creación, lectura, actualización y eliminación de datos en una base de datos.",
        date: "2021",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 2,
        text: "Años React",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 2,
        text: "Años Bases de datos rel/no rel",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 1,
        text: "Años FullStack",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 1,
        text: "Años C.R.U.D",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Crosshair />,
        title: "POO",
        description: "Programación orientada a objetos, para un mejor manejo de la información y estructura de los datos",
    },
    {
        icon: <PersonStanding />,
        title: "Patrones de diseño",
        description: "Implementación de patrones de diseño, para una mejor organización y estructura del código",
    },
   
    {
        icon: <Book />,
        title: "SCRUM",
        description: "Metodología ágil para la gestión y desarrollo de proyectos de software",
    },
    {
        icon: <PictureInPicture2 />,
        title: "Diagramas",
        description: "Creación de diagramas de clases, y diagramas de casos de uso, para una mejor organización de la información",
    },

    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Gimnasio Web en casa",
        image: "/imagenPortfolio-1.jpg",
        urlGithub: "https://github.com/indioDarwinFreud/HomeGym-1",
        urlDemo: "https://github.com/indioDarwinFreud/HomeGym-1",
    },
    {
        id: 2,
        title: "Consultas",
        image: "/imagenPortfolio-2.jpg",
        urlGithub: "https://github.com/indioDarwinFreud/consultas",
        urlDemo: "https://github.com/indioDarwinFreud/consultas",
    },
    
];

export const dataProject = [ 
    {
        name: "Home",
        name2: "Gym",
        description:
            "Es una App destinada para todas aquellas personas que necesiten llevar su vida a otro nivel. La App ofrece una amplia variedad de funciones, donde cada cliente contará con el seguimiento de profesionales, en el tema de la gastronomía saludable, y el ejercicio (nutricionistas y preparadores físicos).",
        image:"/HomeGym.PNG",
    },

    {
        name: "Cosul",
        name2: "tas",
        description:
            "App creada con el objetivo de brindar un servicio de consultas, donde se podrá subir datos y consultarlos.",
        image:"/ConsultasParaSlider.png",
    },
];