import React from "react";
import Navbar from "../components/Navbar";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table } from "antd";
import { useNavigate } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { deleteShop, retriveShops } from "../redux/slice/shopslice";
import ShopTable from "../components/ShopTable";

function HomePage() {
  const { Search } = Input;
  const shopData = useSelector((state) => state.shop.shops, shallowEqual);
  console.log("shops", shopData);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(retriveShops());
  }, []);
  const columns = [
    {
      title: "Shop Name",
      dataIndex: "shopName",
      key: "shopName",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Open Date",
      dataIndex: "openingDate",
      key: "openingDate",
    },
    {
      title: "Close Date",
      dataIndex: "closingDate",
      key: "closingDate",
    },

    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button>Edit</Button>
          <Button onClick={() => dispatch(deleteShop(record.id))}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="">
      <Navbar />
      <div className="flex justify-center items-center">
        <Search placeholder="input search text" style={{ width: 200 }} />
      </div>
      {/* <ShopTable /> */}
      <Table columns={columns} dataSource={shopData} />;
    </div>
  );
}

export default HomePage;
