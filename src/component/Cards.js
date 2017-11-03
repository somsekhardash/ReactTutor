import React, { Component } from 'react';
import Card from './Card';

class Cards extends Component {
  
	updateCard(e,word){
		this.props.updateCard(word);
	}

	deleteCard(e,word){
		this.props.deleteCard(word);
	}

  render() {
		var dash="";
		if (!!this.props.thewords) {
			dash = this.props.thewords.map((item,i) => 
				<Card 
					key={i} 
					word={item.word} 
					meaning={item.meaning} 
					example={item.example} 
					synonyms={item.synonyms}
					updateCard={this.updateCard.bind(this)}
					deleteCard={this.deleteCard.bind(this)}
				/>
			);
		}

    return (
        <div className="column">
					{dash}
        </div>
    );
  }
}

export default Cards;
