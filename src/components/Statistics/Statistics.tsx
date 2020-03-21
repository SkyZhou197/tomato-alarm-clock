import * as React from "react";
import { connect } from "react-redux";
import "./Statistics.scss";
import TodoHistory from "./TodoHistory/TodoHistory";

import { format } from "date-fns";
import _ from "lodash";

interface IStatisticsProps {
  todos: any[];
}

class Statistics extends React.Component<IStatisticsProps> {
  get finishedTodos() {
    return this.props.todos.filter(t => t.completed && !t.deleted);
  }

  get dailyTodos() {
    return _.groupBy(this.finishedTodos, todo => {
      return format(todo.updated_at, "YYYY-MM-D");
    });
  }

  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <div className="Statistics" id="Statistics">
        <TodoHistory />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  todos: state.todos,
  ...ownProps
});

export default connect(mapStateToProps)(Statistics);
