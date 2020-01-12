import React, { Component } from 'react';
//import 'episode.css';

class Episode extends Component{
    state = {
        episodes: null,
        received: false,
    };
    constructor(props){
        super(props);
    }

    async fetchFirst(){
        const response = await fetch("https://rickandmortyapi.com/api/episode/");
        const data = await response.json();
        console.log(data);
        this.setState({episodes: data, received: true});
    }

    componentDidMount(){
        this.fetchFirst();
    }

       render(){
        return(
              
                <div>
                
                
                {    this.state.loading || !this.state.episodes ? <div> loading..</div>:<div>
                
               <div className="row">
                    <div className="cell">
                        <div className="header"   onClick={()=>this.props.fun(this.state.episodes.results[0].episode)}>
                            <span>{this.state.episodes.results[0].episode}</span>
                        </div>
                        <div className="content">
                            <span>{this.state.episodes.results[0].name}</span>
                        </div>
                        <div className="header">
                            <span>{this.state.episodes.results[0].characters.length}</span>
                        </div>
                    </div>
                 
                    <div className="cell">
                    <div className="header"   onClick={()=>this.props.fun(this.state.episodes.results[1].episode)}> 
                            <span>{this.state.episodes.results[1].episode}</span>
                        </div>
                        <div className="content">
                            <span>{this.state.episodes.results[1].name}</span>
                        </div>
                        <div className="header">
                            <span>{this.state.episodes.results[1].characters.length}</span>
                        </div>
                    </div>

                    <div className="cell"   onClick={()=>this.props.fun(this.state.episodes.results[2].episode)}>
                    <div className="header">
                            <span>{this.state.episodes.results[2].episode}</span>
                        </div>
                        <div className="content">
                            <span>{this.state.episodes.results[2].name}</span>
                        </div>
                        <div className="header">
                            <span>{this.state.episodes.results[2].characters.length}</span>
                        </div>
                    </div>

                    <div className="cell">
                    <div className="header"   onClick={()=>this.props.fun(this.state.episodes.results[3].episode)}>
                            <span>{this.state.episodes.results[3].episode}</span>
                        </div>
                        <div className="content">
                            <span>{this.state.episodes.results[3].name}</span>
                        </div>
                        <div className="header">
                            <span>{this.state.episodes.results[3].characters.length}</span>
                        </div>
                    </div>
                    </div>

                <div className="row">
                    <div className="cell">
                    <div className="header"   onClick={()=>this.props.fun(this.state.episodes.results[4].episode)}>
                            <span>{this.state.episodes.results[4].episode}</span>
                        </div>
                        <div className="content">
                            <span>{this.state.episodes.results[4].name}</span>
                        </div>
                        <div className="header">
                            <span>{this.state.episodes.results[4].characters.length}</span>
                        </div>
                    </div>

                    <div className="cell">
                    <div className="header"   onClick={()=>this.props.fun(this.state.episodes.results[5].episode)}>
                            <span>{this.state.episodes.results[5].episode}</span>
                        </div>
                        <div className="content">
                            <span>{this.state.episodes.results[5].name}</span>
                        </div>
                        <div className="header">
                            <span>{this.state.episodes.results[5].characters.length}</span>
                        </div>
                    </div>

                    <div className="cell">
                    <div className="header"   onClick={()=>this.props.fun(this.state.episodes.results[6].episode)}>
                            <span>{this.state.episodes.results[6].episode}</span>
                        </div>
                        <div className="content">
                            <span>{this.state.episodes.results[6].name}</span>
                        </div>
                        <div className="header">
                            <span>{this.state.episodes.results[6].characters.length}</span>
                        </div>
                    </div>

                    <div className="cell">
                    <div className="header"   onClick={()=>this.props.fun(this.state.episodes.results[7].episode)}>
                            <span>{this.state.episodes.results[7].episode}</span>
                        </div>
                        <div className="content">
                            <span>{this.state.episodes.results[7].name}</span>
                        </div>
                        <div className="header">
                            <span>{this.state.episodes.results[7].characters.length}</span>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="cell">
                    <div className="header"   onClick={()=>this.props.fun(this.state.episodes.results[8].episode)}>
                            <span>{this.state.episodes.results[8].episode}</span>
                        </div>
                        <div className="content">
                            <span>{this.state.episodes.results[8].name}</span>
                        </div>
                        <div className="header">
                            <span>{this.state.episodes.results[8].characters.length}</span>
                        </div>
                    </div>

                    <div className="cell">
                    <div className="header"   onClick={()=>this.props.fun(this.state.episodes.results[9].episode)}>
                            <span>{this.state.episodes.results[9].episode}</span>
                        </div>.
                        <div className="content">
                            <span>{this.state.episodes.results[9].name}</span>
                        </div>
                        <div className="header">
                            <span>{this.state.episodes.results[9].characters.length}</span>
                        </div>
                    </div>

                    <div className="cell">
                    <div className="header"   onClick={()=>this.props.fun(this.state.episodes.results[10].episode)}>
                            <span>{this.state.episodes.results[10].episode}</span>
                        </div>
                        <div className="content">
                            <span>{this.state.episodes.results[10].name}</span>
                        </div>
                        <div className="header">
                            <span>{this.state.episodes.results[10].characters.length}</span>
                        </div>
                    </div>

                    <div className="cell">
                    <div className="header"   onClick={()=>this.props.fun(this.state.episodes.results[11].episode)}>
                            <span>{this.state.episodes.results[11].episode}</span>
                        </div>
                        <div className="content">
                            <span>{this.state.episodes.results[11].name}</span>
                        </div>
                        <div className="header">
                            <span>{this.state.episodes.results[11].characters.length}</span>
                        </div>
                    </div>
        

              
                </div> 
                </div>
            }           
            </div>
        );
    }
}

export default Episode;