import React, { useState } from "react";
import Button from "../../component/shared/button/ui/button";
import Input from "../../component/shared/input/ui/input";
import Table from "../../component/shared/table/ui/table";
import Tbody from "../../component/shared/table/ui/tbody";
import Td from "../../component/shared/table/ui/td";
import Th from "../../component/shared/table/ui/th";
import Thead from "../../component/shared/table/ui/thead";
import Tr from "../../component/shared/table/ui/tr";
import SearchIcon from "@mui/icons-material/Search";
import Popup from "../../component/popup/ui/popup";

import CloseIcon from "@mui/icons-material/Close";
const Books = () => {
  const [popup, setPopup] = useState(false);
  const handleOpenPopup = () => {
    setPopup((prev) => !prev);
  };

  return (
    <div className="my-[30px] sm:p-4 px-2">
      <div className="flex justify-between items-end gap-1">
        <Input
          icon={<SearchIcon sx={{ color: "#5b5a5a" }} />}
          name={"search"}
          type={"text"}
          placeholder={"What are you looking for..."}
          id={"search"}
          width={"70%"}
          margin={"0px"}
          padding={"8px 16px"}
          borderRadius={"5px"}
          border={"1px solid #ccc"}
          bgColor={""}
          color={"#5b5a5a"}
          fontSize={"16px"}
          lable={"search"}
        />
        {/* <input
          type="text"
          className="w-8/12 px-4 py-2 border border-[#ccc] rounded-[6px] text-[#5b5a5a]"
          placeholder="What are you looking for..."
        /> */}
        <Button
          className={"add"}
          buttonText={"Add Book"}
          width={"fit-content"}
          padding={"8px 30px"}
          margin={"0px"}
          borderRadius={"30px"}
          bgColor={"#0d6289"}
          bgHover={"#003f5c"}
          color={"#fff"}
          fontSize={"16px"}
          onClick={handleOpenPopup}
        />
      </div>

      <div className="overflow-y-auto overflow-x:auto relative my-[20px]">
        <Table width="100%">
          <Thead>
            <Tr>
              <Th
                text={"Book Name"}
                color={"#fff"}
                fontSize={"15px"}
                fontWeight={"600"}
                padding={"10px 15px"}
                margin={"0px"}
                textAlign={"center"}
                bgColor={"#0d6289"}
              />
              <Th
                text={"Auther Name"}
                color={"#fff"}
                fontSize={"15px"}
                fontWeight={"600"}
                padding={"10px 15px"}
                margin={"0px"}
                textAlign={"center"}
                bgColor={"#0d6289"}
              />
              <Th
                text={"Price"}
                color={"#fff"}
                fontSize={"15px"}
                fontWeight={"600"}
                padding={"10px 15px"}
                margin={"0px"}
                textAlign={"center"}
                bgColor={"#0d6289"}
              />
              <Th
                text={"Puplisher"}
                color={"#fff"}
                fontSize={"15px"}
                fontWeight={"600"}
                padding={"10px 15px"}
                margin={"0px"}
                textAlign={"center"}
                bgColor={"#0d6289"}
              />
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td
                text={"asd"}
                color={"#333"}
                fontSize={"15px"}
                fontWeight={"500"}
                padding={"10px 15px"}
                margin={"0px"}
                textAlign={"left"}
              />
              <Td
                text={"asd"}
                color={"#333"}
                fontSize={"15px"}
                fontWeight={"500"}
                padding={"10px 15px"}
                margin={"0px"}
                textAlign={"left"}
              />
              <Td
                text={"asd"}
                color={"#333"}
                fontSize={"15px"}
                fontWeight={"500"}
                padding={"10px 15px"}
                margin={"0px"}
                textAlign={"left"}
              />
              <Td
                text={"asd"}
                color={"#333"}
                fontSize={"15px"}
                fontWeight={"500"}
                padding={"10px 15px"}
                margin={"0px"}
                textAlign={"left"}
              />
            </Tr>
            <Tr>
              <Td
                text={"asd"}
                color={"#333"}
                fontSize={"15px"}
                fontWeight={"500"}
                padding={"10px 15px"}
                margin={"0px"}
                textAlign={"left"}
              />
              <Td
                text={"asd"}
                color={"#333"}
                fontSize={"15px"}
                fontWeight={"500"}
                padding={"10px 15px"}
                margin={"0px"}
                textAlign={"left"}
              />
              <Td
                text={"asd"}
                color={"#333"}
                fontSize={"15px"}
                fontWeight={"500"}
                padding={"10px 15px"}
                margin={"0px"}
                textAlign={"left"}
              />
              <Td
                text={"asd"}
                color={"#333"}
                fontSize={"15px"}
                fontWeight={"500"}
                padding={"10px 15px"}
                margin={"0px"}
                textAlign={"left"}
              />
            </Tr>
          </Tbody>
        </Table>
      </div>
      <Popup
        header={{
          title: "Add-Book",
        }}
        icon={<CloseIcon sx={{ fontSize: "18px", cursor: "pointer"  , color :'#555'}} />}
        onClick={handleOpenPopup}
        width={"300px"}
        height={"300px"}
        bgClor={"#fff"}
        borderRadius={"10px"}
        top={"50%"}
        left={"50%"}
        right={"0"}
        bottom={"0"}
        isOpen={popup}
      >
        <h1> Hello From Popup </h1>
      </Popup>
    </div>
  );
};

export default Books;
