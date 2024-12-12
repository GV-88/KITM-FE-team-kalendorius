import KITMLogo from '../../assets/images/logo/KITM_logo.png';
import AdventLogo from '../../assets/images/logo/advent_calendar_logo.png';
import FacebookLogo from '../../assets/images/logo/facebook_logo.png';
import InstagramLogo from '../../assets/images/logo/instagram_logo.png';
import LinkedInLogo from '../../assets/images/logo/LinkedIn_logo.png';

const AdventFooter = () => {
  return (
    <>
      <footer>
        <div className='logo'>
          <div className="reklama_logo">
            <img src={KITMLogo} alt="KITM Logo" />
            <img src={AdventLogo} alt="Advento Logo" />
            <div className='social_logo'>
              <a href="https://www.facebook.com/kaunoitmokykla" target="_blank">
                <img src={FacebookLogo} alt="Facebook Logo" />
              </a>

              <a href="https://www.instagram.com/kauno_it_mokykla/" target="_blank">
                <img src={InstagramLogo} alt="Instagram Logo" />
              </a>

              <a href="https://lt.linkedin.com/company/kitm" target="_blank">
                <img src={LinkedInLogo} alt="LinkedIn Logo" />
              </a>
            </div>
          </div>
        </div>
        <h5>Gytis, Šarūnas, Aurelijus © 2024 Advento Kalendorius Valdymo Sistema</h5>
      </footer>
    </>
  );
};

export default AdventFooter;
