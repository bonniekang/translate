import React from 'react';
import LanguageContext from '../contexts/LanguageContext'

class Button extends React.Component {

    static contextType = LanguageContext;

     render() {
         
         return (
             <button>
                 Submit
             </button>
         )
     }
}
// Button.contextType = LanguageContext

export default Button;