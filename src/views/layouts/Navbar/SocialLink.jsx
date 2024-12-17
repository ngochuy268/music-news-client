import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebookF, faLinkedinIn, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import '../../../css/style.css';

const SocialLinks = () => {
  return (
    <div className='social ml-auto'>
      <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
      <a href="https://www.facebook.com/profile.php?id=61557446814240">
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
      <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
      <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
    </div>
  );
};

export default SocialLinks;