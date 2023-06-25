import './Footer.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <div className='footer' id='contact'>
        <h2>Contactáme en</h2>

        <div className='footer-nets'>
          <a href="https://github.com/joshuaJmelnitzky/" target='blank'><GitHubIcon/></a>
          <a href="https://www.linkedin.com/in/joshua-jmelnitzky/" target='blank'><LinkedInIcon/></a>
          <a href={`mailto:joshuajmelnitzkysj@gmail.com`} target='blank'><MailIcon/></a>
          <a href="https://wa.me/5493512662584" target='blank'><WhatsAppIcon/></a>
        </div>
    </div>
  )
};

export default Footer;