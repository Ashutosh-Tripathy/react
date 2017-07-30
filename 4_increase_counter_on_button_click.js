// update button count on every click
class Button extends React.Component {
    state = { counter: 9 };
    handleClick = () => {
        // this.state.counter += 1
        this.setState({
            counter: this.state.counter + 1
        })
    };
    render() {
        return (
            <button onClick={this.handleClick}>{this.state.counter}</button>
        );
    }
}

ReactDOM.render(<Button />, mountNode);
