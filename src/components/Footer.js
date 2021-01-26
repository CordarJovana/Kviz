import React from 'react';
import "./footer.css";

const Footer=()=>{
    return(
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>THICC MEMES INC</h4>
                        <ul className="list-unstyled">
    <li>011/355-66-77</li>
    <li>Beograd, Srbija</li>
    <li>Novi beograd, Mihajla Pupina 13</li></ul></div>
                    <div className="col">
                    <h4>STUFF</h4>
<ul className="list-unstyled">
    <li> DANK MEMES</li>
    <li>OTHER STUFF</li>
    <li>GOOD STUFF</li></ul>
                    </div>
                    <div className="col">
<h4>Another column</h4>
<ul className="list-unstyled">
    <li> DANK MEMES</li>
    <li>OTHER STUFF</li>
    <li>GOOD STUFF</li>
</ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} THICC MEMES INC | All right reserved | TERMS OF SERVICE | PRIVACE
                    </p>
                </div>
                </div>
                </div>
                
    )
}

export default Footer;