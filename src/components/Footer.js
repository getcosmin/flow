import iconLogoGrayscale from '../assets/img/icons/iconLogoGrayscale';
import FooterSection from './FooterSection';
import FooterSocialMedia from './FooterSocialMedia';
import dbFooterLinks from '../assets/db/dbFooterLinks';
console.log(dbFooterLinks);

export default function Footer() {
    return (
        <footer className="footer">
            <div className="wrapper">
                <div className="footer-nav-brand">
                    <svg className="main-logo grayscale" width="114" height="64" viewBox="0 0 114 64">
                          {iconLogoGrayscale}
                    </svg>
                </div>
                <FooterSocialMedia />
                <div className="footer-bottom">
                { dbFooterLinks.map((item) => {
                    return <FooterSection
                                key={item.id}
                                content={{...item}}
                           />;
                })
                }
                </div>
                <div className='copywrite'>
                    <p> Portfolio Project © 2023</p>
                </div>
            </div>
        </footer>
    );
}
