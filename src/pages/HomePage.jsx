/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Navbar from "../components/Navbar";
import { DeleteOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table, DatePicker } from "antd";

import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { deleteShop, retriveShops } from "../redux/slice/shopslice";
import EditShop from "./EditShop";
import moment from "moment";

function HomePage() {
  const dispatch = useDispatch();
  const shopData = useSelector((state) => state.shop.shops, shallowEqual);
  const [filterData, setFilterData] = React.useState([...shopData]);

  React.useEffect(() => {
    dispatch(retriveShops());
    setFilterData([...shopData]);
  }, [dispatch]);

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
      title: "Status",
      dataIndex: "closingDate",
      key: "status",
      render: (text) => {
        if (moment(text).isBefore(moment())) {
          return <span className="text-red-600">Closed</span>;
        } else {
          return <span className="text-green-600">Open</span>;
        }
      },
    },

    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <EditShop shop={record} />
          <Button
            onClick={() => dispatch(deleteShop(record.id))}
            className="hover:bg-gray-300 flex justify-center items-center rounded-full text-black"
          >
            <DeleteOutlined style={{ fontSize: "20px", color: "red" }} />
          </Button>
        </Space>
      ),
    },
  ];

  const handleSearch = (e) => {
    if (e.target.value.length > 0) {
      const filterData = shopData.filter(
        (shop) =>
          shop.category.toLowerCase().includes(e.target.value.toLowerCase()) ||
          shop.address.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setFilterData(filterData);
    } else {
      setFilterData(shopData);
    }
  };
  const hadleSearchDate = (e) => {
    const searchData = shopData.filter(
      (item) =>
        moment(item.openingDate).isSame(e, "day") ||
        moment(item.closingDate).isSame(e, "day")
    );
    setFilterData(searchData);
  };

  const dataSource = filterData.length !== 0 ? filterData : shopData;
  return (
    <div className="object-contain flex flex-col justify-center items-center ">
      <Navbar />
      <div className="flex justify-center items-center my-10 w-full ">
        <Input
          onChange={handleSearch}
          placeholder="Search by Category and Area"
          style={{ width: "40%" }}
        />
        <DatePicker onChange={hadleSearchDate} placeholder="Search by date" />
      </div>
      <Table
        className="m-6"
        columns={columns}
        dataSource={dataSource}
        scroll={{ x: 700, y: 800 }}
        rowKey="id"
      />
      ;
    </div>
  );
}

export default HomePage;
