import React, { Component } from 'react';

class CardMaker extends Component {
    
    componentWillMount(){
        debugger;
        this.setState({
            synonyms : this.props.updateCard.synonyms,
            word: this.props.updateCard.word,   
            meaning:  this.props.updateCard.meaning,
            example: this.props.updateCard.example
        }) 
    }

    // componentWillReceiveProps(){
    //    // debugger;
    //     this.updateWord({
    //         synonyms : this.props.updateCard.synonyms,
    //         word: this.props.updateCard.word,
    //         meaning:  this.props.updateCard.meaning,
    //         example: this.props.updateCard.example
    //     })  
    // }

    wordChange(e){
        this.setState({
            word: e.target.value 
        })
    }

    MeaningChange(e){
        this.setState({
            meaning: e.target.value 
        })
    }

    exampleChange(e){
        this.setState({
            example: e.target.value 
        })
    }

    myFunction(e){
		if(e.which == 13){
			this.setState({
				synonyms: this.state.synonyms.concat(e.target.value)
			});
			e.target.value = "";	
		}	
    }
    
    deleteWord(word){
		let ind = this.state.synonyms.indexOf(word.target.dataset.name);
		this.state.synonyms.splice(ind,1);
		this.setState({
			synonyms: this.state.synonyms.splice("")
		});
	}

    saveWord(){
        let theWord = {};
		theWord.word = this.state.word;
		theWord.meaning = this.state.meaning;
        theWord.example = this.state.example;
        theWord.synonyms=this.state.synonyms.splice("");
        this.props.onSave(theWord);
        this.updateWord({
            synonyms : [],
            word: "",
            meaning: "",
            example: ""
        });
	}
    
    updateWord(node){
		this.setState({
			word: node.word,
			meaning: node.meaning,
			example: node.example,
			synonyms: node.synonyms.splice("")
		})
	}

  render() {
    return (
        <div className="column">
            <div className="ui icon input fluid margin-bottom-25">
                <input type="text" placeholder="Word" value={this.state.word}  onChange={this.wordChange.bind(this)}/>
                <i className="icon"></i>
            </div>
            <div className="ui input fluid margin-bottom-25">
                <input type="text" placeholder="Meaning" value={this.state.meaning} onChange={this.MeaningChange.bind(this)} />
            </div>
            <div className="ui input fluid margin-bottom-25">
                <input type="text" placeholder="Example" value={this.state.example} onChange={this.exampleChange.bind(this)}/>
            </div>
            <div className="ui input fluid margin-bottom-25">
                <input type="text" placeholder="Synonyms" onKeyPress={this.myFunction.bind(this)}/>
            </div>
            <ul className="parent no-padding">
                {this.state.synonyms.map((item,i)=><li key={i} className="ui image label" >
                    {item} <i className="delete icon" data-name={item} onClick={this.deleteWord.bind(this)}></i>
                </li>)}
            </ul>
            <button className="ui primary button" onClick={this.saveWord.bind(this)}>Save</button>
        </div>
    );
  }
}

export default CardMaker;
