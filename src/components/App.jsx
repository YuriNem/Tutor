import React from 'react';

import Header from './Header.jsx';
import AboutMe from './AboutMe.jsx';
import Classes from './Classes.jsx';
import Reviews from './Reviews.jsx';
import Prices from './Prices.jsx';
import Contacts from './Contacts.jsx';
import Footer from './Footer.jsx';
import { changeSubject, changeMethod, changeTime } from '../actions';

export default class App extends React.Component {
  onChange = (name) => (event) => {
    if (name === 'subject') {
      console.log(event.target.value);
      this.props.changeSubject({ subjectName: event.target.value });
  } else if (name === 'method') {
      this.props.changeMethod({ methodName: event.target.value });
  } else if (name === 'time') {
      this.props.changeTime({ timeName: event.target.value });
  }
  }

  render() {
    console.log(this.props);
    return ([
      <Header />,
      <main class="main">
        <a name="aboutme" class="anchor1"></a>
        <AboutMe />
        <a name="classes" class="anchor2"></a>
        <Classes />
        <a name="reviews" class="anchor3"></a>
        <Reviews />
        <a name="prices" class="anchor4"></a>
        <Prices {...this.props} onChange={this.onChange} />
        <a name="contacts" class="anchor5"></a>
        <Contacts />
      </main>,
      <Footer />,
    ]);
  }
}
