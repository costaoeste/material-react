import React from 'react';
import { Link } from 'react-router';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import LoginButtons from './LoginButtons.jsx';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';


export default class Header extends React.Component {

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
      <header className='Header'>
      <AppBar
        zDepth={0}
        onLeftIconButtonTouchTap={this.handleClick.bind(this)}
        iconElementRight={<FlatButton label="Iniciar sesión" />}
        />

          <Drawer
          docked={false}
          width={200}
          onRequestChange={this.handleClick.bind(this)}
          open={this.state.open}>

         <Link to="/"> <MenuItem>Home</MenuItem></Link>
         <Link to="about"> <MenuItem  >About</MenuItem></Link>

       </Drawer>

       <div className="appBarBotton"></div>
      </header>
    );
  }
}
