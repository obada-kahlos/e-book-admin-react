import { useState } from "react";
import Li from "../../component/shared/li/ui/li";
import Nav from "../../component/shared/nav/ui/nav";
import Ul from "../../component/shared/ul/ui/ul";
import Icon from "../../component/shared/icon/ui/icon";
import { Link, Outlet } from "react-router-dom";
import Divider from "../../component/shared/divider/ui/divider";
import { Avatar } from "@mui/material";
import FloatingButton from "../../component/shared/floating-button/ui/floating-button";

/// logo
import logo from "../../assets/Logo.png";

/// icon from MUI
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MenuIcon from "@mui/icons-material/Menu";
import SpeedIcon from "@mui/icons-material/Speed";
import CloseIcon from "@mui/icons-material/Close";
import { asidedata, dropDownBookData } from "./layout-data";
import Image from "../../component/shared/image/ui/image";
import Button from "../../component/shared/button/ui/button";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import SegmentIcon from "@mui/icons-material/Segment";
const Layout = () => {
  const [showNav, setShowNav] = useState(false);
  const handlerShowNav = () => {
    setShowNav((prev) => !prev);
  };

  const [bookDropWoen, setBookDropDown] = useState<boolean>(false);
  const handleOpenBookDropDown = () => {
    setBookDropDown((prev) => !prev);
  };

  const asideData = {
    Nav: {
      width: "100%",
      height: "100vh",
      padding: "20px 0px",
      margin: "0px",
      borderRightColor: "#ffffff",
      borderRightStyle: "solid",
      borderRightWidth: "2px",
      className: "navside",
    },
    Ul: {
      padding: "0px 10px",
      margin: "0px 0px",
      className: "ul-list",
    },
  };

  return (
    <>
      <div className="relative lg:grid grid-cols-12 gap-0">
        <div
          className={`transition-[0.5s] xl:col-span-2 col-span-3 ${
            showNav ? "show-aside" : "hide-aside"
          } `}
        >
          <Nav
            width={asideData.Nav.width}
            height={asideData.Nav.height}
            padding={asideData.Nav.padding}
            margin={asideData.Nav.margin}
            className={asideData.Nav.className}
            borderRightStyle={asideData.Nav.borderRightStyle}
            borderRightWidth={asideData.Nav.borderRightWidth}
            borderRightColor={asideData.Nav.borderRightColor}
          >
            <>
              <Link to="/">
                <div
                  className="flex gap-2 justify-start items-center px-4 py-4"
                  onClick={handlerShowNav}
                >
                  <Icon icon={<SpeedIcon />} />
                  <li className="text-[#fff] "> Dashboard </li>
                </div>
              </Link>
              <Divider
                height={"1px"}
                width={"80%"}
                bgColor={"rgba(255,255,255,0.6)"}
              />
              <Ul
                margin={asideData.Ul.margin}
                padding={asideData.Ul.padding}
                className={asideData.Ul.className}
              >
                <div
                  onClick={handleOpenBookDropDown}
                  className="transition-[0.4s] rounded-[4px] hover:bg-hover-color w-full flex justify-between items-center cursor-pointer px-[15px] py-[10px]"
                >
                  <div className="flex items-center gap-[10px]">
                    <Icon icon={<SegmentIcon fontSize="medium"/>}/>
                    <Button
                      className={"frop-down"}
                      buttonText={"Products"}
                      width={""}
                      padding={"0"}
                      margin={"0"}
                      borderRadius={"0"}
                      bgColor={"transparent"}
                      color={"#fff"}
                      fontSize={"18px"}
                    />
                  </div>
                  <Icon
                    icon={
                      bookDropWoen ? (
                        <ArrowDropUpIcon fontSize="medium" />
                      ) : (
                        <ArrowDropDownIcon fontSize="medium" />
                      )
                    }
                  />
                </div>
                <>
                  {bookDropWoen && (
                    <Ul
                      className="book-frop-down"
                      margin=""
                      padding="0px 0px 0px 20px"
                    >
                      {dropDownBookData.map((item, key) => (
                        <Li
                          href={item.href}
                          text={item.text}
                          fontSize={item.fontSize}
                          color={item.color}
                          padding={item.padding}
                          margin={item.margin}
                          icon={<item.icon fontSize="medium"/>}
                          onClick={handlerShowNav}
                        />
                      ))}
                    </Ul>
                  )}
                </>
                <>
                  {asidedata.map((item, key) => (
                    <Li
                      href={item.href}
                      text={item.text}
                      fontSize={item.fontSize}
                      color={item.color}
                      padding={item.padding}
                      margin={item.margin}
                      icon={<item.icon />}
                      onClick={handlerShowNav}
                    />
                  ))}
                </>
              </Ul>
              <Divider
                height={"1px"}
                width={"80%"}
                bgColor={"rgba(255,255,255,0.6)"}
              />
            </>
          </Nav>
        </div>
        <div className={`xl:col-span-10 col-span-9`}>
          <div className="bg-main-color text-[white] h-[70px]  w-full p-2 px-8 flex justify-between items-center">
            <Image
              src={logo}
              alt=""
              width={"120px"}
              height={"80px"}
              borderRaduis={""}
              className={'logo'}
            />
            <Link to={"profile"}>
              <div className="flex gap-2 items-center relative">
                <Icon
                  icon={
                    <NotificationsNoneIcon
                      sx={{ fontSize: "26px", cursor: "pointer" }}
                    />
                  }
                />
                <Avatar src="./not-found.png" />
                <span className="text-slate-300"> obada Kahlous </span>
              </div>
            </Link>
          </div>
          <div className="h-[calc(100vh-70px)] overflow-y-auto">
            <Outlet />
          </div>
        </div>
        <div className="lg:hidden block">
          <FloatingButton
            icon={
              showNav ? (
                <CloseIcon sx={{ fontSize: "30px", cursor: "pointer" }} />
              ) : (
                <MenuIcon sx={{ fontSize: "30px", cursor: "pointer" }} />
              )
            }
            position={"fixed"}
            top={""}
            bottom={"40px"}
            left={""}
            right={"40px"}
            className={"menu"}
            buttonText={""}
            width={"60px"}
            height={"60px"}
            padding={""}
            margin={""}
            borderRadius={"50%"}
            bgColor={"#0d6289"}
            bgHover={"#003f5c"}
            color={"#fff"}
            fontSize={""}
            onClick={handlerShowNav}
          />
        </div>
      </div>
      <style>
        {`
          @media(max-width : 1024px){
            .show-aside{
              position : fixed;
              top : 70px;
              left : 0;
              width : 300px;
              height : 100vh;
              border-top : 1px solid #fff;
              z-index : 1000;
            }
            .hide-aside{
              position : fixed;
              top : 70px;
              left : -100%;
              width : 300px;
              height : 100vh;
              border-top : 1px solid #fff;
              z-index : 1000;
            }
          }
        `}
      </style>
    </>
  );
};

export default Layout;
