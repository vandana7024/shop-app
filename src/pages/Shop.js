import React from "react";
import {
  Button,
  Form,
  Input,
  Select,
  Typography,
  DatePicker,
  message,
} from "antd";

function Shop() {
  const { Title } = Typography;
  return (
    <div className="w-full h-screen bg- bg-gray-200 flex justify-center items-center rounded-xl shadow-2xl shadow-blue-400">
      <div className="w-full sm:max-w-2xl bg-white p-5">
        <div className="flex justify-start items-start ">
          <Title
            level={3}
            style={{
              marginTop: "25px",
              color: "#582949",
            }}
          >
            Create Shop
          </Title>
        </div>
        <div>
          <Form layout="vertical">
            <div>
              <div className="flex flex-col sm:flex-row justify-evenly sm:mt-5 flex-wrap">
                <Form.Item
                  rules={[
                    { required: true, message: "Please insert your name" },
                  ]}
                  className="flex-1"
                  label="Name"
                  name="shopName"
                >
                  <Input placeholder="Enter User Name" />
                </Form.Item>
              </div>
              <div className="flex flex-col sm:flex-row justify-around flex-wrap">
                <Form.Item
                  label=" Shop Category!"
                  rules={[
                    {
                      required: true,
                      message: "Please Select Shop Category!",
                    },
                  ]}
                  className="flex-1 "
                  style={{ maxWidth: "341px", margin: "0px" }}
                  name="category"
                >
                  <Select
                    className="flex-1"
                    // style={{
                    //   border: "1px solid #d9d9d9",
                    //   borderRadius: "5px",
                    //   padding: "3px",
                    // }}
                  >
                    <Select.Option value="Grocery">Grocery</Select.Option>
                    <Select.Option value="Butcher">Butcher</Select.Option>
                    <Select.Option value="Baker">Baker</Select.Option>
                    <Select.Option value="Chemist">Chemist</Select.Option>
                    <Select.Option value="Stationery shop">
                      Stationery shop
                    </Select.Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  label="Shop Address"
                  rules={[
                    {
                      required: true,
                      message: "Please Select Shop Address!",
                    },
                  ]}
                  className="flex-1 "
                  style={{ maxWidth: "341px", margin: "0px" }}
                  name="address"
                >
                  <Select
                    className="flex-1"
                    // style={{
                    //   border: "1px solid #d9d9d9",
                    //   borderRadius: "5px",
                    //   padding: "3px",
                    // }}
                  >
                    <Select.Option value="Thane">Thane</Select.Option>
                    <Select.Option value="Pune">Pune</Select.Option>
                    <Select.Option value="Mumbai Suburban">
                      Mumbai Suburban
                    </Select.Option>
                    <Select.Option value="Nashikr">Nashik</Select.Option>
                    <Select.Option value="Nagpur">Nagpur</Select.Option>
                    <Select.Option value="Ahmednagar">Ahmednagar</Select.Option>
                    <Select.Option value="Solapur">Solapur</Select.Option>
                  </Select>
                </Form.Item>
              </div>
              <div className="flex flex-col sm:flex-row justify-around flex-wrap">
                <Form.Item
                  name="openingDate"
                  label="Opening Time"
                  rules={[{ required: true }]}
                  style={{
                    display: "inline-block",
                    width: "calc(50% - 8px)",
                    margin: "0px",
                    padding: "0px",
                  }}
                >
                  <DatePicker />
                </Form.Item>
                <Form.Item
                  name="closingDate"
                  label="Closing Time"
                  rules={[{ required: true }]}
                  style={{
                    display: "inline-block",
                    width: "calc(50% - 8px)",
                    margin: "0 8px",
                  }}
                >
                  <DatePicker />
                </Form.Item>
              </div>
              <div>
                <Form.Item
                  className="mt-10 float-right  "
                  style={{ margin: "32px" }}
                >
                  <Button
                    onClick={() => {}}
                    size="large"
                    className="text-primary mr-2"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="primary"
                    size="large"
                    htmlType="submit"
                    style={{ backgroundColor: "blue" }}
                  >
                    Create Now
                  </Button>
                </Form.Item>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Shop;
