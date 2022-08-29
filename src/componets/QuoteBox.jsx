import React, { useState } from 'react';
import phrase from '../phrase.json'
import Button from './Button';



const QuoteBox = () => {
    const colors = ["#845EC2", "#D65DB1", "#FFC75F", "#F9F871", "#0081CF"]
    const randomPhrase = Math.floor(Math.random () * phrase.length)
    const [paragraph, setParagraph] = useState(randomPhrase)

    const testButton = () => {
        setParagraph(randomPhrase)
    }

    const bodyColors = colors[ Math.floor(Math.random() * 5)]
    document.body.style = `background: ${bodyColors}`



    return (
        <div className='QuoteBox' style={{color: bodyColors}}>
            <p>
                <i className="fa-solid fa-quote-left"></i>
                {phrase[paragraph].quote}
            </p>
            <p>
                {phrase[paragraph].author}
            </p>
            <Button testButton={testButton} bodyColors={bodyColors}/>
        </div>
    );
};

export default QuoteBox;
