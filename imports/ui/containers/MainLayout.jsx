import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../components/Header.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {cyan500} from 'material-ui/styles/colors';


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const fabulaTheme = getMuiTheme({
  palette: {
    primary1Color: "#1690DB",
    textColor: cyan500,
  },
  appBar: {
    height: 50,
  },
});

export default class MainLayout extends React.Component {
  render() {
    return (
      <div className="MainLayout">
      <MuiThemeProvider muiTheme={fabulaTheme}>
      <div>
        <Header />
        <main>{this.props.children}</main>
        </div>
      </MuiThemeProvider>
      </div>
    );
  }
}
