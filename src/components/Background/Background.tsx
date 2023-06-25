import './Background.scss';

interface BackgroundProps {
    toggleDarkMode: String;
}


const Background: React.FC<BackgroundProps> = ({toggleDarkMode})=> {
    return (
        <div className={`background-container background-container-${toggleDarkMode}`}>

        </div>
            
    )
}

export default Background