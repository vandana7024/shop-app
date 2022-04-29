import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-16  flex  items-center bg-white shadow-xl ">
      <div className=" w-full flex justify-around">
        <div>
          <h1 className="italic text-3xl font-semibold text-blue-500">
            MyShop
          </h1>
        </div>
        <div>
          <Button
            type="primary"
            size="large"
            style={{ backgroundColor: "blue" }}
            onClick={() => navigate("/create")}
          >
            Create Shop
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
