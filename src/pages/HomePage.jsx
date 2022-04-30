/* eslint-disable react-hooks/exhaustive-deps */
import { SearchBar } from "./../components/SearchBar";
import React from "react";
import Navbar from "../components/Navbar";
import { Table } from "antd";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { retriveShops } from "../redux/slice/shopslice";
import moment from "moment";
import { columns } from "../components/ColumnData";

function HomePage() {
  const dispatch = useDispatch();
  const shopData = useSelector((state) => state.shop.shops, shallowEqual);
  const [filterData, setFilterData] = React.useState([...shopData]);

  React.useEffect(() => {
    dispatch(retriveShops());
    setFilterData([...shopData]);
  }, [dispatch]);

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
      <SearchBar
        handleSearch={handleSearch}
        hadleSearchDate={hadleSearchDate}
      />
      <Table
        className="m-6"
        columns={columns}
        dataSource={dataSource}
        scroll={{ x: 800, y: 300 }}
        rowKey="id"
      />
    </div>
  );
}

export default HomePage;
