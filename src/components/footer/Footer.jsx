import { NavLink } from "react-router-dom";
import "./footer.css"

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-section">
                <div className="footer-about">
                    <h3>ABOUT OUR WEBSITE</h3>
                    <p>The goal of the site is to create a multi-functional website where the user can choose a recipe, then follow the cooking instructions and ensure that the desired dish is prepared, knowing in advance the ingredients, time and nutritional value of the dish.</p>
                </div>
                <div className="footer-links">
                    <h3>MORE ABOUT US</h3>
                    <div className="footer-links-ul">
                        <ul className="footer-nav">
                            <NavLink to="/">
                                <img src="/images/arrow.svg" alt="" />
                                Home
                            </NavLink>
                            <NavLink to="/">
                                <img src="/images/arrow.svg" alt="" />
                                Recipes
                            </NavLink>
                            <NavLink to="/">
                                <img src="/images/arrow.svg" alt="" />
                                Blog
                            </NavLink>
                            <NavLink to="/contact">
                                <img src="/images/arrow.svg" alt="" />
                                Contact Us
                            </NavLink>
                            <NavLink to="/">
                                <img src="/images/arrow.svg" alt="" />
                                About Us
                            </NavLink>
                        </ul>
                        <ul className="footer-info">
                            <NavLink to="/">
                                <img src="/images/footer-map.svg" alt="" />
                                Tbilisi, Saburtalo street
                            </NavLink>
                            <NavLink to="/">
                                <img src="/images/mobile.svg" alt="" />
                                +995 555-55-55-55
                            </NavLink>
                            <NavLink to="/">
                                <img src="/images/mail.svg" alt="" />
                                tastybites.contactus@gmail.com  
                            </NavLink>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-end">
                <p>© 2023 TASTYBITES. ALL RIGHTS RESERVED. </p>
            </div>
        </div>
    )
}

export default Footer