import './About.scss';
import profilePic from '../../assets/photo/profilePic.jpg';

const About = () => {
    return (
        <div className='innerin' id='about'>

            <section className='about'>
                <div className='about--description'>
                    <h2>Acerca de mi</h2>
                    <h3>Hola! Soy <mark>Joshua Jmelnitzky</mark></h3>
                    <p>Soy un Estudiante de Ingenieria en Sistemas de Información</p>
                    <p>Apasionado por el desarrollo web y las nuevas tecnologías.</p>
                    <p>Interesado en crear soluciones innovadoras y significativas.</p>
                    <p>Constantemente buscando retos y oportunidades de aprendizaje.</p>
                </div>

                <div className='polaroid'>
                    <figure className='polaroid-card'>
                        <img src={profilePic} alt="profile"/>
                    </figure>
                </div>
            </section>
        </div>
    );
};

export default About