import React, { useState } from "react";
import {
  Button,
  DatePicker,
  Form,
  Input,
  Radio,
  Select,
  Spin,
  Upload,
  message,
} from "antd";
import TextArea from "antd/lib/input/TextArea";
import { InboxOutlined } from "@ant-design/icons";
import { newRecord } from "../../APICallsContainer/ComponentAPI/ComponentAPI";

const NewRecordWithFormData = () => {
  const [isDataLoading, setIsDataLoading] = useState(false);

  const onFinish = async (values) => {
    console.log("Success:", values);

    setIsDataLoading(true);

    const formData = new FormData();

    formData.append("data1", values.data1);
    formData.append("data2", values.data2);
    formData.append("date", values.date?.format("YYYY-MM-DD"));
    formData.append(`file`, values.document_file.file);
    formData.append(
      "created_by",
      parseInt(sessionStorage.getItem("login_user_id"))
    );

    // api to create new record
    let response = await newRecord(formData);
    console.log("new document", response);

    if (response.status) {
      message.success(response.message);

      // setTimeout(() => {
      //   window.location.href = "/allRecords";
      // }, 1500);
    } else {
      message.error(response.message);
    }

    setIsDataLoading(false);
  };

  return (
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
          <Input />
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
          <DatePicker style={{ width: "300px" }} />
        </Form.Item>

        <Form.Item
          label="label 2"
          name="name 2"
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

        <Form.Item
          label="label 3"
          name="name 3"
          rules={[
            {
              // required: true,
              pattern: "[6789][0-9]{9}$",
              message: "enter valid number",
            },
          ]}
        >
          <Input maxLength={10} />
        </Form.Item>

        <Form.Item
          label="File"
          name="document_file"
          rules={[
            {
              required: true,
              message: "This field is required!",
            },
          ]}
        >
          <Upload.Dragger
            beforeUpload={(file) => {
              const isImage =
                file.type === "image/jpeg" ||
                file.type === "image/jpg" ||
                file.type === "image/png" ||
                file.type === "application/pdf";
              if (!isImage) {
                message.error(`${file.name} is not an image or a document`);
                return Upload.LIST_IGNORE;
              } else return false;
            }}
            maxCount={1}
          >
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
          </Upload.Dragger>
        </Form.Item>

        <Form.Item label="label 4" name="name 4">
          <TextArea rows={3} />
        </Form.Item>

        <Form.Item
          label="label 5"
          name="name 5"
          rules={[
            {
              required: true,
              message: "This field is required!",
            },
          ]}
        >
          <Radio.Group
            options={[
              { label: "1", value: "1" },
              { label: "2", value: "2" },
            ]}
            optionType="button"
          />
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
  );
};

export default NewRecordWithFormData;
