import React, { useState } from "react";
import {
  Breadcrumb,
  FloatButton,
  Layout,
  Menu,
  Modal,
  message,
  theme,
} from "antd";
import SubMenu from "antd/es/menu/SubMenu";
import { Link, Route, Routes } from "react-router-dom";
import NewMeetingsComponent from "../NewRecordWithPayload/NewRecordWithPayload";
import MeetingsComponent from "../Meetings/MeetingsComponent";
import DashboardComponent from "../Dashboard/DashboardComponent";
import { LogoutOutlined } from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;

const HomeComponent = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  // const [contentForRouting, setContentForRouting] = useState(false); // manages content style for management and applications
  const [parentContainer, setParentContainer] = useState("Dashboard"); // set parent container name in breadcrumb
  const [childContainer, setChildContainer] = useState(); // set child container name in breadcrumb
  const [logoutModalOpen, setLogoutModalOpen] = useState(false); // stores logout confirmation modal open state

  // method to handle logout
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    message.success("Logged out successfully");

    setTimeout(() => {
      window.location.href = "";
    }, 1500);
  };

  return (
    <div>
      <Layout>
        {/* logout button  */}
        <FloatButton
          style={{ float: "right", top: 12 }}
          icon={<LogoutOutlined type="danger" />}
          onClick={() => setLogoutModalOpen(true)}
        />

        <Header
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="demo-logo" />
          <h2 style={{ color: "white" }}>
            AMRAVATI DISTRICT CENTRAL CO-OPERATIVE BANK
          </h2>
          {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item
              key="1"
              onClick={() => {
                setParentContainer("Management");
                setChildContainer();
                setContentForRouting(false);
              }}
            >
              <Link to="">Management</Link>
            </Menu.Item>
            <SubMenu title="New Applications" theme="light" key="sub0">
              <Menu.Item
                key="01"
                onClick={() => {
                  setParentContainer("Applications");
                  setChildContainer("Account Opening Applications");
                  // setContentForRouting(true);
                }}
              >
                <Link to="accountOpeningApplications">
                  Account Opening Applications
                </Link>
              </Menu.Item>
              <Menu.Item
                key="02"
                onClick={() => {
                  setParentContainer("Applications");
                  setChildContainer("ATM Card Applications");
                  setContentForRouting(true);
                }}
              >
                <Link to="atmCardApplications">ATM Card Applications</Link>
              </Menu.Item>
              <Menu.Item
                key="03"
                onClick={() => {
                  setParentContainer("Applications");
                  setChildContainer("Passbook Applications");
                  setContentForRouting(true);
                }}
              >
                <Link to="passbookApplications">Passbook Applications</Link>
              </Menu.Item>
              <Menu.Item
                key="04"
                onClick={() => {
                  setParentContainer("Applications");
                  setChildContainer("ChequeBook Applications");
                  setContentForRouting(true);
                }}
              >
                <Link to="chequeBookApplications">ChequeBook Applications</Link>
              </Menu.Item>
              <Menu.Item
                key="05"
                onClick={() => {
                  setParentContainer("Applications");
                  setChildContainer("Loan Applications");
                  setContentForRouting(true);
                }}
              >
                <Link to="loanApplications">Loan Applications</Link>
              </Menu.Item>
            </SubMenu>
          </Menu> */}
        </Header>
        <Content
          style={{
            padding: "0px 35px",
            marginBottom: "25px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>{parentContainer}</Breadcrumb.Item>
            <Breadcrumb.Item>{childContainer}</Breadcrumb.Item>
          </Breadcrumb>
          {/* {!contentForRouting ? ( */}
          <Layout
            style={{
              // padding: "10px 0",
              background: colorBgContainer,
            }}
          >
            <Sider
              style={{
                background: colorBgContainer,
              }}
              width={265}
            >
              <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1", "sub2"]}
                style={{
                  height: "100%",
                  position: "sticky",
                }}
              >
                <Menu.Item
                  key="1"
                  onClick={() => {
                    setParentContainer("Dashboard");
                    setChildContainer();
                  }}
                >
                  <Link to="/">Dashboard</Link>
                </Menu.Item>
                <SubMenu title="Meeting Management" key="sub1">
                  <Menu.Item
                    key="11"
                    onClick={() => {
                      setParentContainer("Meeting Management");
                      setChildContainer("New Meeting");
                    }}
                  >
                    <Link to="/newMeeting">New Meeting</Link>
                  </Menu.Item>
                  <Menu.Item
                    key="12"
                    onClick={() => {
                      setParentContainer("Meeting Management");
                      setChildContainer("All Meetings");
                    }}
                  >
                    <Link to="allMeetings">All Meetings</Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu title="Document Management" key="sub2">
                  <Menu.Item
                    key="21"
                    onClick={() => {
                      setParentContainer("Document Management");
                      setChildContainer("New Document");
                    }}
                  >
                    <Link to="newDocument">New Document</Link>
                  </Menu.Item>
                  <Menu.Item
                    key="22"
                    onClick={() => {
                      setParentContainer("Document Management");
                      setChildContainer("Custom Outward Document");
                    }}
                  >
                    <Link to="customDocument">Custom Outward Document</Link>
                  </Menu.Item>
                  <Menu.Item
                    key="23"
                    onClick={() => {
                      setParentContainer("Document Management");
                      setChildContainer("All Documents");
                    }}
                  >
                    <Link to="allDocuments">All Documents</Link>
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content
              style={{
                padding: "15px 20px",
                // paddingTop:"15px",
                // paddingBottom: "0px",
                // paddingLeft: "20px",
                // minHeight: 280,
                height: "82vh",
                overflowY: "scroll",
              }}
            >
              <Routes>
                <Route path="" element={<DashboardComponent />} />
                <Route path="newRecord" element={<NewMeetingsComponent />} />
                <Route path="allRecords" element={<MeetingsComponent />} />
              </Routes>
            </Content>
          </Layout>
          {/* ) : (
            <Layout
              style={{
                padding: "24px 0",
                background: colorBgContainer,
              }}
            >
              <Content>
                <Routes>
                  <Route
                    path="accountOpeningApplications"
                    element={<AccountOpeningApplicationsComponent />}
                  />
                  <Route
                    path="atmCardApplications"
                    element={<ATMCardApplicationsComponent />}
                  />
                  <Route
                    path="passbookApplications"
                    element={<PassbookApplicationsComponent />}
                  />
                  <Route
                    path="chequeBookApplications"
                    element={<ChequeBookApplicationsComponent />}
                  />
                  <Route
                    path="loanApplications"
                    element={<LoanApplicationsComponent />}
                  />
                </Routes>
              </Content>
            </Layout>
          )} */}
        </Content>
        <Footer
          style={{
            textAlign: "center",
            position: "fixed",
            bottom: 0,
            width: "100%",
          }}
        >
          POTENS IT SERVICES AND CONSULTANCY PVT. LTD.
        </Footer>
      </Layout>

      {/* logout confirmation modal */}
      <Modal
        title="Logout Confirmation"
        open={logoutModalOpen}
        onOk={handleLogout}
        onCancel={() => setLogoutModalOpen(false)}
        okButtonProps={{ type: "primary", danger: true }}
        style={{ marginTop: "10vh" }}
      >
        Are you sure you want to logout?
      </Modal>
    </div>
  );
};

export default HomeComponent;
