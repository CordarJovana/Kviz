import React from 'react';
import "./footer.css";

const Footer=()=>{
    return(
        <div className="main-footer">
            <div className="container">
                <div className="row1">
                    
                    
                        <h4 className="naslov">Bolnica H&H</h4>
                        <ul className="list-unstyled">
                            <li>Broj telefona: 011/355-66-77</li>
                            <li>Email: bolnicahandh@gmail.com</li>
                            <li>Mihajla Pupina 13, Beograd, Srbija</li>
                            </ul>
                            
                    
                </div>
                <hr />
                <div className="row2">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} BOLNICA H&H | All right reserved | TERMS OF SERVICE | PRIVACE
                    </p>
                </div>
                </div>
                </div>
                
    )
}

export default Footer;