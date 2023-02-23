import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="font-sans space-y-3 mx-auto">
      <div className="text-[1.75rem] font-bold">No account? </div>
      <div>
        Create a new account and save your Brompton build. It doesn't take long.
      </div>
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
      <div className="text-sm">
        <div>
          <input type="checkbox" className="mr-1" />I have read the{" "}
          <span className="underline">
            <Link to="">privacy</Link>
          </span>{" "}
          statement and accept the terms
        </div>
        <div>
          <input type="checkbox" className="mr-1" />
          Yes, please send me special offers, news and updates from Brompton
        </div>
      </div>
      <div>
        <button className="border-solid bg-slate-100 text-gray-900 border-gray-900 border-2 rounded-md px-2 py-1 mr-3">
          <Link to="/">BACK</Link>
        </button>
        <button className="border-solid bg-gray-900 text-slate-100 border-gray-900 border-2 rounded-md px-2 py-1">
          SIGN UP
        </button>
      </div>
    </div>
  );
}

export default Register;
