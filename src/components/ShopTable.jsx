/* eslint-disable import/no-anonymous-default-export */
import { Table, Space } from "antd";

const columns = [
  {
    title: "Shop Name",
    dataIndex: "name",
    key: "name",
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
    title: "Open Time",
    dataIndex: "openTime",
    key: "openTime",
  },
  {
    title: "Close Time",
    dataIndex: "closeTime",
    key: "closeTime",
  },

  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    category: 32,
    address: "New York No. 1 Lake Park",
    openTime: "10:00",
    closeTime: "18:00",
  },
  {
    key: "1",
    name: "John Brown",
    category: 32,
    address: "New York No. 1 Lake Park",
    openTime: "10:00",
    closeTime: "18:00",
  },
  {
    key: "1",
    name: "John Brown",
    category: 32,
    address: "New York No. 1 Lake Park",
    openTime: "10:00",
    closeTime: "18:00",
  },
];

export default () => <Table columns={columns} dataSource={data} />;
