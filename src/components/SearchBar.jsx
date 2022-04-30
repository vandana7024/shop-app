import { DatePicker, Input } from "antd";
import React from "react";
export function SearchBar({ handleSearch, hadleSearchDate }) {
  return (
    <div className="flex justify-center items-center my-10 w-full ">
      <Input
        onChange={handleSearch}
        placeholder="Search by Category and Area"
        style={{
          width: "40%",
        }}
      />
      <DatePicker onChange={hadleSearchDate} placeholder="Search by date" />
    </div>
  );
}
