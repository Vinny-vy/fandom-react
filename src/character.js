import React, { Component } from 'react';
import './character.css';

class character extends Component{
state = {
    loading:true,
    characters:null,
};

async componentDidMount()
{
    const url="https://rickandmortyapi.com/api/character/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({characters:data, loading:false});
  
}

render(){
        return(
            
                
                <div>
                
                
                {    this.state.loading || !this.state.characters ? <div> loading..</div>:<div>
                
               <div className="row">
                    <div className="cell">
                        <div className="header">
                            <span>{this.state.characters.results[0].episode.length}</span>
                        </div>
                        <div className="content">
                            <span>{this.state.characters.results[0].name}</span>
                        </div>
                        <div className="header">
                            <span>{this.state.characters.results[0].species}</span>
                        </div>
                    </div>
                 
                    <div className="cell">
                        <div className="header">
                            <span>{this.state.characters.results[1].episode.length}</span>
                        </div>
                        <div className="content">
                            <span>{this.state.characters.results[1].name}</span>
                        </div>
                        <div className="header">
                            <span>{this.state.characters.results[1].species}</span>
                        </div>
                    </div>

                    <div className="cell">
                        <div className="header">
                            <span>{this.state.characters.results[2].episode.length}</span>
                        </div>
                        <div className="content">
                            <span>
                                {this.state.characters.results[2].name}</span>
                        </div>
                        <div className="header">
                            <span>{this.state.characters.results[2].species}</span>
                        </div>
                    </div>

                    <div className="cell">
                        <div className="header">
                            <span>{this.state.characters.results[3].episode.length}</span>
                        </div>
                        <div className="content">
                            <span>{this.state.characters.results[3].name}</span>
                        </div>
                        <div className="header">
                            <span>{this.state.characters.results[3].species}</span>
                        </div>
                    </div>
                    </div>

                <div className="row">
                    <div className="cell">
                        <div className="header">
                            <span>{this.state.characters.results[4].episode.length}</span>
                        </div>
                        <div className="content">
                            <span>{this.state.characters.results[4].name}</span>
                        </div>
                        <div className="header">
                            <span>{this.state.characters.results[4].species}</span>
                        </div>
                    </div>

                    <div className="cell">
                        <div className="header">
                            <span>{this.state.characters.results[5].episode.length}</span>
                        </div>
                        <div className="content">
                            <span>{this.state.characters.results[5].name}</span>
                        </div>
                        <div className="header">
                            <span>{this.state.characters.results[5].species}</span>
                        </div>
                    </div>

                    <div className="cell">
                        <div className="header">
                            <span>{this.state.characters.results[6].episode.length}</span>
                        </div>
                        <div className="content">
                            <span>{this.state.characters.results[6].name}</span>
                        </div>
                        <div className="header">
                            <span>{this.state.characters.results[6].species}</span>
                        </div>
                    </div>

                    <div className="cell">
                        <div className="header">
                            <span>{this.state.characters.results[7].episode.length}</span>
                        </div>
                        <div className="content">
                            <span>{this.state.characters.results[7].name}</span>
                        </div>
                        <div className="header">
                            <span>{this.state.characters.results[7].species}</span>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="cell">
                        <div className="header">
                            <span>{this.state.characters.results[8].episode.length}</span>
                        </div>
                        <div className="content">
                            <span>{this.state.characters.results[8].name}</span>
                        </div>
                        <div className="header">
                            <span>{this.state.characters.results[8].species}</span>
                        </div>
                    </div>

                    <div className="cell">
                        <div className="header">
                            <span>{this.state.characters.results[9].episode.length}</span>
                        </div>
                        <div className="content">
                            <span>{this.state.characters.results[9].name}</span>
                        </div>
                        <div className="header">
                            <span>{this.state.characters.results[9].species}</span>
                        </div>
                    </div>

                    <div className="cell">
                        <div className="header">
                            <span>{this.state.characters.results[10].episode.length}</span>
                        </div>
                        <div className="content">
                            <span>{this.state.characters.results[10].name}</span>
                        </div>
                        <div className="header">
                            <span>{this.state.characters.results[10].species}</span>
                        </div>
                    </div>

                    <div className="cell">
                        <div className="header">
                            <span>{this.state.characters.results[11].episode.length}</span>
                        </div>
                        <div className="content">
                            <span>{this.state.characters.results[11].name}</span>
                        </div>
                        <div className="header">
                            <span>{this.state.characters.results[11].species}</span>
                        </div>
                    </div>
        

              
                </div> 
                </div>
            }           
            </div>
        );
    }
}

export default character;