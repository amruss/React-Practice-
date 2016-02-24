import React from 'react';
import { Link } from 'react-router';

class List extends React.Component {
    render() {
        return(
               <div>
               <p>This is the list of pages </p>
               <ul>
               <li> <Link to="/VotingRecord">Voting Records</Link></li>
               </ul>
               </div>
               );
    }
}

export default List;