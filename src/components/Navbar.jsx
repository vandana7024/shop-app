import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-16  flex  items-center bg-blue-300">
      <div className=" w-full flex justify-around">
        <div>
          <h1 className="italic text-2xl font-medium text-red-400">MyShop</h1>
        </div>
        <div>
          <Button
            type="primary"
            size="large"
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
