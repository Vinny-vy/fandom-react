import React, { Component } from 'react';
import './location.css';


class location extends Component{
state = {
    loading:true,
    locations:null,
};

async componentDidMount()
{
    const url="https://rickandmortyapi.com/api/location/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({locations:data, loading:false});
  
}

render(){
        return(
            
           
                <div>
                
                
                {    this.state.loading || !this.state.locations ? <div> loading..</div>:<div>
                
                    <div className="row">
                    <div className="cell">
                        <div className="header">
                            <span>{this.state.locations.results[0].type}</span>
                        </div>
                        <div className="content">
                            <span>{this.state.locations.results[0].dimension}</span>
                        </div>
                        <div className="header">
                            <span>{this.state.locations.results[0].residents.length}</span>
                        </div>
                    </div>
                 
                    <div className="cell">
                        <div className="header">
                            <span>{this.state.locations.results[1].type}</span>
                        </div>
                        <div className="content">
                            <span>{this.state.locations.results[1].dimension}</span>
                        </div>
                        <div className="header">
                            <span>{this.state.locations.results[1].residents.length}</span>
                        </div>
                    </div>

                    <div className="cell">
                        <div className="header">
                            <span>{this.state.locations.results[2].type}</span>
                        </div>
                        <div className="content">
                            <span>
                                {this.state.locations.results[2].dimension}</span>
                        </div>
                        <div className="header">
                            <span>{this.state.locations.results[2].residents.length}</span>
                        </div>
                    </div>

                    <div className="cell">
                        <div className="header">
                            <span>{this.state.locations.results[3].type}</span>
                        </div>
                        <div className="content">
                            <span>{this.state.locations.results[3].dimension}</span>
                        </div>
                        <div className="header">
                            <span>{this.state.locations.results[3].residents.length}</span>
                        </div>
                    </div>
                    </div>

                <div className="row">
                    <div className="cell">
                        <div className="header">
                            <span>{this.state.locations.results[4].type}</span>
                        </div>
                        <div className="content">
                            <span>{this.state.locations.results[4].dimension}</span>
                        </div>
                        <div className="header">
                            <span>{this.state.locations.results[4].residents.length}</span>
                        </div>
                    </div>

                    <div className="cell">
                        <div className="header">
                            <span>{this.state.locations.results[5].type}</span>
                        </div>
                        <div className="content">
                            <span>{this.state.locations.results[5].dimension}</span>
                        </div>
                        <div className="header">
                            <span>{this.state.locations.results[5].residents.length}</span>
                        </div>
                    </div>

                    <div className="cell">
                        <div className="header">
                            <span>{this.state.locations.results[6].type}</span>
                        </div>
                        <div className="content">
                            <span>{this.state.locations.results[6].dimension}</span>
                        </div>
                        <div className="header">
                            <span>{this.state.locations.results[6].residents.length}</span>
                        </div>
                    </div>

                    <div className="cell">
                        <div className="header">
                            <span>{this.state.locations.results[7].type}</span>
                        </div>
                        <div className="content">
                            <span>{this.state.locations.results[7].dimension}</span>
                        </div>
                        <div className="header">
                            <span>{this.state.locations.results[7].residents.length}</span>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="cell">
                        <div className="header">
                            <span>{this.state.locations.results[8].type}</span>
                        </div>
                        <div className="content">
                            <span>{this.state.locations.results[8].dimension}</span>
                        </div>
                        <div className="header">
                            <span>{this.state.locations.results[8].residents.length}</span>
                        </div>
                    </div>

                    <div className="cell">
                        <div className="header">
                            <span>{this.state.locations.results[9].type}</span>
                        </div>
                        <div className="content">
                            <span>{this.state.locations.results[9].dimension}</span>
                        </div>
                        <div className="header">
                            <span>{this.state.locations.results[9].residents.length}</span>
                        </div>
                    </div>

                    <div className="cell">
                        <div className="header">
                            <span>{this.state.locations.results[10].type}</span>
                        </div>
                        <div className="content">
                            <span>{this.state.locations.results[10].dimension}</span>
                        </div>
                        <div className="header">
                            <span>{this.state.locations.results[10].residents.length}</span>
                        </div>
                    </div>

                    <div className="cell">
                        <div className="header">
                            <span>{this.state.locations.results[11].type}</span>
                        </div>
                        <div className="content">
                            <span>{this.state.locations.results[11].dimension}</span>
                        </div>
                        <div className="header">
                            <span>{this.state.locations.results[11].residents.length}</span>
                        </div>
                    </div>
        

              
                </div> 
               
                
                </div>
            }           
            </div>
        
        );
    }
}

export default location;