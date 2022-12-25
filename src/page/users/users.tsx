import Input from "../../component/shared/input/ui/input";
import SearchIcon from "@mui/icons-material/Search";
import Table from "../../component/shared/table/ui/table";
import Thead from "../../component/shared/table/ui/thead";
import Tr from "../../component/shared/table/ui/tr";
import Th from "../../component/shared/table/ui/th";
import Tbody from "../../component/shared/table/ui/tbody";
import Td from "../../component/shared/table/ui/td";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import { IconButton } from '@mui/material';
import Icon from "../../component/shared/icon/ui/icon";
const Users = () => {
  return (
    <div className="my-[30px] sm:p-4 px-2">
      <div className="flex justify-between items-end gap-1">
        <div className="w-full">
          <Input
            className="search"
            icon={<SearchIcon sx={{ color: "#5b5a5a" }} />}
            name={"search"}
            type={"text"}
            placeholder={"Search for a user"}
            id={"search"}
            width={"100%"}
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
      </div>
      <div className="md:w-[100%] my-[20px] overflow-x-auto">
        <Table width="100%">
          <Thead>
            <Tr>
              <Th
                text={"First name"}
                color={"#fff"}
                fontSize={"15px"}
                fontWeight={"600"}
                padding={"10px 15px"}
                margin={"0px"}
                textAlign={"center"}
                bgColor={"#0d6289"}
                className={"firstName"}
              />
              <Th
                text={"Last name"}
                color={"#fff"}
                fontSize={"15px"}
                fontWeight={"600"}
                padding={"10px 15px"}
                margin={"0px"}
                textAlign={"center"}
                bgColor={"#0d6289"}
                className={"lastName"}
              />
              <Th
                text={"Email"}
                color={"#fff"}
                fontSize={"15px"}
                fontWeight={"600"}
                padding={"10px 15px"}
                margin={"0px"}
                textAlign={"center"}
                bgColor={"#0d6289"}
                className={"email"}
              />
              <Th
                text={"Gender"}
                color={"#fff"}
                fontSize={"15px"}
                fontWeight={"600"}
                padding={"10px 15px"}
                margin={"0px"}
                textAlign={"center"}
                bgColor={"#0d6289"}
                className={"gender"}
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
                className={"icon"}
              />
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td
                color={"#333"}
                fontSize={"15px"}
                fontWeight={"500"}
                padding={"10px 15px"}
                margin={"0px"}
                textAlign={"left"}
              >
                <span>obada</span>
              </Td>
              <Td
                color={"#333"}
                fontSize={"15px"}
                fontWeight={"500"}
                padding={"10px 15px"}
                margin={"0px"}
                textAlign={"left"}
              >
                <span>kahlous</span>
              </Td>
              <Td
                color={"#333"}
                fontSize={"15px"}
                fontWeight={"500"}
                padding={"10px 15px"}
                margin={"0px"}
                textAlign={"left"}
              >
                <span>obada@gmail.com</span>
              </Td>
              <Td
                color={"#333"}
                fontSize={"15px"}
                fontWeight={"500"}
                padding={"10px 15px"}
                margin={"0px"}
                textAlign={"left"}
              >
                <span>Male</span>
              </Td>
              <Td
                color={"#333"}
                fontSize={"15px"}
                fontWeight={"500"}
                padding={"10px 15px"}
                margin={"0px"}
                textAlign={"left"}
              >
                <div className="flex justify-center items-center gap-10">
                  <IconButton><Icon icon={<DeleteOutlineOutlinedIcon sx={{color : '#333'}}/>} /></IconButton>
                  <IconButton><Icon icon={<ModeEditOutlinedIcon sx={{color : '#333'}}/>} /></IconButton>
                </div>
              </Td>
            </Tr>
            <Tr>
              <Td
                color={"#333"}
                fontSize={"15px"}
                fontWeight={"500"}
                padding={"10px 15px"}
                margin={"0px"}
                textAlign={"left"}
              >
                <span>bahaa</span>
              </Td>
              <Td
                color={"#333"}
                fontSize={"15px"}
                fontWeight={"500"}
                padding={"10px 15px"}
                margin={"0px"}
                textAlign={"left"}
              >
                <span>atk</span>
              </Td>
              <Td
                color={"#333"}
                fontSize={"15px"}
                fontWeight={"500"}
                padding={"10px 15px"}
                margin={"0px"}
                textAlign={"left"}
              >
                <span>bahaa@gmail.com</span>
              </Td>
              <Td
                color={"#333"}
                fontSize={"15px"}
                fontWeight={"500"}
                padding={"10px 15px"}
                margin={"0px"}
                textAlign={"left"}
              >
                <span>Male</span>
              </Td>
              <Td
                color={"#333"}
                fontSize={"15px"}
                fontWeight={"500"}
                padding={"10px 15px"}
                margin={"0px"}
                textAlign={"left"}
              >
                <div className="flex justify-center items-center gap-10">
                  <IconButton><Icon icon={<DeleteOutlineOutlinedIcon sx={{color : '#333'}}/>} /></IconButton>
                  <IconButton><Icon icon={<ModeEditOutlinedIcon sx={{color : '#333'}}/>} /></IconButton>
                </div>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </div>
    </div>
  );
};

export default Users;
