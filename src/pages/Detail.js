import React from 'react';
import ajax from 'superagent';



class Detail extends React.Component {
    
    
    constructor(props) {
        super(props);
        
        this.state = {
            mode: "rubio",
            rubio: [],
            hClinton: [],
            cruz:[],
            sanders: []
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
        
        /*ajax.get('http://api.nytimes.com/svc/politics/v3/us/legislative/congress/members/R000595/votes.json?api-key=4ac8b311959f5fbce0e348b805613ea3:9:74443113')
        .end((error, response) => {
             if (!error && response) {
             
             this.setState({ cruz: response.body});

             } else {
             console.log('There was an error fetching from NYT', error);
             }
             }
             );
        
        ajax.get('http://api.nytimes.com/svc/politics/v3/us/legislative/congress/members/R000595/votes.json?api-key=4ac8b311959f5fbce0e348b805613ea3:9:74443113')
        .end((error, response) => {
             if (!error && response) {
             
             console.dir(response.body);
             this.setState({ hClinton: response.body});

             } else {
             console.log('There was an error fetching from NYT', error);
             }
             }
             );
        
        ajax.get('http://api.nytimes.com/svc/politics/v3/us/legislative/congress/members/R000595/votes.json?api-key=4ac8b311959f5fbce0e348b805613ea3:9:74443113')
        .end((error, response) => {
             if (!error && response) {
             
             console.dir(response.body);
             this.setState({ sanders: response.body});
   
             } else {
             console.log('There was an error fetching from NYT', error);
             }
             }
             );*/
        
        
    }


    

    
    
    renderCruz() {
        return this.state.commits.results ? this.state.rubio.results[0].votes.map((vote, index) => (
                                                                                                       
                                                                                                       (<p key={index}>
                                                                                                        <strong>{vote.position}: </strong>
                                                                                                        <p2>{vote.description}</p2>
                                                                                                        </p>))) :
            this.state.commits.map((vote, index) => ( <p>NOPE</p>))
    }
    renderRubio(){
        return this.state.commits.results ? this.state.rubio.results[0].votes.map((vote, index) => (
                                                                                                
                                                                                                (<p key={index}>
                                                                                                 <strong>{vote.position}: </strong>
                                                                                                 <p2>{vote.description}</p2>
                                                                                                 </p>))) :
            this.state.commits.map((vote, index) => ( <p>NOPE</p>))
        
    }
    renderClinton(){
        return this.state.commits.results ? this.state.rubio.results[0].votes.map((vote, index) => (
                                                                                                
                                                                                                (<p key={index}>
                                                                                                 <strong>{vote.position}: </strong>
                                                                                                 <p2>{vote.description}</p2>
                                                                                                 </p>))) :
            this.state.commits.map((vote, index) => ( <p>NOPE</p>))
        
    }
    renderSanders(){
        return this.state.commits.results ? this.state.rubio.results[0].votes.map((vote, index) => (
                                                                                                
                                                                                                (<p key={index}>
                                                                                                 <strong>{vote.position}: </strong>
                                                                                                 <p2>{vote.description}</p2>
                                                                                                 </p>))) :
            this.state.commits.map((vote, index) => ( <p>NOPE</p>))
        
    }

    
    
    render() {
        let content;
        
        if(this.state.mode === "cruz"){
            content = this.renderCruz();
        } else if (this.state.mode === "hClinton"){
            content = this.renderClinton();
        } else if (this.state.mode == "rubio"){
            content = this.renderRubio();
        } else {
            content = this.renderSanders();
        }
        
        return (<div>
                <button onClick = {this.rubioClicked.bind(this)}>Marco Rubio</button>
                <button onClick = {this.clintonClicked.bind(this)}>Hilary Clinton</button>
                <button onClick = {this.cruzClicked.bind(this)}>Ted Cruz</button>
                <button onClick = {this.sandersClicked.bind(this)}>Sanders</button>
                
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