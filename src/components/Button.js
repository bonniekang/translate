import React from 'react';
import LanguageContext from '../contexts/LanguageContext'

class Button extends React.Component {

    static contextType = LanguageContext;

     render() {
         const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
         return (
             <button>
                 {text}
             </button>
         )
     }
}
// Button.contextType = LanguageContext

export default Button;