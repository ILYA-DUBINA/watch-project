interface TimeProps {
  hour: string;
  minute: string;
  second: string;
}

const Watch = ({hour,minute,second}:TimeProps) => {

  return (    
    <div className="clock">
      <div className="hour">
        <div className="hr" style={{'transform': `rotateZ(${+hour * 30}deg)`}} id="hr"></div>    
      </div>
      <div className="min">
        <div className="mn" style={{'transform': `rotateZ(${+minute * 6}deg)`}} id="mn"></div>
      </div>
      <div className="sec">
        <div className="sc" style={{'transform': `rotateZ(${+second * 6}deg)`}} id="sc"></div>
      </div>
    </div>
  )
}

export default Watch;

