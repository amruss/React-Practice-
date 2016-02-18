import React from 'react';
import ajax from 'superagent';



class Detail extends React.Component {
    
    
    constructor(props) {
        super(props);
        
        this.state = {
            rubio: [],
        };
        
        
    }
    
    componentWillMount() {
        ajax.get('http://api.nytimes.com/svc/politics/v3/us/legislative/congress/members/R000595/votes.json?api-key=4ac8b311959f5fbce0e348b805613ea3:9:74443113')
        .end((error, response) => {
             if (!error && response) {
             this.setState({ rubio: response.body});
             } else {
             console.log('There was an error fetching from NYT', error);
             }
             }
             );
        
        
    }


    

    
    
    
    
    
    render() {
        
        return (<div>
                {this.state.rubio.results ? this.state.rubio.results[0].votes.map((vote, index) => (
                                                                                                            
                                                                                                            (<p key={index}>
                                                                                                             <strong>{vote.position}: </strong>
                                                                                                             <p2>{vote.description}</p2>
                                                                                                             </p>))) :
                this.state.rubio.map((vote, index) => ( <p>NOPE</p>))}

                
                </div>);
    }
    rubioClicked() {
        this.setState({mode: "rubio"});
    }
    clintonClicked() {
        this.setState({mode: "hClinton"});
    }
    cruzClicked() {
        this.setState({mode: "cruz"});
    }
    sandersClicked(){
        this.setState({mode: "sanders"});
    }
}


export default Detail;