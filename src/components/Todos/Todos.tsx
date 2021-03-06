import * as React from "react";
import { connect } from "react-redux";
import TodoInput from "../../components/Todos/TodoInput";
import TodoItem from "../../components/Todos/TodoItem";
import "./Todos.scss";
import { updateTodo } from "../../redux/actions/todos";

class Todos extends React.Component<any> {
  constructor(props) {
    super(props);
  }

  get unDeletedTodos() {
    return this.props.todos.filter(t => !t.deleted);
  }

  get unCompletedTodos() {
    return this.unDeletedTodos.filter(t => !t.completed);
  }

  get completedTodos() {
    return this.unDeletedTodos.filter(t => t.completed);
  }

  public render() {
    return (
      <div className="Todos" id="Todos">
        <TodoInput />
        <div className="todoLists">
          {this.unCompletedTodos.map(t => (
            <TodoItem key={t.id} {...t} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  todos: state.todos,
  ...ownProps
});
const mapDispatchToProps = {
  updateTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
