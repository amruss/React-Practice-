import React from 'react';
import ajax from 'superagent';



class Detail extends React.Component {
    
    
    constructor(props) {
        super(props);
        
        this.state = { commits: [] };
        
        
    }
    
    componentWillMount() {
        ajax.get('http://api.nytimes.com/svc/politics/v3/us/legislative/congress/members/R000595/votes.json?api-key=4ac8b311959f5fbce0e348b805613ea3:9:74443113')
        .end((error, response) => {
             if (!error && response) {
             console.dir(response.body);
             this.setState({ commits: response.body });
             } else {
             console.log('There was an error fetching from GitHub', error);
             }
             }
             );
    }

    
    
    render() {
        console.log(this.state.commits.results);
        return (<div>
                <p>Hey</p>
                </div>);
    }
}

export default Detail;