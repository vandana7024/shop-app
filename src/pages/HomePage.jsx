/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Navbar from "../components/Navbar";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table } from "antd";
import { useNavigate } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { deleteShop, retriveShops } from "../redux/slice/shopslice";
import EditShop from "./EditShop";
import moment from "moment";

function HomePage() {
  const dispatch = useDispatch();
  const shopData = useSelector((state) => state.shop.shops, shallowEqual);
  const [filterData, setFilterData] = React.useState([...shopData]);
  const [searchText, setSearchText] = React.useState("");

  React.useEffect(() => {
    dispatch(retriveShops());
  }, [dispatch, searchText]);

  const columns = [
    {
      title: "Shop Name",
      dataIndex: "shopName",
      key: "shopName",
      render: (text) => <span>{text}</span>,
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
      render: (text) => <span>{moment(text).format("DD/MM/YYYY")}</span>,
    },
    {
      title: "Close Date",
      dataIndex: "closingDate",
      key: "closingDate",
      render: (text) => <span>{moment(text).format("DD/MM/YYYY")}</span>,
    },

    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <EditShop shop={record} />
          <Button onClick={() => dispatch(deleteShop(record.id))}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const handleSearch = (e) => {
    if (searchText) {
      const searchData = shopData.filter((item) =>
        item.shopName.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilterData(searchData);
    } else {
      setFilterData(shopData);
    }
  };

  console.log("filter", filterData);

  return (
    <div className="">
      <Navbar />
      <div className="flex justify-center items-center m-5">
        <Input
          placeholder="Search by Category , Address"
          onChange={handleSearch}
          type="search"
          style={{ width: 300 }}
        />
      </div>
      <Table columns={columns} dataSource={filterData} />;
    </div>
  );
}

export default HomePage;
