import React from "react";

export default class ContactDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      name: '',
      phone: ''
    }
    this.handleToggle = this.handleToggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handlePress = this.handlePress.bind(this);
  }

  handleToggle() {
    if(!this.state.isEdit) {
      this.setState({
        name: this.props.contact.name,
        phone: this.props.contact.phone
      });
    } else {
      this.handleEdit();
    }

    this.setState({
      isEdit: !this.state.isEdit
    });
  }

  handleChange(e) {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  handleEdit() {
    this.props.onEdit(this.state.name, this.state.phone);
  }

  handlePress(e) {
    if(e.charCode === 13) {
      this.handleToggle();
    }
  }

  render() {
    const details = (<div>
                      <h2>Contact Details</h2>
                      <p>{this.props.contact.name}</p>
                      <p>{this.props.contact.phone}</p>
                      <button onClick={this.handleToggle}>Edit</button>
                      <button onClick={this.props.onRemove}>Remove</button>
                    </div>);

    const blank = (<div></div>);

    const edit = (
      <div>
        <h2>Contact Details</h2>
        <p><input type='text' name='name' placeholder='name' value={this.state.name} onChange={this.handleChange} onKeyPress={this.handlePress}/></p>
        <p><input type='text' name='phone' placeholder='phone' value={this.state.phone} onChange={this.handleChange} onKeyPress={this.handlePress}/></p>
        <button onClick={this.handleToggle}>Edit</button>
        <button onClick={this.props.onRemove}>Remove</button>
      </div>
    );

    const view = this.state.isEdit ? edit : details;

    return (
      <div>
        {this.props.isSelected ? view : blank}
      </div>
    );
  }
}

ContactDetails.defaultProps = {
  contact: {
    name: '',
    phone: ''
  },
  onRemove: () => {},
  onEdit: () => {}
}
