const Card = (props) => {
    return (
        <div style={{ margin: '1em' }}>
            <img width="75" src={props.avatar_url} />
            <div className="info" style=
                {{
                    display: 'inline-block',
                    marginLeft: 10
                }}>
                <div style={{ fontSize: '1.25em', fontWeight: 'bold' }}> {props.name} </div>
                <div> {props.company}</div>
            </div>
        </div>
    )
}

const CardList = (props) => {
    return (
        <div>
            {props.cards.map(card => <Card key={card.id} {...card} />)}
        </div>
    )
}
class Form extends React.Component {
    state = { userName: '' }
    handleSubmit = (event) => {
        event.preventDefault();
        // console.log("Event Form Submit", this.state.userName);
        // console.log("https://api.github.com/users/" + this.state.userName);
        axios.get("https://api.github.com/users/" + this.state.userName)
            .then(resp => {
                this.props.onSubmit(resp.data);
                this.setState({ userName: '' });
            });

    }
    render() {
        return (<form onSubmit={this.handleSubmit}>
            <input type="text"
                value={this.state.userName}
                onChange={(event) => this.setState({ userName: event.target.value })}
                placeholder="Github username" required />
            <input type="submit" value="Add card" />
        </form>);
    }
}

class App extends React.Component {
    state = {
        cards: [
            {
                "avatar_url": "https://avatars0.githubusercontent.com/u/3?v=4",
                "name": "test user1",
                "company": "facebook",
            },
            {
                "avatar_url": "https://avatars0.githubusercontent.com/u/4?v=4",
                "name": "test user1",
                "company": "google",
            },
            {
                "avatar_url": "https://avatars2.githubusercontent.com/u/12702948?v=4",
                "name": "Ashutosh Tripathy",
                "company": "intel securtiy",
            }
        ]
    };

    addNewCard = (cardInfo) => {
        this.setState(prevState => ({
            cards: prevState.cards.concat(cardInfo)
        }));
        console.log(cardInfo);
    }
    render() {
        return (
            <div>
                <Form onSubmit={this.addNewCard} />
                <CardList cards={this.state.cards} />
            </div>
        )
    }
}
// ReactDOM.render(<CardList cards ={data} />, mountNode);
ReactDOM.render(<App />, mountNode);
