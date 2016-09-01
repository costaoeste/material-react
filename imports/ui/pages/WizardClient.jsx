import React, { Component,PropTypes } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'
import { createContainer } from 'meteor/react-meteor-data';
import NotLogged from '../components/NotLogged.jsx';
import classNames from 'classnames';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';



export default class WizardClient extends Component{

  constructor(props){
      super(props);
      this.state = {
        wizardIndexPage:0,
        data: [
        {title:"Bienvenido a Fábula", description:"lele",color:"#009688"},
        {title:"Adaptate a tu perfil para ganar", description:"lolo",color:"#FF9800"},
        {title:"Añade tu perfil", description:"lala",color:"#607D8B"}
      ],
    };
  }



  render(){



      var hideButtonBack = '';
      if(this.state.wizardIndexPage<0){
        hideButtonBack = 'dn';
      }

      var hideButtonNext = '';
      if(this.state.wizardIndexPage>this.state.data.length-2){
        hideButtonNext = 'dn';
      }


      return (


          this.props.currentUser ?(

        <div className={classNames('h-100','w-100','colorPrimary','tc')}>
            <div className='tr'><FontIcon className="material-icons">close</FontIcon></div>
            <h1 className={classNames('ma0','f-subheadline','5rem')}>{this.state.data[this.state.wizardIndexPage].title}</h1>
            <h1>Estamos en el wizard: {this.state.wizardIndexPage}</h1>
            <div className={classNames('bottom-2','left-2','absolute','hideButtonBack')}>
              <RaisedButton
              onClick={this.decrementWizardPageIndex.bind(this)}
              >
              Anterior
              </RaisedButton>
            </div>

            <div className={classNames('bottom-2','right-2','absolute','hideButtonNext')}>
              <RaisedButton
              onClick={this.incrementWizardPageIndex.bind(this)}
              >Siguiente
              </RaisedButton>
            </div>

        </div>
      ):(
        <NotLogged/>
      )
    );

  }

  incrementWizardPageIndex() {
    if(this.state.wizardIndexPage>this.state.data.length-2){
      return;
    }
    this.state.wizardIndexPage++;
    this.setState({
      wizardIndexPage: this.state.wizardIndexPage,
    });
  }

  decrementWizardPageIndex() {
    if(this.state.wizardIndexPage<1){
      return;
    }
    this.state.wizardIndexPage--;
    this.setState({
      wizardIndexPage: this.state.wizardIndexPage,
    });
  }
}


WizardClient.propTypes = {
  currentUser: PropTypes.object,
};

export default createContainer( () => {

  return {
    currentUser: Meteor.user(),
  };
},WizardClient);
