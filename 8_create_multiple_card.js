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
            <Card name="Ashutosh Tripathy" avatar_url="https://avatars.githubusercontent.com/u/12702948?v=4" company="Facebook" />
            <Card name="Ashutosh Tripathy" avatar_url="https://avatars.githubusercontent.com/u/12702948?v=4" company="Facebook" />

        </div>
    )
}

ReactDOM.render(<CardList />, mountNode);
