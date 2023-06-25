import './Skill.scss';
import { useState } from 'react';

interface skill {
    skillProp: {
        component: React.ComponentType<any>,
        title: string
    };
};

const Skill: React.FC<skill> = ({ skillProp }) => {

    const [filterStyle, setFilterStyle] = useState<string>("grayscale(100)");

    return (
        <div className="skill-card"
            onMouseEnter={() => setFilterStyle("none")}
            onMouseLeave={() => setFilterStyle("grayscale(100)")}
            style={{ fill: 'white', filter: filterStyle }}>
                
            <skillProp.component className="logo"/>
            <p>{skillProp.title}</p>
        </div>
    );
};

export default Skill;