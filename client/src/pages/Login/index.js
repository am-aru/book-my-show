import React from 'react'
import { Button , Input , Form} from 'antd';
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
    <main className='App-header'>
        <h1>Login to Book my Show</h1>
        <section className='mw-500 text-center px-3'>
       <form layout="vertical">
        <Form.Item label="Email" htmlFor='email' name='email' className='d-block'
        rules={[{ required:true, message:"email is required" }]} >
         <Input type='email' id='email' name='email' placeholder='Enter your email'/>
        
        </Form.Item>

       </form>
        </section>
    </main>
    </>
  )
}

export default Login