import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreators } from "./toDoListRedux";
import Header from "./components/Header";
import Input from "./components/Input";
import List from "./components/List";

const mapStateToProps = state => ({
  todos: state.todos
});

class App extends Component {
  onAddToDo = text => {
    const { dispatch } = this.props;

    dispatch(actionCreators.add(text));
  };

  onRemoveTodo = index => {
    const { dispatch } = this.props;

    dispatch(actionCreators.remove(index));
  };

  render() {
    const { todos } = this.props;
    return (
      <div className="App">
        <Header />
        <Input onSubmitEditing={this.onAddToDo} placeholder={"Add a ToDo"} />
        <List list={todos} onClickItem={this.onRemoveTodo} />
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
