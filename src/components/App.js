import React from 'react';
import UserCreate from './UserCreate'
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'

class App extends React.Component{

    state = { language: 'english' }

    onLanguageChange = (language) => {
        this.setState({ language })
    }

    render() {
        return (
            <div>
                <div>
                    Select a language
                    <div onClick={() => this.onLanguageChange('english')}>english</div>
                    <div onClick={() => this.onLanguageChange('dutch')}>dutch</div>
                </div>
                <div>
                    <ColorContext.Provider value="red">
                    <LanguageContext.Provider value={this.state.language}>
                        <UserCreate />
                    </LanguageContext.Provider>
                    </ColorContext.Provider>
                </div>
            </div>
        )
    }
}

export default App;