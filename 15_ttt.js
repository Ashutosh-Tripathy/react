
class Cell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpened: false
        }
    }
    render() { return (<button className="btn-lg btn-success active "></button>) }
}

class CellRow extends React.Component {
    render() { return (<div>{_.range(3).map(item=><Cell/>)}</div>)}
}

class Board extends React.Component {
    render() {
        return (
            <div> {_.range(3).map(item=><CellRow/>)} </div>
        )
    }
}

// class Game extends React.Component {
// 	<Cell/>
// }

ReactDOM.render(<Board />, mountNode);