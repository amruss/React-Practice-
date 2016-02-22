import React from 'react';
import ajax from 'superagent';



class Detail extends React.Component {
    


    constructor(props) {
        super(props);
    
        
        this.state = {
        value: 'R000595',
        mode: "rubio",
        congressMan: [],
        };
        
        
        
    }

    fetchFeed(congressID) {
        ajax.get('http://api.nytimes.com/svc/politics/v3/us/legislative/congress/members/' + congressID + '/votes.json?api-key=4ac8b311959f5fbce0e348b805613ea3:9:74443113')
                 .end((error, response) => {
                      if (!error && response) {
                      this.setState({ congressMan : response.body});
                      } else {
                      console.log("There was an error fetching from NYT", error);
                      }
                      }
                      );
                 }
    
    componentWillMount() {
        this.fetchFeed(this.state.value);
        /*this.fetchFeed("hClinton", 'C001041');
        this.fetchFeed("cruz", 'C001098');
        this.fetchFeed("sanders", 'S000033');*/
        
    }

    renderRubio() {
        
        return (<div>
                {this.state.congressMan.results ? this.state.congressMan.results[0].votes.map((vote, index) => (
                                                                                                    
                                                                                                    (<p key={index}>
                                                                                                     <strong>{vote.position}: </strong>
                                                                                                     <p2>{vote.description}</p2>
                                                                                                     </p>))) :
                this.state.congressMan.map((vote, index) => ( <p>NOPE</p>))}
                
                
                </div>);
    }

    

    
    render() {
        let content;
        
        
        content = this.renderRubio();
        
        
        return (<div>
                <input value={this.state.value} onChange={this.handleChange.bind(this)} />
                <button onClick = {this.selectMode.bind(this, this.state.value)}>Marco Rubio</button>

                {content}
                </div>
                );

    }
    
    handleChange(name){
        this.setState({ value: name.target.value})
    }

    
}



export default Detail;