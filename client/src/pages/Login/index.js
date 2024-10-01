import React from "react";
import { Button, Input, Form, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../api/users";

const Login = () => {
  const navigate = useNavigate();
  const onFinish = async (value) => {
    console.log(value);
    try {
      const response = await loginUser(value);
      if (response.success) {
        message.success(response.message);
        navigate("/");
      } else {
        message.error(response.message);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <main className="App-header">
        <h1>Login to Book my Show</h1>
        <section className="mw-500 text-center px-3">
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              label="Email"
              htmlFor="email"
              name="email"
              className="d-block"
              rules={[
                { required: true, message: "email is required" },
                { type: "email", message: "please enter a valid email" },
              ]}
            >
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
              />
            </Form.Item>
            <Form.Item
              label="Password"
              htmlFor="Password"
              name="Password"
              className="d-block"
              rules={[{ required: true, message: "Password is required" }]}
            >
              <Input
                type="Password"
                id="Password"
                name="Password"
                placeholder="Enter your Password"
              />
            </Form.Item>
            <Form.Item className="d-block">
              <Button
                type="primary"
                htmlType="submit"
                block
                style={{ fontSize: "1rem", fontWeight: "600" }}
              >
                Login
              </Button>
            </Form.Item>
          </Form>
          <div>
            <p>
              {" "}
              New User ? <Link to="/register">Register Here</Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
