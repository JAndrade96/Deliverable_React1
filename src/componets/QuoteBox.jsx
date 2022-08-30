import { React, useState } from 'react';
import phrase from '../phrase.json'
import Button from './Button';

const colors = ["#D65DB1", "#FFC75F", "#F9F871", "#0081CF", "#0089BA", "#FBEAFF" ]

const QuoteBox = () => {
    const randomPhrase = Math.floor(Math.random () * phrase.length)
    const [paragraph, setParagraph] = useState(randomPhrase)

    const testButton = () => {
        const colors = ["#D65DB1", "#FFC75F", "#F9F871", "#0081CF", "#0089BA", "#FBEAFF" ]
        setParagraph(randomPhrase)
    }

    const bodyColors = colors[ Math.floor(Math.random() * 6)]
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
