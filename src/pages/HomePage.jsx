import React from "react";
// import Navbar from "../components/Navbar";
// import { PlusOutlined } from "@ant-design/icons";
// import { Button } from "antd";
// import { useNavigate } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { retriveShops } from "../redux/slice/shopslice";

function HomePage() {
  const shops = useSelector((state) => state.shop.shops, shallowEqual);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(retriveShops());
  }, []);

  return (
    <div className="">
      {/* <Navbar />

     

      <div className="absolute bottom-10 right-8">
        <Button
          type="primary"
          size="large"
          shape="circle"
          icon={<PlusOutlined />}
          onClick={() => navigate("/create-shop")}
        ></Button>
        ;
      </div> */}

      {shops?.map((user) => (
        <div key={user.id}>
          <h1>{user.firstName}</h1>
          <h1>{user.lastName}</h1>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
