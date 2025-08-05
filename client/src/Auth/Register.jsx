import React from "react";
import { Alert, Card, Flex, Typography, Form, Input, Button, Spin } from "antd";
import { Link } from "react-router-dom";
import loginImage from "../assets/register/loginImage.png";
import useSignup from "../hooks/useSignup";

const Register = () => {
  const { loading, error, registerUser } = useSignup();
  const handleRegister = (values) => {
    registerUser(values);
  };
  return (
    <Card className="form-container">
      <Flex gap="large" align="center">
        {/* form */}
        <Flex vertical flex={1}>
          <Typography.Title level={3} strong className="title">
            Create an account
          </Typography.Title>
          <Typography.Text type="secondary" strong className="slogan">
            Join fro exclusive access!
          </Typography.Text>
          <Form layout="vertical" onFinish={handleRegister} autoComplete="off">
            <Form.Item
              label="Full Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "please input your full name!",
                },
              ]}
            >
              <Input placeholder="Enter your full name" />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "please input your email!",
                },
                {
                  type: "email",
                  mesage: "the input is not valid Email!",
                },
              ]}
            >
              <Input size="large" placeholder="Enter your email" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "please input your password!",
                },
              ]}
            >
              <Input.Password size="large" placeholder="Enter your password" />
            </Form.Item>
            <Form.Item
              label="Confirm Password"
              name="passwordConfirm"
              rules={[
                {
                  required: true,
                  message: "please input your Confirm password!",
                },
              ]}
            >
              <Input.Password
                size="large"
                placeholder="Re-Enter your password"
              />
            </Form.Item>

            {error && (
              <Alert
                description={error}
                type="error"
                showIcon
                closable
                className="alert"
              />
            )}
            <Form.Item>
              <Button
                type={`${loading ? "" : "primary"}`}
                htmlType="submit"
                size="large"
                className="btn"
              >
                {loading ? <Spin /> : "Create Account"}
              </Button>
            </Form.Item>
            <Form.Item>
              <Link to="/login">
                <Button size="large" className="btn">
                  Sign In
                </Button>
              </Link>
            </Form.Item>
          </Form>
        </Flex>

        {/* image */}
        <Flex flex={1}>
          <img src={loginImage} className="auth-image" />
        </Flex>
      </Flex>
    </Card>
  );
};

export default Register;
