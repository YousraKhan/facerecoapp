import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({ imageURL , box }) => {
    console.log(imageURL);
    return (
        <div className='center ma'>

            <div className=' absolute mt2'>
                <img id='inputimage' alt='' src={imageURL} width='500 px' height='auto' />
                <div className='bounding_box' style={{ top : box.topRow , right : box.rightCol , bottom : box.bottomRow , left : box.leftCol  }}></div>
            </div>

        </div>
    );
}

export default FaceRecognition;