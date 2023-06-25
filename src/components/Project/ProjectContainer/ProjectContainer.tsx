import Project from '../Project/Project';
import './ProjectContainer.scss';
import projectConfig from './projectContainer.config';
import { swiperConfig, Swiper, SwiperSlide } from '../../../utils/swiper.config';

const ProjectContainer = () => {

  return (
    <section className='projectsContainerSection swiper-container' id='projectContainer'>
      <h2>Proyectos</h2>

      <Swiper {...swiperConfig}>
        <div className='projectsContainer swiper-wrapper'>
          {projectConfig.map((config, index) => (
            <SwiperSlide key={index}>
              <Project projectProp={config}  />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    
    </section>
  )
};

export default ProjectContainer;