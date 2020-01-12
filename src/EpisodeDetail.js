import React, { Component } from 'react';

class EpisodeDetail extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            episode: [],
            recieved: false,
            characters: []
        };
        this.fetchFirst = this.fetchFirst.bind(this)
        this.fetchCharacter = this.fetchCharacter.bind(this)
    }

    async fetchFirst(){
        const response = await fetch("https://rickandmortyapi.com/api/episode/?episode="+this.props.number);
        const data = await response.json();
        console.log(data);
        this.setState({episode: data, recieved: true});
        if(this.state.recieved){
            var character = this.state.episode.results[0].characters;
            await character.map(this.fetchCharacter);
            console.log(this.state.characters);
            console.log("length " + this.state.characters.length);
          
        }
        
    }

    async fetchCharacter(url){
        const character = await fetch(url);
        const d = await character.json();
        this.setState({characters: this.state.characters.concat(d.name)});
     
    }
    componentDidMount(){
        this.fetchFirst();
        console.log("this.state.characters");
    }

    render(){
        return(
            <div >
                
            {
                this.state.recieved ? 
                <div >
                 <br></br>
                 <br></br>
                 <br></br>
                   <h3>Episode - {this.props.number}</h3>
                    <h4> Name   {this.state.episode.results[0].name} </h4>
                    <h4> Air Date : {this.state.episode.results[0].air_date}</h4>
                
                 <h3> Characters:</h3>
                 <ol>
                        {
                            this.state.characters.map(characters => <li>{characters}</li>)
                        }
                    </ol>
                 </div> :
                <div> Here </div>
            }
           
            </div>
        );
    }
}

export default EpisodeDetail;