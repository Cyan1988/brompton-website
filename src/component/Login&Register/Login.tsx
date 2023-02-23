import React from "react";
import {
  UserOutlined,
} from "@ant-design/icons";
import { Input } from "antd";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="font-sans space-y-3 mx-auto">
      <div className="text-[1.75rem] font-bold">Log in your account</div>
      <div>Quickly add a new build to an existing account.</div>
      <div>
        <Input
          size="large"
          placeholder="E-mail"
          prefix={<UserOutlined />}
          className="max-w-[25rem]"
        />
      </div>
      <div>
        <Input.Password
          size="large"
          placeholder="input password"
          className="max-w-[25rem]"
        />
      </div>
      <div className="underline">
        <Link to="">Forgot your password</Link>
      </div>
      <div>
        <button className="border-solid bg-gray-900 text-slate-100 border-gray-900 border-2 rounded-md px-2 py-1">
          SIGN IN
        </button>
      </div>
    </div>
  );
}

export default Login;
