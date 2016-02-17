/**
 * Created by AbbeyRussell on 2/16/16.
 */
import React from 'react';
import ReactDOM from 'react-dom';

import Detail from './pages/Detail';

ReactDOM.render(
    <Detail message="This is coming from props! Bitch" />,
    document.getElementById('app')
);