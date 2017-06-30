import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Bootstrap from 'styles/themes/paper/bootstrap.css';
import 'styles/scrollBar.css';
import {ReactHistory} from "components/reacthistory"
import App from 'components/app'
        let Root =  (
            <BrowserRouter>
              <ReactHistory>
                    <App/>
               </ReactHistory>
            </BrowserRouter>);
       ReactDOM.render(Root, document.getElementById("app"));
