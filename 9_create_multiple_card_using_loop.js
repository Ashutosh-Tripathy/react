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

let data = [
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
];
const CardList = (props) => {
    return (
        <div>
            {props.cards.map(card => <Card{...card} />)}

        </div>
    )
}
ReactDOM.render(<CardList cards={data} />, mountNode);
