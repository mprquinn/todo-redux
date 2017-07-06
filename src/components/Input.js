import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleKeyPress = e => {
    if (e.key !== "Enter") return;

    const { onSubmitEditing } = this.props;
    const { value } = this.state;

    if (!value) return;

    onSubmitEditing(value);

    this.setState({
      value: ""
    });
  };

  render() {
    const { placeholder } = this.props;
    const { value } = this.state;

    return (
      <div className="todo__create">
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
      </div>
    );
  }
}

export default Input;
