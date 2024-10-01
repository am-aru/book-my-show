import React from "react";
import { Button, Input, Form, message } from "antd";
import { Link } from "react-router-dom";
import { registerUser } from "../../api/users";

const Register = () => {
  const onFinish = async (values) => {
    try{
        const response = await registerUser(values);
    if(response.success){
       message.success(response.message);
    }else{
       message.error(response.message);
    }

    }catch(err){
      console.log(err);
      message.error("something went wrong");
    }
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <main className="App-header">
        <h1>Register to Book my Show</h1>
        <section className="mw-500 text-center px-3">
          <Form layout="vertical" onFinish={ onFinish } onFinishFailed={onFinishFailed}>
          <Form.Item
              label="Name"
              htmlFor="Name"
              name="Name"
              className="d-block"
              rules={[{ required: true, message: "Name is required" }]}
            >
              <Input
                type="Name"
                id="Name"
                name="Name"
                placeholder="Enter your Name"
              />
            </Form.Item>
            <Form.Item
              label="Email"
              htmlFor="email"
              name="email"
              className="d-block"
              rules={[{ required: true, message: "email is required" },
                { type: 'email' , message: "please enter a valid email" }
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
                placeholder="Set Password"
              />
            </Form.Item>
            <Form.Item className="d-block">
               <Button type="primary" htmlType="submit" block style={{fontSize:"1rem" , fontWeight:"600"}}>
                 Register
               </Button>
            </Form.Item>
          </Form>
          <div>
            <p>
                {" "}
                Already a User ? <Link to="/login">Login Here</Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Register;