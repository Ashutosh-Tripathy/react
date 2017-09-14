class MyButtonRow extends React.Component {
    constructor() {
        super();
        this.state = {
            textBoxValue: 0,
        }
    }
    onButtonClick = (item) => {
        this.setState((prevState)=>{return {textBoxValue: prevState.textBoxValue + item,
        disabled:true}})
    }
    render() {
        return <div>
            {_.range(1, 6).map(item => <button value={item} onClick={() => this.onButtonClick(item)}>{item}</button>)}
            <input type="number" value={this.state.textBoxValue}></input></div>
    }
}

class MyButtonList extends React.Component {
    state = {
        myButtonList: _.range(8).map(item => <MyButtonRow key = {item} number={item} />)
    }
    onButtonClick = () => {
        this.setState((prevState, props) => { myButtonList: prevState.myButtonList.push(<MyButton />) });
        console.log(this.state.myButtonList.length)
    }

    render() {
        return (
            <div id="myDivList">
                {this.state.myButtonList}
                <button onClick={this.onButtonClick}>submit</button>
            </div>)
    }
}

ReactDOM.render(<MyButtonList />, mountNode);