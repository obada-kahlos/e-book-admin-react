import React, { useState, useRef, useEffect } from "react";
import Button from "../../component/shared/button/ui/button";
import Input from "../../component/shared/input/ui/input";
import Table from "../../component/shared/table/ui/table";
import Tbody from "../../component/shared/table/ui/tbody";
import Td from "../../component/shared/table/ui/td";
import Th from "../../component/shared/table/ui/th";
import Thead from "../../component/shared/table/ui/thead";
import Tr from "../../component/shared/table/ui/tr";
import Popup from "../../component/popup/ui/popup";

import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { BooksData } from "./book-data";
import { Pagination } from "@mui/material";

import * as yup from "yup";
import TextArea from "../../component/shared/textarea/ui/textarea";

const Books = () => {
  // open popup
  const [popup, setPopup] = useState(false);
  const handleOpenPopup = () => {
    setPopup((prev) => !prev);
  };

  // pagination
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const personSchema = yup.object().shape({
    bookname: yup
      .string()
      .matches(/^[a-zA-Z ]*$/, "Must be character")
      .max(20, "Must be less than 20")
      .required("This field is required"),
    author: yup
      .string()
      .max(20, "max length is 20")
      .required("This field is required"),
    publisher: yup
      .string()
      .max(20, "max length is 20")
      .required("This field is required"),
    numberofpages: yup
      .string()
      .max(20, "max length is 20")
      .required("This field is required"),
      description : yup.string().max(250, 'Must be less than 250').required("This field is required"),
  });

  // const textareaRef = useRef<any>(null);
  // const [currentValue, setCurrentValue ] = useState("");// you can manage data with it
  // useEffect(() => {
  //     textareaRef.current.style.height = "120px";
  //     const scrollHeight = textareaRef.current.scrollHeight;
  //     textareaRef.current.style.height = scrollHeight + "px";
  // }, [currentValue]);
  //     <textarea
  //     className="w-[100%] p-[10px] border border-[#ccc] resize-none"
  //     ref={textareaRef}
  //     value={currentValue}
  //     onChange={e=>{
  //     setCurrentValue(e.target.value);
  //     }}
  // />

  return (
    <div className="my-[30px] sm:p-4 px-2">
      <div className="flex justify-between items-end gap-1">
        <Input
          className="search"
          icon={<SearchIcon sx={{ color: "#5b5a5a" }} />}
          name={"search"}
          type={"text"}
          placeholder={"What are you looking for..."}
          id={"search"}
          width={"70%"}
          margin={"0px"}
          padding={"8px 16px"}
          borderradius={"5px"}
          border={"1px solid #ccc"}
          bgcolor={""}
          color={"#5b5a5a"}
          fontSize={"16px"}
          lable={"search"}
        />
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
      <p className="text-center mt-[20px]"> PAGE : {page} </p>
      <div className="md:w-[100%] my-[20px] overflow-x-auto">
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
      <div className="flex justify-center items-center my-[10px]">
        <Pagination
          count={10}
          page={page}
          onChange={handleChange}
          size="small"
        />
      </div>
      <Popup
        header={{
          title: "Add-Book",
        }}
        icon={
          <CloseIcon
            sx={{ fontSize: "24px", cursor: "pointer", color: "#726c6c" }}
          />
        }
        onClick={handleOpenPopup}
        width={"650px"}
        height={"400px"}
        bgClor={"#fff"}
        borderRadius={"10px"}
        top={"50%"}
        left={"50%"}
        right={"0"}
        bottom={"0"}
        isOpen={popup}
      >
        <div className="p-2">
          <Formik
            initialValues={{
              bookname: "",
              author: "",
              publisher: "",
              numberofpages: "",
              description : "",
              image : "",
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
            validationSchema={personSchema}
          >
            <Form>
              <div className="grid grid-span-12">
                <div className="grid grid-cols-12 gap-4">
                  <>
                    {BooksData.map((item, key) => (
                      <div className="md:col-span-6 col-span-12" key={key}>
                        <Field
                          as={Input}
                          className={item.className}
                          name={item.name}
                          placeholder={item.placeholder}
                          id={item.id}
                          width={item.width}
                          margin={item.margin}
                          padding={item.padding}
                          borderradius={item.borderradius}
                          border={item.border}
                          bgcolor={item.bgcolor}
                          color={item.color}
                          fontSize={item.fontSize}
                          lable={item.lable}
                          type={item.type}
                        />
                        <ErrorMessage
                          name={item.name}
                          render={(msg) => (
                            <p className="text-[red] text-[14px]">{msg}</p>
                          )}
                        />
                      </div>
                    ))}
                    <div className="md:col-span-12 col-span-12">
                      <Field
                        as={TextArea}
                        className={'description'}
                        name={"description"}
                        placeholder={"description here..."}
                        id={""}
                        width={"100%"}
                        height={'120px'}
                        margin={"0px"}
                        padding={"10px"}
                        borderradius={"5px"}
                        border={"1px solid #ccc"}
                        bgcolor={"#fff"}
                        color={"#5b5a5a"}
                        fontSize={"16px"}
                      />
                      <ErrorMessage
                        name={'description'}
                        render={(msg) => (
                          <p className="text-[red] text-[14px]">{msg}</p>
                        )}
                      />
                    </div>
                  </>
                </div>
                <div className="flex justify-center items-center mt-[10px] mb-[30px]">
                  <Button
                    className={"add-book"}
                    buttonText={"Submit"}
                    padding={"8px 30px"}
                    margin={"0px"}
                    borderRadius={"30px"}
                    bgColor={"#0d6289"}
                    bgHover={"#003f5c"}
                    color={"#fff"}
                    fontSize={"16px"}
                    width={"40%"}
                  />
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </Popup>
    </div>
  );
};

export default Books;
