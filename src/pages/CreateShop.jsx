import React from "react";
import {
  Button,
  Form,
  Input,
  TimePicker,
  Select,
  Typography,
  DatePicker,
  message,
} from "antd";
import moment from "moment";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { createShop } from "../redux/slice/shopslice";
import { useNavigate } from "react-router-dom";

function CreateShop() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { Title } = Typography;
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const { _d: _openingDate } = data.openingDate;
    const { _d: _closingDate } = data.closingDate;
    const newShop = {
      id: uuidv4(),
      shopName: data.shopName,
      address: data.address,
      category: data.category,
      openingDate: _openingDate,
      closingDate: _closingDate,
      createdAt: new Date(),
    };
    console.log(newShop);
    dispatch(createShop(newShop));
    message.success("Shop created successfully");
    setTimeout(() => {
      navigate("/");
    }, 300);
  };

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
              <Form layout="vertical" onFinish={onSubmit} form={form}>
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
                      style={{
                        border: "1px solid #d9d9d9",
                        borderRadius: "5px",
                        padding: "3px",
                      }}
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
                      style={{
                        border: "1px solid #d9d9d9",
                        borderRadius: "5px",
                        padding: "3px",
                      }}
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
                    name="openingDate"
                    label="Opening Time"
                    rules={[{ required: true }]}
                    style={{
                      display: "inline-block",
                      width: "calc(50% - 8px)",
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
                      onClick={() => {
                        form.resetFields();
                        navigate("/");
                      }}
                      size="large"
                      className="text-primary mr-2"
                    >
                      Cancel
                    </Button>
                    <Button type="primary" size="large" htmlType="submit">
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
