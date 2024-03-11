import { Table, message } from "antd";
import React, { useEffect, useState } from "react";
import { getAllRecords } from "../../APICallsContainer/CommonAPI/GetRecordsAPI";
import { GET_ALL_RECORDS_API_CONSTANT } from "../../constants/APIConstants";

const MeetingsComponent = () => {
  const [data, setData] = useState(); // stores component data records

  useEffect(() => {
    getRecords(); // fetch records on component mount
  }, []);

  // method to get meeting records
  const getRecords = async () => {
    const response = await getAllRecords(GET_ALL_RECORDS_API_CONSTANT);
    console.log("records", response);

    if (response.status) {
      setData(response.payload?.data);
    } else {
      message.error(response.message);
    }
  };

  const columns = [
    {
      title: "Column 1",
      dataIndex: "column1",
      key: "column1",
    },
    {
      title: "Column 2",
      dataIndex: "column2",
      key: "column2",
    },
    {
      title: "Column 3",
      dataIndex: "column3",
      key: "column3",
    },
    
  ];
  return (
    <div>
      <Table dataSource={data} columns={columns} />
    </div>
  );
};

export default MeetingsComponent;
