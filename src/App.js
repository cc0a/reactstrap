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

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Services />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
