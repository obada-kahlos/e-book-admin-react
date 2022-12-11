import React from "react";
import Button from "../../component/shared/button/ui/button";
import Input from "../../component/shared/input/ui/input";
import Table from "../../component/shared/table/ui/table";
import Tbody from "../../component/shared/table/ui/tbody";
import Td from "../../component/shared/table/ui/td";
import Th from "../../component/shared/table/ui/th";
import Thead from "../../component/shared/table/ui/thead";
import Tr from "../../component/shared/table/ui/tr";
import SearchIcon from "@mui/icons-material/Search";
const Books = () => {
  return (
    <div className="my-[30px] sm:p-4 px-2">
      <div className="flex justify-between items-end gap-1">
        <Input
          icon={<SearchIcon sx={{color : '#5b5a5a'}}/>}
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
          lable={'search'}
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
          borderRadius={"4px"}
          bgColor={"#0072ca"}
          bgHover={"#10619f"}
          color={"#fff"}
          fontSize={"16px"}
          onClick={() => {
            alert("Hi");
          }}
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
                bgColor={"#0072ca"}
              />
              <Th
                text={"Auther Name"}
                color={"#fff"}
                fontSize={"15px"}
                fontWeight={"600"}
                padding={"10px 15px"}
                margin={"0px"}
                textAlign={"center"}
                bgColor={"#0072ca"}
              />
              <Th
                text={"Price"}
                color={"#fff"}
                fontSize={"15px"}
                fontWeight={"600"}
                padding={"10px 15px"}
                margin={"0px"}
                textAlign={"center"}
                bgColor={"#0072ca"}
              />
              <Th
                text={"Puplisher"}
                color={"#fff"}
                fontSize={"15px"}
                fontWeight={"600"}
                padding={"10px 15px"}
                margin={"0px"}
                textAlign={"center"}
                bgColor={"#0072ca"}
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
    </div>
  );
};

export default Books;
