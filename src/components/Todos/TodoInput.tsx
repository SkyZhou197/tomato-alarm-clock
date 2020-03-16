import * as React from "react";
import { Input } from "antd";
import { EnterOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

interface ITodoInputState {
  description: string;
}

interface ITodoInputProps {
  addTodo: (params: any) => void;
}

class TodoInput extends React.Component<ITodoInputProps, ITodoInputState> {
  constructor(props) {
    super(props);
    this.state = {
      description: ""
    };
  }

  onKeyUp = e => {
    if (e.keyCode === 13 && this.state.description !== "") {
      this.addTodo();
    }
  };

  addTodo = () => {
    this.props.addTodo({ description: this.state.description });
    this.setState({ description: "" });
  };

  public render() {
    const { description } = this.state;
    const suffix = description ? (
      <EnterOutlined onClick={this.addTodo} />
    ) : (
      <span />
    );
    return (
      <div className="TodoInput" id="TodoInput">
        <Input
          placeholder="添加新任务"
          suffix={suffix}
          value={description}
          onChange={e => this.setState({ description: e.target.value })}
          onKeyUp={this.onKeyUp}
        />
      </div>
    );
  }
}

export default TodoInput;
