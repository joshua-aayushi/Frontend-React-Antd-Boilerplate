import {
  // Card,
  // Col,
  // Empty,
  Modal,
  message,
} from "antd";
import React, { useEffect, useState } from "react";
import { getAllRecords } from "../../APICallsContainer/CommonAPI/GetRecordsAPI";
import "./DashboardComponent.css";
import { GET_ALL_RECORDS_API_CONSTANT } from "../../constants/APIConstants";

const DashboardComponent = () => {
  // const [assignedTasks, setAssignedTasks] = useState([]); // stores assigned tasks
  // const [currentRecord, setCurrentRecord] = useState(); // stores current task
  const [detailsModalOpen, setDetailsModalOpen] = useState(false); // store  details modal state

  useEffect(() => {
    getRecords(); // fetch assigned tasks on component mount
    // eslint-disable-next-line
  }, []);

  // method to fetch records
  const getRecords = async () => {
    let response = await getAllRecords(GET_ALL_RECORDS_API_CONSTANT);
    console.log("records", response);

    if (response.status) {
    } else {
      message.error(response.message);
    }
  };

  return (
    <div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* <Col span={6}>
          <Card
            title={<b style={{ color: "#0066FF" }}>CREATED BY YOU</b>}
            className="tasks-card"
          >
            {createdTasks.length > 0 ? (
              createdTasks?.map((task) => (
                <div
                  className="tasks-item-container"
                  onClick={() => {
                    setCurrentRecord(task);
                    setTaskDetailsModalOpen(true);
                  }}
                >
                  {task.task_title}
                  <div style={{ float: "right" }}>
                    {task.priority === "HIGH" ? (
                      <ArrowUpOutlined style={{ color: "red" }} />
                    ) : task.priority === "MEDIUM" ? (
                      <ArrowUpOutlined style={{ color: "orange" }} />
                    ) : (
                      <ArrowDownOutlined style={{ color: "green" }} />
                    )}
                  </div>
                </div>
              ))
            ) : (
              <Empty />
            )}
          </Card>
        </Col>
        <Col span={6}>
          <Card
            title={<b style={{ color: "#0066FF" }}>ASSIGNED Tasks</b>}
            className="tasks-card"
          >
            {assignedTasks.length > 0 ? (
              assignedTasks?.map((task) => (
                <div
                  className="tasks-item-container"
                  onClick={() => {
                    setCurrentRecord(task);
                    setTaskDetailsModalOpen(true);
                  }}
                >
                  {task.task_title}
                  <div style={{ float: "right" }}>
                    {task.priority === "HIGH" ? (
                      <ArrowUpOutlined style={{ color: "red" }} />
                    ) : task.priority === "MEDIUM" ? (
                      <ArrowUpOutlined style={{ color: "orange" }} />
                    ) : (
                      <ArrowDownOutlined style={{ color: "green" }} />
                    )}
                  </div>
                </div>
              ))
            ) : (
              <Empty />
            )}
          </Card>
        </Col>
        <Col span={6}>
          <Card
            title={<b style={{ color: "#0066FF" }}>IN PROGRESS Tasks</b>}
            className="tasks-card"
          >
            {inProgressTasks.length > 0 ? (
              inProgressTasks?.map((task) => (
                <div
                  className="tasks-item-container"
                  onClick={() => {
                    setCurrentRecord(task);
                    setTaskDetailsModalOpen(true);
                  }}
                >
                  {task.task_title}
                  <div style={{ float: "right" }}>
                    {task.priority === "HIGH" ? (
                      <ArrowUpOutlined style={{ color: "red" }} />
                    ) : task.priority === "MEDIUM" ? (
                      <ArrowUpOutlined style={{ color: "orange" }} />
                    ) : (
                      <ArrowDownOutlined style={{ color: "green" }} />
                    )}
                  </div>
                </div>
              ))
            ) : (
              <Empty />
            )}
          </Card>
        </Col>
        <Col span={5}>
          <Card
            title={<b style={{ color: "#0066FF" }}>COMPLETED Tasks</b>}
            className="tasks-card"
          >
            {completedTasks?.length > 0 ? (
              completedTasks?.map((task) => (
                <div
                  className="tasks-item-container"
                  onClick={() => {
                    setCurrentRecord(task);
                    setTaskDetailsModalOpen(true);
                  }}
                >
                  {task.task_title}
                  <div style={{ float: "right" }}>
                    {task.priority === "HIGH" ? (
                      <ArrowUpOutlined style={{ color: "red" }} />
                    ) : task.priority === "MEDIUM" ? (
                      <ArrowUpOutlined style={{ color: "orange" }} />
                    ) : (
                      <ArrowDownOutlined style={{ color: "green" }} />
                    )}
                  </div>
                </div>
              ))
            ) : (
              <Empty />
            )}
          </Card>
        </Col> */}
      </div>

      {/* task details modal  */}
      <Modal
        open={detailsModalOpen}
        onCancel={() => setDetailsModalOpen(false)}
        width={"1050px"}
        footer={null}
        style={{ marginTop: "-25px" }}
      >
        {/* <TaskDetailsItemComponent task={currentRecord} /> */}
      </Modal>
    </div>
  );
};

export default DashboardComponent;
