class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    // Change code below this line
    console.log("componentWillMount() runs before render()")
    // Change code above this line
  }
  render() {
    return <div />
  }
};
