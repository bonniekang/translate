import React from 'react';

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
                    {this.state.language}
                </div>
            </div>
        )
    }
}

export default App;