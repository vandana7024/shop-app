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
  const handleOk = () => {
    setIsModalVisible(false);
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
        title="Update Shop"
        visible={isModalVisible}
        footer={null}
        className="h-full w-full"
        onCancel={handleCancel}
      >
        <Form
          layout="vertical"
          onFinish={onSubmit}
          form={form}
          initialValues={shop}
        >
          <div className="flex flex-col md:flex-row justify-evenly ">
            <Form.Item
              rules={[{ required: true, message: "Please insert your name" }]}
              className="flex-1 md:m-2"
              label="Name"
              name="shopName"
            >
              <Input placeholder="Enter Shop Name" />
            </Form.Item>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center">
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
                <Select.Option value="Ahmednagar">Ahmednagar</Select.Option>
                <Select.Option value="Solapur">Solapur</Select.Option>
              </Select>
            </Form.Item>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between w-full">
            <div className="w-full flex-1 md:m-2">
              <label htmlFor="">Opening Date</label>
              <DatePicker
                label="Opening Date"
                defaultValue={openingDate}
                format={"DD/MM/YYYY"}
                onChange={openingDateChange}
                style={{ width: "100%" }}
              />
            </div>
            <div className="w-full flex-1 md:m-2">
              <label htmlFor="">Closing Date</label>
              <DatePicker
                label="Closing Date"
                defaultValue={closingDate}
                format={"DD/MM/YYYY"}
                onChange={closingDateChange}
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="p-10 w-full relative ">
            <Form.Item
              className="absolute bottom-0 right-0 "
              style={{
                display: "flex",
              }}
            >
              <Button
                onClick={() => {
                  form.resetFields();
                  handleCancel();
                }}
                size="large"
                className="mx-2"
              >
                Cancel
              </Button>
              <Button
                type="primary"
                size="large"
                htmlType="submit"
                className="mx-2"
              >
                Edit
              </Button>
            </Form.Item>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default EditShop;
