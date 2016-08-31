import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../components/Header.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
export default class MainLayout extends React.Component {
  render() {
    return (
      <div className="MainLayout">
      <MuiThemeProvider>
      <div>
        <Header />
        <main>{this.props.children}</main>
        </div>
      </MuiThemeProvider>
      </div>
    );
  }
}
