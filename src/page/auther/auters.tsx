import Button from "../../component/shared/button/ui/button";
import Input from "../../component/shared/input/ui/input";
import Table from "../../component/shared/table/ui/table";
import Tbody from "../../component/shared/table/ui/tbody";
import Td from "../../component/shared/table/ui/td";
import Th from "../../component/shared/table/ui/th";
import Thead from "../../component/shared/table/ui/thead";
import Tr from "../../component/shared/table/ui/tr";

import SearchIcon from "@mui/icons-material/Search";
import { useGetAuterQuery } from "../../api/books/books";
import Loader from "../../component/loader/loader";

import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Icon from "../../component/shared/icon/ui/icon";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import { IconButton } from "@mui/material";
import ActionButton from "../../component/action-buttom/ui/action-button";

const Author = () => {
  const { data: getAuther, isLoading } = useGetAuterQuery({});
  console.log({ getAuther });
  const handleClick = () =>{
    
  }
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="my-[30px] sm:p-4 px-2">
          <div className="flex justify-between items-end gap-4">
            <div className="w-8/12">
              <Input
                className="search"
                icon={<SearchIcon sx={{ color: "#5b5a5a" }} />}
                name={"search"}
                type={"text"}
                placeholder={"What are you looking for..."}
                id={"search"}
                width={"80%"}
                margin={"0px"}
                padding={"8px 16px 8px 40px"}
                borderradius={"20px"}
                border={"1px solid #ccc"}
                bgcolor={""}
                color={"#5b5a5a"}
                fontSize={"16px"}
                lable={"search"}
              />
            </div>
            <Button
              className={"add"}
              buttonText={"Add Book"}
              width={"fit-content"}
              padding={"8px 30px"}
              margin={"0px"}
              borderRadius={"30px"}
              bgColor={"bg-main-color"}
              bgHover={"bg-hover-color"}
              color={"#fff"}
              fontSize={"16px"}
              onClick={() => {
                console.log("");
              }}
            />
          </div>
          <div className="md:w-[100%] my-[20px] overflow-x-auto">
            <Table width="100%">
              <Thead>
                <Tr>
                  <Th
                    text={"Auther"}
                    color={"#fff"}
                    fontSize={"15px"}
                    fontWeight={"600"}
                    padding={"10px 15px"}
                    margin={"0px"}
                    textAlign={"center"}
                    bgColor={"#0d6289"}
                    className={"auther"}
                  />
                  <Th
                    text={"Auther's Books"}
                    color={"#fff"}
                    fontSize={"15px"}
                    fontWeight={"600"}
                    padding={"10px 15px"}
                    margin={"0px"}
                    textAlign={"center"}
                    bgColor={"#0d6289"}
                    className={"autherBook"}
                  />
                  <Th
                    text={"Actions"}
                    color={"#333"}
                    fontSize={"15px"}
                    fontWeight={"600"}
                    padding={"10px 15px"}
                    margin={"0px"}
                    textAlign={"center"}
                    bgColor={"#fff"}
                    className={"icons"}
                  />
                </Tr>
              </Thead>
              <Tbody>
                {getAuther?.map((item: any, key: any) => (
                  <Tr key={key}>
                    <>
                      <Td
                        color={"#333"}
                        fontSize={"15px"}
                        fontWeight={"500"}
                        padding={"10px 15px"}
                        margin={"0px"}
                        textAlign={"left"}
                      >
                        {item?.name}
                      </Td>
                      <Td
                        color={""}
                        fontSize={""}
                        fontWeight={""}
                        padding={""}
                        margin={""}
                        textAlign={""}
                      >
                        <select className="w-full h-full p-[10px] border border-[#ccc]">
                          <option disabled selected>
                            {" "}
                            See The Books{" "}
                          </option>
                          <option> Obada Kahlous </option>
                          <option> Obada Kahlous </option>
                          <option> Obada Kahlous </option>
                        </select>
                      </Td>
                      <Td
                        color={"#333"}
                        fontSize={"15px"}
                        fontWeight={"500"}
                        padding={"10px 15px"}
                        margin={"0px"}
                        textAlign={"left"}
                      >
                        <ActionButton
                          deleteIcon={{
                            icon: (
                              <DeleteOutlineOutlinedIcon
                                sx={{ color: "#333" }}
                              />
                            ),
                            onClick: handleClick,
                          }}
                          editIcon={{
                            icon: (
                              <ModeEditOutlinedIcon sx={{ color: "#333" }} />
                            ),
                            onClick: handleClick,
                          }}
                        />
                      </Td>
                    </>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </div>
        </div>
      )}
    </>
  );
};

export default Author;
