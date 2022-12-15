import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {store} from './store/store';
import {Provider} from 'react-redux';

<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App/>
  </Provider>,
<<<<<<< Updated upstream
 // document.getElementById('root')
=======
  // document.getElementById('root')
>>>>>>> Stashed changes
);
