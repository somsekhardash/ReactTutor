import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CardMaker from './component/CardMaker';
import Cards from './component/Cards';
import * as actions from './actions/wordsAction';

class App extends Component {
  
  thisIsMyFun(){
    console.log("i m fucked ");
    console.log(this.props);
  }

  componentWillMount(){
    //debugger;
    this.props.fetchWords();
  }

  removeTheWords(word){
    this.props.removeWords(word)
  }

  render() {
    {this.thisIsMyFun()}
    return (
        <div className="App ui two column doubling stackable grid container padding-top-25">
            
            {/* <CardMaker 
              onSave= {this.newCardAdded.bind(this)} 
              updateCard = {this.state.updateCard}
            />*/}
            
            <Cards
              thewords = {this.props.allWords}
              deleteCard = {this.removeTheWords.bind(this)}
            /> 
            
        </div>
    );
  }
}

function mapStateToProps(state){
  return {
    allWords: state.allWords 
  };
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWords:actions.fetchWords,removeWords:actions.removeWords},dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
