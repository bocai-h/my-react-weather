import React from 'react';
import ReactDOM from 'react-dom';
import Weacher from './Weather';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
   <Weacher/>,
   document.getElementById('root')
 );
registerServiceWorker();
