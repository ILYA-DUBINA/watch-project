import React, { Component } from "react";

type MyProps = {};
type MyState = { hours: number, minutes: number, seconds: number};

export default class WatchClass extends Component<MyProps, MyState> {
  interval: any;

  constructor(props: any){    
    super(props);    
    this.state = {
        hours: 0,
        minutes: 0,
        seconds: 0,        
    };    
  }

  clockState() {
    const date = new Date();    
    this.setState({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    });
  }

  componentDidMount() {
      this.interval = setInterval(() => this.clockState(), 10);
  }

  componentWillUnmount() {
      clearInterval(this.interval);
  }

  render() {  
    return  (
      <div className="clock clockClass">
        <div className="hour">
          <div className="hr hrClass" style={{'transform': `rotateZ(${this.state.hours * 30}deg)`}} id="hr"></div>    
        </div>
        <div className="min">
          <div className="mn" style={{'transform': `rotateZ(${this.state.minutes * 6}deg)`}} id="mn"></div>
        </div>
        <div className="sec">
          <div className="sc" style={{'transform': `rotateZ(${this.state.seconds * 6}deg)`}} id="sc"></div>
        </div>
      </div> 
    ) 
  }
}