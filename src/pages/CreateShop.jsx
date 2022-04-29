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
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { createShop } from "../redux/slice/shopslice";
import { useNavigate } from "react-router-dom";
import moment from "moment";

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

    dispatch(createShop(newShop));
    message.success("Shop created successfully");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div>
      <center>
        <div className=" w-full h-screen  bg-gray-200 flex justify-center items-center rounded-xl shadow-2xl shadow-blue-400">
          <div className="w-full md:max-w-2xl bg-white p-5 ">
            <div className="flex justify-start items-start ">
              <Title
                level={3}
                style={{
                  marginTop: "25px",
                  color: "blue",
                }}
              >
                Create Shop
              </Title>
            </div>
            <hr className="border border-gray-50 shadow-lg  w-full" />

            <div>
              <Form layout="vertical" onFinish={onSubmit} form={form}>
                <div className="w-full">
                  <Form.Item
                    rules={[
                      { required: true, message: "Please insert your name" },
                    ]}
                    className="flex-1 md:m-2"
                    label="Name"
                    name="shopName"
                  >
                    <Input placeholder="Enter Shop Name" />
                  </Form.Item>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center ">
                  <Form.Item
                    label=" Shop Category!"
                    rules={[
                      {
                        required: true,
                        message: "Please Select Shop Category!",
                      },
                    ]}
                    className="w-full md:w-1/2 md:m-2"
                    name="category"
                  >
                    <Select>
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
                    className="w-full md:w-1/2 md:m-2"
                    name="address"
                  >
                    <Select>
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

                <div className="flex flex-col md:flex-row md:justify-between w-full">
                  <Form.Item
                    name="openingDate"
                    label="Opening Time"
                    rules={[{ required: true }]}
                    className="w-full flex-1 md:m-2"
                  >
                    <DatePicker style={{ width: "100%" }} />
                  </Form.Item>
                  <Form.Item
                    name="closingDate"
                    label="Closing Time"
                    rules={[{ required: true }]}
                    className="w-full flex-1 md:m-2"
                  >
                    <DatePicker style={{ width: "100%" }} />
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
                    <Button
                      type="primary"
                      size="large"
                      htmlType="submit"
                      style={{
                        backgroundColor: "blue",
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "1rem",
                      }}
                    >
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
