import React, { useState } from "react";
import { InfoCartProps } from "../../component/shared/info-cart/data-access/info-cart";
import InfoCart from "../../component/shared/info-cart/ui/info-cart";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import PersonIcon from "@mui/icons-material/Person";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";


const Dashbord = () => {
  const CartInfo: InfoCartProps[] = [
    {
      title: "Books",
      icon: <LibraryBooksIcon sx={{ color: "#c3c3c3", fontSize: "36px" }} />,
      count: "1,350",
      className: "books-count",
      bgColor: "#fff",
      borderRadius: "5px",
      padding: "10px 15px",
      margin: "10px",
      width: "",
      height: "100px",
    },
    {
      title: "Users",
      icon: <PersonIcon sx={{ color: "#c3c3c3", fontSize: "36px" }} />,
      count: "4,102",
      className: "Users",
      bgColor: "#fff",
      borderRadius: "5px",
      padding: "10px 15px",
      margin: "10px",
      width: "",
      height: "100px",
    },
    {
      title: "Something",
      icon: <InsertEmoticonIcon sx={{ color: "#c3c3c3", fontSize: "36px" }} />,
      count: "9,000",
      className: "something",
      bgColor: "#fff",
      borderRadius: "5px",
      padding: "10px 15px",
      margin: "10px",
      width: "",
      height: "100px",
    },
    {
      title: "Something",
      icon: <InsertEmoticonIcon sx={{ color: "#c3c3c3", fontSize: "36px" }} />,
      count: "1,200",
      className: "something",
      bgColor: "#fff",
      borderRadius: "5px",
      padding: "10px 15px",
      margin: "10px",
      width: "",
      height: "100px",
    },
  ];


  return (
    <div className="my-[30px] sm:p-4 sm:flex gap-0 items-center flex-wrap">
      {CartInfo.map((item, key) => (
        <div className="sm:w-[calc(100%/2)]">
          <InfoCart
            className={`${item.className}-${key}`}
            bgColor={item.bgColor}
            borderRadius={item.borderRadius}
            padding={item.padding}
            margin={item.margin}
            width={item.width}
            height={item.height}
            icon={item.icon}
            title={item.title}
            count={item.count}
          />
        </div>
      ))}
      
    </div>
  );
};

export default Dashbord;
