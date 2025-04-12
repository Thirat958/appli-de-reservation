import React from 'react'
import "./Footer.css";
export default function Footer() {
  return (
    <footer>
        <div className="container inner-footer">
            <div className="widget-footer">
                <div className="nom-site">
                    <a href="/">HôtelBook</a>
                </div> 
                <p>Trouvez l'hébergement parfait <br/>pour votre prochain séjour</p>
                <ul className="reseaux">
                    <li>
                        <i className="fa-brands fa-facebook"></i>
                    </li>
                    <li>
                        <i className="fa-brands fa-x-twitter"></i>
                    </li>
                    <li>
                        <i className="fa-brands fa-instagram"></i>
                    </li>
                    
                    <li>
                        <i className="fa-brands fa-linkedin"></i>
                    </li>
                </ul>
            </div>
            <div className="widget-footer">
                <h3>Contact</h3>
                <ul>
                    <li>
                        <i className="fa-solid fa-phone"></i>01 23 45 67 89
                    </li>
                    <li>
                        <i className="fa-solid fa-envelope"></i>contact@hotelbook.com
                    </li>
                    <li>
                        <i className="fa-solid fa-location-dot"></i>Cergy, France
                    </li>
                </ul>
            </div>
        </div>
    </footer>
  )
}
