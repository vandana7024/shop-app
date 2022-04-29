import React from "react";
import {
  Button,
  Form,
  Input,
  Select,
  Typography,
  DatePicker,
  message,
  Modal,
} from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import { updateShop } from "../redux/slice/shopslice";

const EditShop = ({ shop, modalVisible }) => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { Title } = Typography;
  const navigate = useNavigate();
  const [openingDate, setOpeningDate] = React.useState(
    moment(shop.openingDate)
  );
  const [closingDate, setClosingDate] = React.useState(
    moment(shop.closingDate)
  );

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onSubmit = (data) => {
    const { _d: _openingDate } = openingDate;
    const { _d: _closingDate } = closingDate;
    const editedShop = {
      id: shop.id,
      shopName: data.shopName,
      address: data.address,
      category: data.category,
      openingDate: _openingDate,
      closingDate: _closingDate,
      updatedAt: new Date(),
    };

    dispatch(updateShop(editedShop));
    message.success("Shop Edited successfully");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  const openingDateChange = (date, dateString) => {
    setOpeningDate(date);
  };

  const closingDateChange = (date, dateString) => {
    setClosingDate(date);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Edit
      </Button>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <center>
          <div className=" w-full h-screen bg- bg-gray-200 flex justify-center items-center rounded-xl shadow-2xl shadow-blue-400 ">
            <div className="">
              <div className="flex justify-start items-start ">
                <Title
                  level={3}
                  style={{
                    marginTop: "25px",
                    color: "#582949",
                  }}
                >
                  Edit Shop
                </Title>
              </div>
              <hr className="border border-gray-50 shadow-lg  w-full" />

              <div>
                <Form
                  layout="vertical"
                  onFinish={onSubmit}
                  form={form}
                  initialValues={shop}
                >
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
                    <DatePicker
                      defaultValue={openingDate}
                      format={"DD/MM/YYYY"}
                      onChange={openingDateChange}
                    />

                    <DatePicker
                      defaultValue={closingDate}
                      format={"DD/MM/YYYY"}
                      onChange={closingDateChange}
                    />
                  </div>
                  <div>
                    <Form.Item
                      className="mt-10 float-right"
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
                        Edit
                      </Button>
                    </Form.Item>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </center>
      </Modal>
    </>
  );
};

export default EditShop;
