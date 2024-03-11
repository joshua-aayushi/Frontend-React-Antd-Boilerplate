import React, { useState } from "react";
import {
  Form,
  Button,
  DatePicker,
  TimePicker,
  Select,
  Spin,
  message,
} from "antd";
import TextArea from "antd/lib/input/TextArea";
import { newRecord } from "../../APICallsContainer/ComponentAPI/ComponentAPI";

const NewComponentWithPayload = () => {
  const [isDataLoading, setIsDataLoading] = useState(false);

  // handles the submission of the form
  const onFinish = async (values) => {
    console.log("Success", values);

    setIsDataLoading(true);

    // creating payload
    const payload = {
      data: values.data,
      data2: values.data2,
      data3: values.data3,
      data4: values.data4,
      created_by: parseInt(sessionStorage.getItem("login_user_id")),
    };

    // api to create a new component record
    let response = await newRecord(payload);
    console.log("new component", response);

    if (response.status) {
      message.success(response.message);

      setTimeout(() => {
        window.location.href = "/allRecords";
      }, 1500);
    } else {
      message.error(response.message);
    }

    setIsDataLoading(false);
  };

  return (
    <div>
      <Spin spinning={isDataLoading}>
        <Form
          name="basic"
          labelCol={{
            span: 7,
          }}
          wrapperCol={{
            span: 10,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          style={{ margin: "15px 0" }}
        >
          <Form.Item
            label="label 1"
            name="name 1"
            rules={[
              {
                required: true,
                message: "This field is required!",
              },
            ]}
          >
            <TextArea rows={2} />
          </Form.Item>

          <Form.Item
            label="Date"
            name="date"
            rules={[
              {
                required: true,
                message: "This field is required!",
              },
            ]}
          >
            <DatePicker
              style={{
                width: "100%",
              }}
            />
          </Form.Item>

          <Form.Item
            label="Time"
            name="time"
            rules={[
              {
                required: true,
                message: "This field is required!",
              },
            ]}
          >
            <TimePicker use12Hours format="h:mm A" style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item label="label 2" name="name 2">
            <TextArea rows={2} />
          </Form.Item>

          <Form.Item
            label="select"
            name="select"
            rules={[
              {
                required: true,
                message: "This field is required!",
              },
            ]}
          >
            <Select placeholder="Select options">
              <Select.Option value="1">1</Select.Option>
              <Select.Option value="2">2</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="label 3" name="name 3">
            <TextArea rows={3} />
          </Form.Item>

          <Form.Item label="label 4" name="name 4">
            <TextArea rows={3} />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 7,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Spin>
    </div>
  );
};

export default NewComponentWithPayload;
