import React, { useState } from "react";
import {
  LockOutlined,
  //  LockTwoTone,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Card, Form, Input, message } from "antd";
import { jwtDecode } from "jwt-decode";
import logo from "../../assets/images/logo.jpeg";

import "./LoginComponent.css";
import {
  generateOTP,
  verifyLogin,
} from "../../APICallsContainer/ComponentAPI/LoginAPI";

const LoginComponent = () => {
  const [otpSent, setOtpSent] = useState(false); // stores if otp sent

  // handle form submit
  const onFinish = async (values) => {
    // console.log("Received values of form: ", values);

    if (otpSent) {
      let payload = {
        mobile_number: values.mobileNumber,
        otp: values.password,
      };

      const response = await verifyLogin(payload);
      // console.log("verify response:", response);

      if (response.status) {
        message.success(response.message);

        // decoding token
        const token = jwtDecode(response.token);

        sessionStorage.setItem("token", response.token);
        sessionStorage.setItem("login_user_role", token.role);
        sessionStorage.setItem("login_user_id", token.userId); // will be used to fill in created_by

        setTimeout(() => {
          window.location.href = "/"; // to dashboard
        }, 1500);
      } else {
        message.error(response.message);
      }
    } else {
      let payload = {
        mobile_number: values.mobileNumber,
      };

      const response = await generateOTP(payload);
      // console.log("generate otp response:", response);

      if (response.status) {
        setOtpSent(true);
        message.success(response.message);
      } else {
        message.error(response.message);
      }
    }
  };

  return (
    <div>
      <Card
        hoverable
        style={{
          textAlign: "center",
        }}
      >
        {/* <LockTwoTone
          twoToneColor={"red"}
          style={{ fontSize: "30px", marginBottom: "50px", marginTop: "20px" }}
        /> */}

        <img
          src={logo}
          alt="web-app-logo"
          style={{ marginBottom: "15px", height: "150px" }}
        />
        <br />
        <b>WEB NAME</b>

        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          style={{ marginTop: "45px", width: "100%" }}
        >
          <Form.Item
            name="mobileNumber"
            rules={[
              {
                required: true,
                message: "Please input Mobile Number!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Mobile Number"
              disabled={otpSent}
              autoFocus
            />
          </Form.Item>

          {otpSent && (
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input OTP!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="OTP"
                autoFocus
              />
            </Form.Item>
          )}

          <Form.Item>
            <Button
              block
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              {otpSent ? "Log in" : "Send OTP"}
            </Button>
          </Form.Item>
          <Form.Item>
            <a
              className="login-form-forgot"
              href="##"
              style={{ float: "right" }}
            >
              Resend OTP
            </a>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default LoginComponent;
