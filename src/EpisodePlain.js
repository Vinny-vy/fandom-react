import React, { Component } from 'react';
import Episode from './Episode';
import EpisodeDetail from './EpisodeDetail';
class EpisodePlain extends Component{
    
    state = {
        number: null
    }

    constructor(props){
        super(props);

        
        this.fun = this.fun.bind(this)
    }
    fun(n){
        this.setState({
            number: n
        });
    }
    fun1(){
        this.state.number= null;
    }
    

    render(){
        return(
            <div>
            {this.state.number === null ? <Episode fun={this.fun} /> : <div><EpisodeDetail number={this.state.number} /> {this.fun1()}</div> }
            </div>
        )
    }
}

export default EpisodePlain;