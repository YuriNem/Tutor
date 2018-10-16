import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Header.jsx';
import AboutMe from './AboutMe.jsx';
import Classes from './Classes.jsx';
import Reviews from './Reviews.jsx';
import Prices from './Prices.jsx';
import Contacts from './Contacts.jsx';
import Footer from './Footer.jsx';

export default class App extends React.Component {
  onChange = (key) => (event) => {
    this.props.asyncChange(key, event.target.value);
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Header />
            <main className="main">
              <Switch>
                <Route exact path="/" component={AboutMe} />
                <Route path="/classes" component={Classes} />
                <Route path="/reviews" component={Reviews} />
                <Route path="/prices" component={() => <Prices {...this.props} onChange={this.onChange} />} />
                <Route path="/contacts" component={Contacts} />
              </Switch>
            </main>
          <Footer />
        </div>
      </Router>
    );
  }
}
