// import { renderRoutes } from "react-router-config";
// import routes from "./routes";
// import { HashRouter as Router } from "react-router-dom";

import React from 'react'
// import { TabBar, BaseNavBar } from "./components/Layouts"
import { renderRoutes } from 'react-router-config'
import routes from './routes'
import { HashRouter as Router } from 'react-router-dom'
// import { Provider } from "react-redux"
// import store from "./store"

// import Layouts from "./components/Layouts";

function App() {
  return (
    <Router>
      <div className="main">{renderRoutes(routes)}</div>
    
{/** <Layouts>{renderRoutes(routes)}</Layouts>*/}
    </Router>
  );
}

export default App;
