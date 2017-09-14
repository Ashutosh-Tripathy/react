class Star extends React.Component {
	render() {
  	return <p1> * </p1>
  }
}
class StarBoard extends React.Component {
  n = Math.floor(Math.random() * 10)+ 1;
	render() {
  	return(	
    	<div>
    				{_.range(0,this.n).map(item=><Star/>)}
      </div>
    );
  }
}

class NumberSelector extends React.Component {
	render(){
  	return <div>{_.range(1, 11).map(item=><button>{item}</button>)}</div>
  }
}

class App extends React.Component {
	handleSubmit = (event)=> {
  	event.preventDefault();
  	alert();
  }
	render() {
  	return(<div>
    <StarBoard/>
    <NumberSelector/>
    <br/>
    <button type = "button" onClick = {this.handleSubmit}>Submit</button>
    </div>);    
  }
}


ReactDOM.render(<App/>, mountNode);