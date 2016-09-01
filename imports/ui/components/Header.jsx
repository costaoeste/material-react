import React, { Component,PropTypes } from 'react';
import { Link } from 'react-router';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import LoginButtons from './LoginButtons.jsx';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import classNames from 'classnames';
import { createContainer } from 'meteor/react-meteor-data';


export default class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

   handleClick() {
     this.setState({
         open: !this.state.open
       });
  }

  render() {
    const text = this.state.liked ? 'liked' : 'haven\'t liked';

    return (
      <header className='colorPrimary'>
      <AppBar
        zDepth={0}
        onLeftIconButtonTouchTap={this.handleClick.bind(this)}
        iconElementRight={<LoginButtons align="right"/>}
        />

          <Drawer
          docked={false}
          width={200}
          onRequestChange={this.handleClick.bind(this)}
          open={this.state.open}>

         <Link to="/" className={classNames('no-underline')}>
          <MenuItem>Home</MenuItem>
         </Link>
         <Link to="about" className={classNames('no-underline')}>
          <MenuItem  >About</MenuItem>
         </Link>

         {
           this.props.currentUser ? (
           <Link to="wizard" className={classNames('no-underline')}>
            <MenuItem  >Wizard</MenuItem>
           </Link>):''
        }


       </Drawer>



       <div className={classNames('dt','mw6','center','pv5')}>
          <div className={classNames('dtc','v-mid')}>
          <FontIcon className={classNames('logo','material-icons')}>assessment</FontIcon>
            <p className={classNames('lh-copy','f3','1.5rem','tc-white','tc','fw3')}>
            El primer juego de simulación de mercado en tiempo real.
            </p>
            </div>
      </div>

      </header>
    );
  }
}

Header.propTypes = {
  currentUser: PropTypes.object,
};

export default createContainer( () => {

  return {
    currentUser: Meteor.user(),
  };
},Header);
