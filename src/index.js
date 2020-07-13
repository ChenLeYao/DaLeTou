import ReactDom from  "react-dom";
import { RouteMain  ,  RouteIndex } from './router/router.js';
import Nav from './view/nav/nav.js';
import './css/public.css';
import './css/swiper.scss';
import './css/mobileSelect.css';

import { BrowserRouter as Router , Route } from 'react-router-dom';

class App extends Component {
    render(){
      return (
          <Router>
              <Route>
                  <RouteIndex/>
                  <Nav/>
              </Route>
              <Route>
                  <RouteMain/>
              </Route>
          </Router>
      )
    }
}

function rem() {
    var fz = document.querySelector('html').offsetWidth / 7.5;
    document.querySelector('html').style.fontSize =
        fz <= 100 ? fz + 'px' : '100px';
}
function render (){
    rem();
    ReactDom.render( <App/> , document.getElementById('root') );
}
render();


