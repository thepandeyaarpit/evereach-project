import React from 'react';
import './Logo.css';

function Logo(){
    return(
        <>
            <div className="mainDiv">
                <div>
                    <img src="https://images.unsplash.com/file-1635809674741-1d3a90cc064aimage" alt="Profile" className="profileImg" />
                </div>

                <div className="textClasses">
                    <p className="userName">Name</p>
                    <p className="userEmail">Email</p>
                </div>
            </div>
        </>
    )
}

export default Logo;