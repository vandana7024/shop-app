import React from "react";
import { Button, Space } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { deleteShop } from "../redux/slice/shopslice";
import { useDispatch } from "react-redux";
import EditShop from "./EditShop";

const Action = ({ record }) => {
  const dispatch = useDispatch();
  return (
    <Space size="middle">
      <EditShop shop={record} />
      <Button
        onClick={() => dispatch(deleteShop(record.id))}
        className="hover:bg-gray-300 flex justify-center items-center rounded-full text-black"
      >
        <DeleteOutlined
          style={{
            fontSize: "20px",
            color: "red",
          }}
        />
      </Button>
    </Space>
  );
};

export default Action;
