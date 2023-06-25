import Ecommerce from '../../../assets/project/ecommerce.png';
import PortfolioLogo from '../../../assets/project/portfolioJava.png';
import StudentPlatformLogo from '../../../assets/project/ted.png';

const projectConfig = [
    {
    title: "E-commerce tienda de Hardware", 
    description: "Tienda digital ficticia denominada \"HardBuy\", donde se comercializan productos de hardware.", 
    technologies: ["React JS", "CSS", "Firebase"],
    img: Ecommerce, 
    url: "https://hardbuy.netlify.app/",  
    repo: "https://github.com/joshuaJmelnitzky/react-js/"
    }, 

    {
    title: "Portfolio personal", 
    description: "Sitio web personal que permite iniciar sesión para crear, modificar, actualizar y eliminar los datos cargados en su perfil. Si no se ha iniciado sesión, el sitio web solo permitirá la lectura de los datos", 
    technologies: ["Angular", "Java", "Spring Boot", "MySql"],
    img: PortfolioLogo, 
    url: "https://argprograma--front.web.app/",  
    repo: "https://github.com/stars/JoshuaJmelnitzky/lists/portfolio-personal"
    }, 

    {
    title: "Plataforma de Práctica de JavaScript para Estudiantes", 
    description: "Sitio web para estudiantes como herramienta complementaria al sistema aúlico. Los estudiantes pueden iniciar sesión en la plataforma y completar actividades de programación en las que deben escribir código JavaScript. El sistema automáticamente corrige las respuestas y proporciona retroalimentación inmediata, ayudando a los estudiantes a comprender sus errores y fortalecer su aprendizaje.", 
    technologies: ["Handlebars", "Node JS", "Express", "MongoDB"],
    img: StudentPlatformLogo, 
    url: "yt",  
    repo: "ytr"
    }
];

export default projectConfig;

