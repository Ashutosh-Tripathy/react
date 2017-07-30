const Button = (props) => {
    return (
        <button>{props.label}</button>
        //React.createElement("button", null, "Go")
    );
};

ReactDOM.render(<Button label="Go" />, mountNode);

