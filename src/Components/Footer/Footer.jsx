import React from 'react';
import "./../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css"
import "./footer.css"
const Footer = () => {
    return (
        <div className='footer'>
        <div className='container'>
            <footer className='row flex-row-reverse mt-5 align-items-center justify-content-between'>
                <div className='col-12 col-lg-5 text-white'>
                    <h3>افكار صغيرة ولكن...<i class="fa-solid fa-lightbulb"></i></h3>
                    <p>قد تلهمك الطريق للوصول الي نتائج استثنائيه 
                        فلا تنسي متابعة شبكات التواصل الاجتماعي لتحسين اداء حملاتك او تطوير مشروعك التجاري</p>
                </div>
                <div className=' col-12 col-lg-4'>
                    <div className="socialIcon">
                        <a target='blank' href="https://www.facebook.com/"><i class="fa-brands fa-facebook-f"></i></a>
                        <a target='blank' href="https://twitter.com/"><i class="fa-brands fa-twitter"></i></a>
                        <a target='blank' href="https://www.whatsapp.com/"><i class="fa-brands fa-whatsapp"></i></a>
                        <a target='blank' href="https://www.tiktok.com/"><i class="fa-brands fa-tiktok"></i></a>
                        <a target='blank' href="https://www.youtube.com/"><i class="fa-brands fa-youtube"></i></a>
                        <a target='blank' href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a>
                    </div>
                </div>
            </footer>
        </div>
        </div>
    );
}

export default Footer;
