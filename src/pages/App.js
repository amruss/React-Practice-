import React from 'react';

class App extends React.Component {
    render() {
        return (
                <div>
                <h1>Congressmen Voting Records v0.1</h1>
                {this.props.children}
                </div>
                );
    }
}

export default App;