import { Formik, Form, Field } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../component/shared/button/ui/button";
import Input from "../../component/shared/input/ui/input";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

import registerTow from '../../assets/register-tow.jpg'


const Auth = () => {
  const [isPassword, setIsPassWord] = useState(false);
  const handleShowPasswWord = () => {
    setIsPassWord((prev) => !prev);
  };
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="xl:col-span-6 lg:col-span-8 col-span-12 h-screen min-h-[600px] w-[100%] lg:px-20 sm:px-12 px-1 flex justify-center items-center flex-col bg-[#F6F7FC]">
          <div className="md:w-[70%] w-[100%]">
            <div className="mb-4">
              <p className="text-[#333] sm:text-[26px] text-[22px] font-[400]">
                Login to <strong> Books </strong>
              </p>
              <p className="text-secondary-colour text-[20px] mb-4 font-[500]">
                Read 1000 books and Walk 1000 miles
              </p>
            </div>
            <Formik
              initialValues={{
                password: "",
                username: "",
              }}
              onSubmit={(values) => {
                console.log(values);
              }}
              
            >
              <Form>
                <Field
                  as={Input}
                  placeholder={"Username"}
                  id={"username"}
                  width={"100%"}
                  margin={"20px 0px"}
                  padding={"10px 10px 10px 40px"}
                  borderradius={"6px"}
                  border={"1px solid #ccc"}
                  bgcolor={""}
                  color={"#333"}
                  fontSize={"18px"}
                  lable={"Username"}
                  name={"username"}
                  className={"username"}
                  type={"text"}
                  icon={<PersonOutlineOutlinedIcon sx={{ color: "#333" }} />}
                />
                <Input
                  placeholder={"Password"}
                  id={"password"}
                  width={"100%"}
                  margin={"20px 0px"}
                  padding={"10px 10px 10px 40px"}
                  borderradius={"6px"}
                  border={"1px solid #ccc"}
                  bgcolor={""}
                  color={"#333"}
                  fontSize={"18px"}
                  lable={"Password"}
                  name={"password"}
                  className={"password"}
                  type={isPassword ? "text" : "password"}
                  icon={<HttpsOutlinedIcon sx={{ color: "#333" }} />}
                  passwordIcon={{
                    icon: isPassword ? (
                      <VisibilityOffOutlinedIcon sx={{ color: "#333" }} />
                    ) : (
                      <RemoveRedEyeOutlinedIcon sx={{ color: "#333" }} />
                    ),
                    onClick: handleShowPasswWord,
                  }}
                />
                <Button
                  className={"login-button"}
                  buttonText={"Log In"}
                  width={"100%"}
                  padding={"10px 15px"}
                  margin={"30px 0px 10px 0px"}
                  borderRadius={"6px"}
                  bgColor={"bg-main-color"}
                  color={"#fff"}
                  fontSize={"18px"}
                  bgHover={"bg-hover-color"}
                />
                <div className="flex justify-between items-center">
                  <p className="text-secondary-colour cursor-pointer font-bold"> Forgot Password </p>
                  <p className="text-secondary-colour cursor-pointer font-bold"> Do't have an account!1
                  <Link to='/dashbord/info'>
                    <span className="text-main-color"> Create One</span>
                  </Link> 
                  </p>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
        <div className="xl:col-span-6 lg:col-span-4 col-span-12 min-h-[600px] h-screen bg-[blue] bg-image relative">
          <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.6)]"></div>
        </div>
      </div>
      <style>
        {`
          .bg-image{
            background : url(${registerTow}) no-repeat center center ;
            background-size:cover ;
          }
        `}
      </style>
    </>
  );
};

export default Auth;
