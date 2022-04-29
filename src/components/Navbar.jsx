import React from "react";
import { Button, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";

function Navbar() {
  const { Search } = Input;
  return (
    <div className="w-full h-16  flex  items-center bg-blue-300">
      <div className=" w-full flex justify-around">
        <div>
          <h1 className="italic text-2xl font-medium text-red-400">MyShop</h1>
        </div>

        <div className="flex justify-center items-center">
          <Search placeholder="input search text" style={{ width: 200 }} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;

<Button icon={<PlusOutlined />}></Button>;
