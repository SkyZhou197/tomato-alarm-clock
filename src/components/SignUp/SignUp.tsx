import * as React from "react";
import { Input, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import axios from "../../config/axios";
import "antd/dist/antd.css";
import "./SignUp.scss";

interface ISignUpState {
  account: string;
  password: string;
  passwordConformation: string;
}

class SignUp extends React.Component<any, ISignUpState> {
  constructor(props) {
    super(props);
    this.state = {
      account: "",
      password: "",
      passwordConformation: ""
    };
  }

  onChangeAccount = e => {
    this.setState({ account: e.target.value });
  };

  onChangePassword = e => {
    this.setState({ password: e.target.value });
  };

  onChangePasswordConformation = e => {
    this.setState({ passwordConformation: e.target.value });
  };

  submit = async () => {
    const { account, password, passwordConformation } = this.state;
    try {
      await axios.post("sign_up/user", {
        account,
        password,
        password_confirmation: passwordConformation
      });
      this.props.history.push("/");
    } catch (e) {
      throw new Error(e);
    }
  };

  linkTo = () => {
    this.props.history.push("login");
  };
  public render() {
    const { account, password, passwordConformation } = this.state;
    return (
      <div className="SignUp" id="SignUp">
        <h1>番茄闹钟用户注册</h1>

        <Input
          placeholder="请输入你的用户名"
          prefix={<UserOutlined />}
          value={account}
          onChange={this.onChangeAccount}
        />

        <Input.Password
          value={password}
          placeholder="请输入密码"
          onChange={this.onChangePassword}
        />

        <Input.Password
          value={passwordConformation}
          placeholder="请确认密码"
          onChange={this.onChangePasswordConformation}
        />

        <Button type="primary" className="signUpButton" onClick={this.submit}>
          注册
        </Button>
        <p>
          如果你有账号，请立即 <Link to="/login">登录</Link>
        </p>
      </div>
    );
  }
}

export default SignUp;
