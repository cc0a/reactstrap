import React from 'react';
import './assets/scss/services.scss';
import './assets/scss/team.scss';
import './assets/scss/contact.scss';
import './assets/scss/footer.scss';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import Team from './components/Team/Team';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Documents from './pages/Documents/Documents';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/documents-needed" component={Documents} />
         <div className="App">
          <Route path="/" component={Header} />
          <Route path="/" component={Services} />
          <Route path="/" component={Team} />
          <Route path="/" component={Contact} />
          {/* <Route path="/" component={Footer} /> */}
        </div>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
