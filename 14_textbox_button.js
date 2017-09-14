class MyButton extends React.Component {
	constructor(props){
  	super(props)
  }
  onButtonClick = () => {
  	// alert("you clicked: );
  }
  render(){
  	return <div><button className = 'btn-success' onClick = {this.onButtonClick}>{this.props.name}</button> <input type = "text" value = {this.props.name}></input></div>
  } 
}

class MyButtonList extends React.Component{		
		state = {
			myButtonList:_.range(5).map(item=><MyButton name = {"Shubhi: " + item} />)
			    
    }
		onButtonClick = () => {
      this.setState((prevState,props) => {myButtonList: prevState.myButtonList.push(<MyButton name = "testing"/>)});
    	
  	}
	render() {	return (  
  	
    <div id = "myDivList">    
    	{this.state.myButtonList}<br/>
      <button onClick = {this.onButtonClick}>Create New Button</button>
    </div>)
    }    
}

ReactDOM.render(<MyButtonList/>, mountNode);