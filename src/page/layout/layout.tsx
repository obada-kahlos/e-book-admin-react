import { useEffect, useState } from "react";
import Li from "../../component/shared/li/ui/li";
import Nav from "../../component/shared/nav/ui/nav";
import Ul from "../../component/shared/ul/ui/ul";
import Icon from "../../component/shared/icon/ui/icon";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Divider from "../../component/shared/divider/ui/divider";
import { Avatar } from "@mui/material";
import FloatingButton from "../../component/shared/floating-button/ui/floating-button";

import { useDispatch } from "react-redux";
/// logo
import logo from "../../assets/Logo.png";

/// icon from MUI
import MenuIcon from "@mui/icons-material/Menu";
import SpeedIcon from "@mui/icons-material/Speed";
import CloseIcon from "@mui/icons-material/Close";
import { asidedata, dropDownBookData } from "./layout-data";
import Image from "../../component/shared/image/ui/image";
import Button from "../../component/shared/button/ui/button";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import SegmentIcon from "@mui/icons-material/Segment";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";

import { setToken } from "../../app/slices/autoSlice";

import { useLocation } from "react-router-dom";
import { ImageProps } from "../../component/shared/image/data-access/image";

const Layout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const [showNav, setShowNav] = useState(false);
  const handlerShowNav = () => {
    setShowNav((prev) => !prev);
  };

  const [bookDropDoen, setBookDropDown] = useState<boolean>(false);
  const handleOpenBookDropDown = () => {
    setBookDropDown((prev) => !prev);
  };

  const [dropDown, setDropDown] = useState(false);
  const handleDropDown = () => {
    setDropDown((prev) => !prev);
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

  const getToken = JSON.parse(localStorage.getItem("login") as any);
  const [tokenData, setTokenData] = useState(getToken);
  console.log({ tokenData });

  useEffect(() => {
    dispatch(setToken(getToken?.token));
  }, [dispatch, location.pathname, tokenData, getToken]);

  const logOut = () => {
    localStorage.removeItem("login");
    localStorage.removeItem("admin-image");
    navigate("/");
    setTokenData(null);
  };

  useEffect(() => {
    if (!tokenData) {
      navigate("/");
    }
  }, [logOut, tokenData]);

  const profileImage = JSON.parse(localStorage.getItem("admin-image") as any);
  console.log({ profileImage });

  return (
    <>
      <div className="lg:grid grid-cols-12 gap-0 ">
        <div
          className={`transition-[0.5s] xl:col-span-2 col-span-3 ${
            showNav ? "show-aside" : "hide-aside"
          } `}>
          <Nav
            width={asideData.Nav.width}
            height={asideData.Nav.height}
            padding={asideData.Nav.padding}
            margin={asideData.Nav.margin}
            className={asideData.Nav.className}
            borderRightStyle={asideData.Nav.borderRightStyle}
            borderRightWidth={asideData.Nav.borderRightWidth}
            borderRightColor={asideData.Nav.borderRightColor}
            bgColor="bg-main-color">
            <>
              <Link to="/dashbord/info">
                <div
                  className="flex gap-2 justify-start items-center px-4 py-4"
                  onClick={handlerShowNav}>
                  <Icon icon={<SpeedIcon sx={{ color: "#fff" }} />} />
                  <li className="text-[#fff] "> Dashboard </li>
                </div>
              </Link>
              <Divider
                margin="10px auto"
                className="sideDevider"
                height={"1px"}
                width={"80%"}
                bgColor={"rgba(255,255,255,0.6)"}
              />
              <Ul
                margin={asideData.Ul.margin}
                padding={asideData.Ul.padding}
                className={asideData.Ul.className}>
                <div
                  onClick={handleOpenBookDropDown}
                  className="transition-[0.4s] rounded-[4px] hover:bg-hover-color w-full flex justify-between items-center cursor-pointer px-[15px] py-[10px]">
                  <div className="flex items-center gap-[10px]">
                    <Icon
                      icon={
                        <SegmentIcon fontSize="medium" sx={{ color: "#fff" }} />
                      }
                    />
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
                      bookDropDoen ? (
                        <ArrowDropUpIcon
                          fontSize="medium"
                          sx={{ color: "#fff" }}
                        />
                      ) : (
                        <ArrowDropDownIcon
                          fontSize="medium"
                          sx={{ color: "#fff" }}
                        />
                      )
                    }
                  />
                </div>
                <>
                  {bookDropDoen && (
                    <Ul
                      className="book-frop-down"
                      margin=""
                      padding="0px 0px 0px 20px">
                      {dropDownBookData.map((item, key) => (
                        <Li
                          key={key}
                          href={item.href}
                          text={item.text}
                          fontSize={item.fontSize}
                          color={item.color}
                          padding={item.padding}
                          margin={item.margin}
                          icon={<item.icon fontSize="medium" />}
                          borderRadius={"4px"}
                          onClick={() => {
                            setShowNav(false);
                          }}
                          className={item.className}
                        />
                      ))}
                    </Ul>
                  )}
                </>
                <>
                  {asidedata.map((item, key) => (
                    <Li
                      key={key}
                      href={item.href}
                      text={item.text}
                      fontSize={item.fontSize}
                      color={item.color}
                      padding={item.padding}
                      margin={item.margin}
                      icon={<item.icon />}
                      borderRadius={"4px"}
                      onClick={handlerShowNav}
                      className={item.className}
                    />
                  ))}
                </>
              </Ul>
              <Divider
                margin="10px auto"
                className="sideDevider"
                height={"1px"}
                width={"80%"}
                bgColor={"rgba(255,255,255,0.6)"}
              />
            </>
          </Nav>
        </div>
        <div className={`xl:col-span-10 col-span-9`}>
          <div className="bg-main-color text-[white] h-[70px]  w-full p-2 px-8 flex justify-between items-center">
            <Link to="/dashbord/info">
              <Image
                src={logo}
                alt="Logo"
                width={"80px"}
                height={"80px"}
                borderRadius={""}
                SmWidth={"80px"}
                className={"logo"}
              />
            </Link>
            <div>
              <div className="flex gap-2 items-center relative">
                {/* <Icon
                  icon={
                    <NotificationsNoneIcon
                      sx={{ fontSize: "32px", cursor: "pointer" }}
                    />
                  }
                /> */}

                {profileImage ? (
                  <div onClick={handleDropDown}>
                    <Image
                      src={profileImage}
                      alt="admin-image"
                      width={"35px"}
                      height={"35px"}
                      borderRadius={"50%"}
                      SmWidth={"35px"}
                      className={"admin-image"}
                    />
                  </div>
                ) : (
                  <Avatar
                    onClick={handleDropDown}
                    src="./not-found.png"
                    sx={{ width: "35px", height: "35px", cursor: "pointer" }}
                  />
                )}
              </div>
            </div>
            {dropDown ? (
              <>
                <div className="drop-down-menu-container">
                  <Nav
                    width={""}
                    height={""}
                    padding={""}
                    margin={""}
                    className={""}
                    bgColor="">
                    <Ul margin={""} padding={""} className={""}>
                      <div className="py-[10px] px-[15px] text-[#333] flex items-center w-full">
                        <span>
                          {tokenData?.firstName}_{tokenData?.lastName}
                        </span>
                      </div>
                      <Divider
                        margin="0px 0px"
                        className="dropDownDevider"
                        width="100%"
                        height="1px"
                        bgColor="rgba(0,0,0,0.6)"
                      />
                      <Li
                        href={"Profile"}
                        text={"Profile"}
                        fontSize={""}
                        color={"#333"}
                        padding={"15px 15px"}
                        margin={"0px"}
                        className="profile"
                        borderRadius="0px"
                        onClick={handleDropDown}
                        icon={<PersonOutlineOutlinedIcon />}></Li>
                      <Li
                        href={"/"}
                        text={"Link"}
                        fontSize={""}
                        color={"#333"}
                        padding={"15px 15px"}
                        margin={"0px"}
                        className="Link"
                        borderRadius="0px"
                        onClick={handleDropDown}
                        icon={<InsertLinkOutlinedIcon />}></Li>
                      <div
                        className="
                        transition duration-[0.4s]
                        flex justify-start items-center gap-[10px] cursor-pointer
                        p-[15px]
                        text-[#333] 
                        hover:bg-hover-color
                        hover:text-[#fff]
                      "
                        onClick={logOut}>
                        <Icon icon={<LogoutIcon />} />
                        <span> LogOut </span>
                      </div>
                    </Ul>
                  </Nav>
                </div>
                <div
                  className="fixed top-0 left-0 w-full h-full z-[999] bg-[rgba(255,255,255,0.1)]"
                  onClick={handleDropDown}></div>
              </>
            ) : null}
          </div>
          <div className="h-[calc(100vh-70px)] w-full mx-auto p-0 overflow-y-auto relative">
            <Outlet />
            {/* <CopyRight /> */}
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
            bgColor={"bg-main-color"}
            bgHover={"bg-hover-color"}
            color={"#fff"}
            fontSize={""}
            onClick={handlerShowNav}
          />
        </div>
      </div>
      <style>
        {`
          div.drop-down-menu-container{
            position: absolute;
            top: 75px;
            right: 20px;
            border-radius: 5px;
            overflow : hidden;
            width : 180px;
            height : auto;
            background-color: #fff;
            z-index : 10001;
            box-shadow : 0px 3px 20px 0px rgba(115,115,115,0.2) ,0px 3px 20px 0px rgba(115,115,115,0.2) ;
            animation: drop 0.5s
          }
          @keyframes drop {
            from {transform: translateY(-30px);}
            to {transform: translateY(0px)}
          }
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
