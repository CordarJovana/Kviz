import React, {Component} from 'react';
import './index.css'

class Home extends Component{
    state={time:new Date()}

    currentTime(){
        this.setState({
            time:new Date()
        })
    }

    componentWillMount(){
setInterval(()=>this.currentTime(),1000)
    }


    render(){
        return(
<div className="sve">
<div classNamestyle="naslovislika" style={
            { justifyContent:'center', alignItems: 'center', alignContent:'center', height: '20vh', display: 'flex'}
        }>
            
            <h4>Vreme: {this.state.time.toLocaleTimeString()}</h4>
            
            
        </div>

        <div classNamestyle="naslovislika" style={
            { justifyContent:'center', alignItems: 'center', alignContent:'center', height: '40vh', display: 'flex'}
        }>
            <h1>Bolnica H&H </h1>
         
            
            
        </div>

        
        </div>
        )
    }
}

export default Home