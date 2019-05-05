import React from "react";

export default class ContactAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handlePress = this.handlePress.bind(this);
  }

  handleChange(e) {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  handleClick() {
    const contact = {
      name: this.state.name,
      phone: this.state.phone
    }

    this.props.onAdd(contact);

    this.setState({
      name: '',
      phone: ''
    });

    this.nameInput.focus();
  }

  handlePress(e) {
    if(e.charCode === 13) {
      this.handleClick();
    }
  }

  render() {
    return(
      <div>
        <h2>Add Contact</h2>
        <p><input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.handleChange} onKeyPress={this.handlePress} ref={(ref) => {this.nameInput = ref}}/></p>
        <p><input type="text" name="phone" placeholder="phone" value={this.state.phone} onChange={this.handleChange} onKeyPress={this.handlePress}/></p>
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}

ContactAdd.defaultProps = {
  onAdd: () => {}
}
