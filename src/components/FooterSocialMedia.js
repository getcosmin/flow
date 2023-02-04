import iconSocialFacebook from '../assets/img/icons/iconSocialFacebook';
import iconSocialLinkedin from '../assets/img/icons/iconSocialLinkedin';
import iconSocialInstagram from '../assets/img/icons/iconSocialInstagram';

export default function FooterSocialMedia() {
    return (
        <div className="footer-social">
            <h2 className='social-title'>Stay connected:</h2>
            <a className="social-link" href='#placeholder'>
                {iconSocialFacebook}
            </a>
            <a className="social-link" href='#placeholder'>
                {iconSocialInstagram}
            </a>
            <a className="social-link" href='#placeholder'>
                {iconSocialLinkedin}
            </a>
        </div>

    );
}
