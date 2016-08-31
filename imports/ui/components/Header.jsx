import React from 'react';
import { Link } from 'react-router';

import LoginButtons from './LoginButtons.jsx';
import AppBar from 'material-ui/AppBar';

export default class Header extends React.Component {

  constructor() {
     super();
     this.state = {
       liked: false
     };
     this.handleClick = this.handleClick.bind(this);
   }

   handleClick() {
     console.log("hola");
 }

  render() {
    const text = this.state.liked ? 'liked' : 'haven\'t liked';

    return (
      <header className='Header'>
      <AppBar
    title="Title"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
        <b>Header</b> &nbsp;
        <Link to="/">Home</Link> &nbsp;
        <Link to="about">About Page</Link> &nbsp;
        <Link to="bad-url">Not Found Page</Link> &nbsp;

        <LoginButtons align='left' />

        <div onClick={this.handleClick}>
          You {text} this. Click to toggle.
      </div>

      </header>
    );
  }
}
