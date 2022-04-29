import React, { useState } from "react";
import { Button, Form, Input, TimePicker, Select, Typography } from "antd";
import moment from "moment";

function CreateShop() {
  const { Title } = Typography;
  const [shopAddress, setShopAddress] = useState("");
  const [shopCategory, setShopCategory] = useState("");

  function onOpeningTime(time, timeString) {
    console.log("time", time, timeString);
  }
  return (
    <div>
      <center>
        <div className="pb-4 pt-3 bg-white  shadow-gray max-w-4xl sm:m-9 h-screen shadow-2xl rounded-lg p-3 sm:px-28 ">
          <div className=" ">
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
            <hr className="border border-gray-50 shadow-lg  w-full" />

            <div>
              <Form layout="vertical">
                <div className="flex flex-col sm:flex-row justify-evenly sm:mt-5 flex-wrap">
                  <Form.Item
                    rules={[
                      { required: true, message: "Please insert your name" },
                    ]}
                    className="flex-1"
                    label="Name"
                    name="name"
                  >
                    <Input placeholder="Enter User Name" />
                  </Form.Item>

                  <Form.Item
                    // write a rule  for mobile number validation
                    rules={[
                      {
                        required: true,
                        message: "Please insert your mobile number",
                      },
                    ]}
                    label="Mobile Number"
                    name="mobile"
                    style={{ margin: "0px" }}
                    // style={{ maxWidth: "450px" }}
                    className=" flex-1"
                  >
                    <Input placeholder="Enter User Mobile Number" />
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
                    name="shopCategory"
                  >
                    <Select
                      className="flex-1"
                      style={{
                        border: "1px solid #d9d9d9",
                        borderRadius: "5px",
                        padding: "3px",
                      }}
                      name="shopCategory"
                      onChange={(value) => setShopCategory(value)}
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
                    name="shopAddress"
                    onChange={(value) => setShopAddress(value)}
                  >
                    <Select
                      className="flex-1"
                      style={{
                        border: "1px solid #d9d9d9",
                        borderRadius: "5px",
                        padding: "3px",
                      }}
                      on
                    >
                      <Select.Option value="Thane">Thane</Select.Option>
                      <Select.Option value="Pune">Pune</Select.Option>
                      <Select.Option value="Mumbai Suburban">
                        Mumbai Suburban
                      </Select.Option>
                      <Select.Option value="Nashikr">Nashik</Select.Option>
                      <Select.Option value="Nagpur">Nagpur</Select.Option>
                      <Select.Option value="Ahmednagar">
                        Ahmednagar
                      </Select.Option>
                      <Select.Option value="Solapur">Solapur</Select.Option>
                    </Select>
                  </Form.Item>
                </div>

                <div className="flex flex-col sm:flex-row justify-around flex-wrap">
                  <Form.Item
                    name="year"
                    label="Opening Time"
                    rules={[{ required: true }]}
                    style={{
                      display: "inline-block",
                      width: "calc(50% - 8px)",
                    }}
                  >
                    <TimePicker
                      onChange={onOpeningTime}
                      defaultOpenValue={moment("00:00:00", "HH:mm:ss")}
                    />
                  </Form.Item>
                  <Form.Item
                    name="month"
                    label="Closing Time"
                    rules={[{ required: true }]}
                    style={{
                      display: "inline-block",
                      width: "calc(50% - 8px)",
                      margin: "0 8px",
                    }}
                  >
                    <TimePicker
                      defaultOpenValue={moment("00:00:00", "HH:mm:ss")}
                    />
                  </Form.Item>
                </div>
                <div>
                  <Form.Item
                    className="mt-10 float-right  "
                    style={{ margin: "32px" }}
                  >
                    <Button
                      size="large"
                      htmlType="submit  "
                      className="text-primary mr-2"
                    >
                      Cancel
                    </Button>
                    <Button type="primary" size="large" htmlType="submit ">
                      Create Now
                    </Button>
                  </Form.Item>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
}

export default CreateShop;
