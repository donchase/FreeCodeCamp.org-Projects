class MyComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        // Change code below this line
        return (
            <div>
                <h1>My First React Component!</h1>
            </div>
        )
        // Change code above this line
    }
};

ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'));