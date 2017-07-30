// setState is async, so to avoid race condition
class Button extends React.Component {
    state = { counter: 9 };
    handleClick = () => {
        // this.state.counter += 1
        this.setState((prevState) => ({
            counter: prevState.counter + 1
        }));
    };

    render() {
        return (
            <button onClick={this.handleClick}>{this.state.counter}</button>
        );
    }
}

ReactDOM.render(<Button />, mountNode);


