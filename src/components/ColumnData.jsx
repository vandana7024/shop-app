import Action from "./Action";
import moment from "moment";

export const columns = [
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
    render: (text, record) => <Action record={record} />,
  },
];
