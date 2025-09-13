import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg" 
                alt="Nepal Flag" 
                style={{ width: '30px', height: 'auto', side: 'left', marginLeft: '17px' }} 
            /> Made with &#10084; by  the pokhrel group.ltd.
             <br />
            Copyright &#169; 2025 Pratik Pokhrel. All right received.
        </footer>
    );
}

export default Footer