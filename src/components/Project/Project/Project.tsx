import './Project.scss';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface project {
  projectProp: {
    title: string,
    description: string,
    technologies: string[],
    img: string,
    url: string,
    repo: string
  }
};

const Project: React.FC<project> = ({ projectProp }) => {
  const { title, description, img, technologies, repo, url } = projectProp; 
  
  return (
    <div className='project_content'>
      <img src={ img } alt={`Proyecto ${title}`} />

      <div className='project_data'>
        
        <div className='project_data--info'>
          <h3>{ title }</h3>
          <p>{ description }</p>
          <p>
            <strong><mark>&nbsp;Herramientas utilizadas:&nbsp;</mark></strong>
            &nbsp;{ technologies.join(', ') }
          </p>
        </div>
        
        <div className='project_data--links'>
          <a href={url} target='blank'> 
            Demo
            <ArrowForwardIcon/>
          </a>

          <a href={repo} target='blank'> 
            Repo
            <ArrowForwardIcon/>
          </a>
        </div>

      </div>
    </div>
  )
};

export default Project;