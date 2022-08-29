import React from 'react';

const Button = ({testButton, bodyColors}) => {
    return (
        <div>
            <button onClick={testButton} className='card-button' style={{background: bodyColors}}>
                <i className="fa-solid fa-angle-right"></i>
            </button>
        </div>
    );
};

export default Button;