import './SkillContainer.scss';
import Skill from './Skill';
import svgConfig from './skill.config';

const SkillContainer = () => {
    return (
        <section id='skillContainer'>
            <h2>Habilidades</h2>
            <div className='skill'>
                {svgConfig.map((config, index) => (
                    <Skill skillProp={ config } key={ index }/>
                ))}
            </div>
        </section>
    )
}

export default SkillContainer