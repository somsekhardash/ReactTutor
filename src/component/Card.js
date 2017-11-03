import React, { Component } from 'react';

class Card extends Component {
  
  deleteCard(e) {
    this.props.deleteCard(e,this);
  }

  updateCard(e) {
    this.props.updateCard(e,this.props.word);
    this.props.deleteCard(e,this.props.word);
  }    
    
  render() {
    var das="";
    if (!!this.props.synonyms) {
        das = this.props.synonyms.map((item,i) => 
            <li className="ui image label" key={i}>
                    {item}	
            </li>
        );
    }

    return (
            <div className="ui card full-width">
				  	<div className="content">
				    	<div className="header">{this.props.word}</div>
				  	</div>
					<div className="content">
						<h4 className="ui sub header blue">{this.props.meaning}</h4>
						<div className="ui small feed">
						  <div className="event">
						    <div className="content">
						      <div className="summary">
						         {this.props.example}
						      </div>
						    </div>
						  </div>
						</div>
						<ul className="parent no-padding margin-bottom-0">
							{das}
						</ul> 
					</div>
					<div className="extra content">
						<button className="ui button orange" data-som={this.key} onClick={this.deleteCard.bind(this)}>Delete</button>
						<button className="ui button teal" data-som={this.key} onClick={this.updateCard.bind(this)}>Update</button>
					</div>
            </div>
        );
  }
}

export default Card;
