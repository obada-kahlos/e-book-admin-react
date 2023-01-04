import React, { ReactEventHandler, useState } from "react";
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
import { selectData, BooksData } from "./book-data";
import { Pagination } from "@mui/material";

import * as yup from "yup";
import TextArea from "../../component/shared/textarea/ui/textarea";

import Image from "../../component/shared/image/ui/image";
import Icon from "../../component/shared/icon/ui/icon";

import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import { IconButton } from "@mui/material";

import testIamge from "../../assets/testing-image.jpg";
import ActionButton from "../../component/action-buttom/ui/action-button";
import {
  useAddBooksMutation,
  useDeleteBooksMutation,
  useGetBooksQuery,
} from "../../api/books/books";
import Select from "../../component/shared/select/ui/select";
import MuiSelect from "../../component/mui-select/mui-select";
import MenuItem from "@mui/material/MenuItem";

import { SelectChangeEvent } from "@mui/material/Select";
import { useGetAuterQuery } from "../../api/author/author";
import Alert from "../../component/alert/ui/alert";

const Books = () => {
  // open popup
  const [popup, setPopup] = useState(false);
  const handleOpenPopup = () => {
    setPopup((prev) => !prev);
  };

  // pagination from Mui with handle change
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  /// schema for add books
  const schema = yup.object().shape({
    bookname: yup
      .string()
      .matches(/^[a-zA-Z ]*$/, "Must be character")
      .max(20, "Must be less than 20")
      .required("This field is required"),
    publisher: yup
      .string()
      .max(20, "max length is 20")
      .required("This field is required"),
    numberofpages: yup
      .string()
      .matches(/[1-9]/, "Just Number")
      .required("This field is required"),
    description: yup
      .string()
      .max(250, "Must be less than 250")
      .required("This field is required"),
    price: yup
      .string()
      .matches(/[1-9]/, "Just Number")
      .required("This field is required"),
    language: yup.string().required("This field is required"),
    genre: yup.string().required("This field is required"),
  });

  /// state for image + handle change for get image from input and transform it to Base64  
  const [uploadedImage, setUploadedImage] = useState<any>(undefined);
  const onUploadFile = (event: any) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        const image = reader.result;
        setUploadedImage(image);
      });
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleClick = () => {};

  /// get books data api 
  const { data: getBooks } = useGetBooksQuery({});

  /// handle change from mui for multi Select + state 
  const [authors, setAuthors] = React.useState<string[]>([]);
  const handleChangeSelect = (event: SelectChangeEvent<typeof authors>) => {
    const {
      target: { value },
    } = event;
    setAuthors(typeof value === "string" ? value.split(",") : value);
  };

  /// get author data api and passing to multi select component 
  const { data: getAuther } = useGetAuterQuery({});

  /// add book fun (pass values and authors and image to useAddBooksMutation)
  const [addBook] = useAddBooksMutation();
  const handleAddBook = (values: any) => {
    addBook({ ...values, uploadedImage, authors });
    console.log({ ...values, uploadedImage, authors });
  };

  /// delete author + popup for delete author + state to get book's id
  const [deleteBook] = useDeleteBooksMutation();
  const [openAlert, setOpenAlert] = useState(false);
  const [authorId, setAuthorId] = useState(null);
  const handleDeleteAuthor = () => {
    deleteBook(authorId);
    setOpenAlert(false);
  };

  return (
    <>
      <Alert
        isOpen={openAlert}
        onClose={() => {
          setOpenAlert(false);
        }}
        onAction={() => {
          handleDeleteAuthor();
        }}
      />
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
            onClick={handleOpenPopup}
          />
        </div>
        <div className="md:w-[100%] my-[20px] overflow-x-auto">
          <Table width="100%">
            <Thead>
              <Tr>
                <Th
                  text={"Id"}
                  color={"#fff"}
                  fontSize={"15px"}
                  fontWeight={"600"}
                  padding={"10px 15px"}
                  margin={"0px"}
                  textAlign={"center"}
                  bgColor={"bg-main-color"}
                  className={"book-id"}
                  minWidth={"0px"}
                />
                <Th
                  text={"Book Image"}
                  color={"#fff"}
                  fontSize={"15px"}
                  fontWeight={"600"}
                  padding={"10px 15px"}
                  margin={"0px"}
                  textAlign={"center"}
                  bgColor={"bg-main-color"}
                  className={"booksName"}
                />
                <Th
                  text={"Book Name"}
                  color={"#fff"}
                  fontSize={"15px"}
                  fontWeight={"600"}
                  padding={"10px 15px"}
                  margin={"0px"}
                  textAlign={"center"}
                  bgColor={"bg-main-color"}
                  className={"booksName"}
                />
                <Th
                  text={"Auther Name"}
                  color={"#fff"}
                  fontSize={"15px"}
                  fontWeight={"600"}
                  padding={"10px 15px"}
                  margin={"0px"}
                  textAlign={"center"}
                  bgColor={"bg-main-color"}
                  className={"autherName"}
                />
                <Th
                  text={"Genre"}
                  color={"#fff"}
                  fontSize={"15px"}
                  fontWeight={"600"}
                  padding={"10px 15px"}
                  margin={"0px"}
                  textAlign={"center"}
                  bgColor={"bg-main-color"}
                  className={"bla"}
                />
                <Th
                  text={"Puplisher"}
                  color={"#fff"}
                  fontSize={"15px"}
                  fontWeight={"600"}
                  padding={"10px 15px"}
                  margin={"0px"}
                  textAlign={"center"}
                  bgColor={"bg-main-color"}
                  className={"puplisher"}
                />
                <Th
                  text={"Languages"}
                  color={"#fff"}
                  fontSize={"15px"}
                  fontWeight={"600"}
                  padding={"10px 15px"}
                  margin={"0px"}
                  textAlign={"center"}
                  bgColor={"bg-main-color"}
                  className={"languages"}
                />
                <Th
                  text={"Price"}
                  color={"#fff"}
                  fontSize={"15px"}
                  fontWeight={"600"}
                  padding={"10px 15px"}
                  margin={"0px"}
                  textAlign={"center"}
                  bgColor={"bg-main-color"}
                  className={"price"}
                />
                <Th
                  text={"Number Of pages"}
                  color={"#fff"}
                  fontSize={"15px"}
                  fontWeight={"600"}
                  padding={"10px 15px"}
                  margin={"0px"}
                  textAlign={"center"}
                  bgColor={"bg-main-color"}
                  className={"Number-Of-Pages"}
                />
                <Th
                  text={"Publication date"}
                  color={"#fff"}
                  fontSize={"15px"}
                  fontWeight={"600"}
                  padding={"10px 15px"}
                  margin={"0px"}
                  textAlign={"center"}
                  bgColor={"bg-main-color"}
                  className={"publication-date"}
                />
                <Th
                  text={"Description"}
                  color={"#fff"}
                  fontSize={"15px"}
                  fontWeight={"600"}
                  padding={"10px 15px"}
                  margin={"0px"}
                  textAlign={"center"}
                  bgColor={"bg-main-color"}
                  className={"description"}
                />
                <Th
                  text={"Actions"}
                  color={"#fff"}
                  fontSize={"15px"}
                  fontWeight={"600"}
                  padding={"10px 15px"}
                  margin={"0px"}
                  textAlign={"center"}
                  bgColor={"bg-main-color"}
                  className={"Actions"}
                  minWidth={"0px"}
                />
              </Tr>
            </Thead>
            <Tbody>
              {getBooks?.map((item: any, key: any) => (
                <Tr>
                  <Td
                    color={"#333"}
                    fontSize={"16px"}
                    fontWeight={""}
                    padding={""}
                    margin={""}
                    textAlign={"left"}
                  >
                    <span> {item?.id} </span>
                  </Td>
                  <Td
                    color={""}
                    fontSize={""}
                    fontWeight={""}
                    padding={""}
                    margin={""}
                    textAlign={""}
                  >
                    <div className="flex items-center justify-center">
                      <Image
                        className={""}
                        src={testIamge}
                        alt={""}
                        width={"80px"}
                        height={"80px"}
                        borderRaduis={""}
                      />
                    </div>
                  </Td>
                  <Td
                    color={"#333"}
                    fontSize={"16px"}
                    fontWeight={""}
                    padding={""}
                    margin={""}
                    textAlign={"left"}
                  >
                    <span> {item?.title} </span>
                  </Td>
                  <Td
                    color={"#333"}
                    fontSize={"16px"}
                    fontWeight={""}
                    padding={""}
                    margin={""}
                    textAlign={"left"}
                  >
                    <>
                      {item?.authors.length > 0 ? (
                        <div>
                          {item?.authors.map((item: any, key: any) => (
                            <span> {item.name} </span>
                          ))}
                        </div>
                      ) : (
                        "Aunknow Author"
                      )}
                    </>
                  </Td>
                  <Td
                    color={"#333"}
                    fontSize={"16px"}
                    fontWeight={""}
                    padding={""}
                    margin={""}
                    textAlign={"left"}
                  >
                    <span> {item.genres.name}</span>
                  </Td>
                  <Td
                    color={"#333"}
                    fontSize={"16px"}
                    fontWeight={""}
                    padding={""}
                    margin={""}
                    textAlign={"left"}
                  >
                    <span> {item.publishers} </span>
                  </Td>
                  <Td
                    color={"#333"}
                    fontSize={"16px"}
                    fontWeight={""}
                    padding={""}
                    margin={""}
                    textAlign={"left"}
                  >
                    <span> {item.languages} </span>
                  </Td>
                  <Td
                    color={"#333"}
                    fontSize={"16px"}
                    fontWeight={""}
                    padding={""}
                    margin={""}
                    textAlign={"left"}
                  >
                    <span> {item.price} </span>
                  </Td>
                  <Td
                    color={"#333"}
                    fontSize={"16px"}
                    fontWeight={""}
                    padding={""}
                    margin={""}
                    textAlign={"left"}
                  >
                    <span> {item.numberPages} </span>
                  </Td>
                  <Td
                    color={"#333"}
                    fontSize={"16px"}
                    fontWeight={""}
                    padding={""}
                    margin={""}
                    textAlign={"left"}
                  >
                    <span> {item.publicationDate.slice(0, 10)} </span>
                  </Td>
                  <Td
                    color={"#333"}
                    fontSize={"16px"}
                    fontWeight={""}
                    padding={""}
                    margin={""}
                    textAlign={"left"}
                  >
                    <span> {item.description.slice(0, 60)} </span>
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
                          <DeleteOutlineOutlinedIcon sx={{ color: "#333" }} />
                        ),
                        onClick: () => {
                          setOpenAlert(true);
                          setAuthorId(item.id);
                        },
                      }}
                      editIcon={{
                        icon: <ModeEditOutlinedIcon sx={{ color: "#333" }} />,
                        onClick: handleClick,
                      }}
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </div>
        <div className="flex justify-center items-center">
          <Pagination
            count={10}
            page={page}
            onChange={handleChange}
            size="small"
          />
        </div>
        <Popup
          headerTitle="Add Book"
          translate={"translate(-50% , -50%)"}
          onClick={handleOpenPopup}
          width={"650px"}
          height={"500px"}
          bgClor={"#fff"}
          borderRadius={"10px"}
          top={"50%"}
          left={"50%"}
          right={"0"}
          bottom={"0"}
          isOpen={popup}
          paddingBodyBottom={"60px"}
          className="add-book"
          zIndex="1002"
        >
          <div className="p-2">
            <Formik
              enableReinitialize
              initialValues={{
                bookname: "",
                publisher: "",
                numberofpages: "",
                description: "",
                price: "",
                language: "",
                genre: "",
              }}
              onSubmit={(values) => {
                handleAddBook(values);
              }}
              validationSchema={schema}
            >
              <Form>
                <div className="grid grid-span-12">
                  <div className="grid grid-cols-12 gap-4">
                    <>
                      {BooksData.map((item, key) => (
                        <div className="md:col-span-6 col-span-12" key={key}>
                          <Field
                            key={key}
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
                      {selectData.map((item, key) => {
                        <div className="md:col-span-6 col-span-12">
                          <Field
                            as={Select}
                            className={item.className}
                            lable={item.lable}
                            name={item.name}
                            id={item.id}
                            width={item.width}
                            margin={item.margin}
                            padding={item.padding}
                            borderradius={item.borderradius}
                            border={item.border}
                            bgcolor={item.bgcolor}
                            color={item.color}
                            fontSize={item.fontSize}
                          >
                            <option>Choise Language</option>
                            {
                              item.options.map((option , key)=>(
                                <option key={key} value={key}> {option.value} </option>
                              ))
                            }
                          </Field>
                          <ErrorMessage
                            name={item.name}
                            render={(msg) => (
                              <p className="text-[red] text-[14px]">{msg}</p>
                            )}
                          />
                        </div>;
                      })}
                      <div className="md:col-span-12 col-span-12">
                        <label className="text-[#5b5a5a] block">Authors</label>
                        <MuiSelect
                          handleChange={handleChangeSelect}
                          option={getAuther}
                          state={authors}
                          label={'Authors'}
                          placeholder={'Authors...'}
                        />
                      </div>
                      <div className="md:col-span-12 col-span-12 ">
                        <Input
                          className={"add-image"}
                          placeholder={"Add Image"}
                          id={""}
                          width={"100%"}
                          margin={""}
                          padding={"8px 5px"}
                          borderradius={"4px"}
                          border={"1px solid #ccc"}
                          bgcolor={""}
                          color={"#5b5a5a"}
                          fontSize={""}
                          lable={"Image"}
                          type={"file"}
                          onChange={onUploadFile}
                        />
                      </div>
                      <div className="md:col-span-12 col-span-12">
                        <Field
                          as={TextArea}
                          className={"description"}
                          name={"description"}
                          placeholder={"description here..."}
                          id={""}
                          width={"100%"}
                          height={"120px"}
                          margin={"0px"}
                          padding={"10px"}
                          borderradius={"5px"}
                          border={"1px solid #ccc"}
                          bgcolor={"#fff"}
                          color={"#5b5a5a"}
                          fontSize={"16px"}
                        />
                        <ErrorMessage
                          name={"description"}
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
                      bgColor={"bg-main-color"}
                      bgHover={"bg-hover-color"}
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

        {uploadedImage && (
          <Popup
            headerTitle=""
            translate={""}
            width={"335px"}
            height={"200px"}
            bgClor={"#fff"}
            borderRadius={"0px"}
            top={"0px"}
            left={""}
            right={"0px"}
            bottom={""}
            isOpen={popup}
            padding="10px"
            paddingBodyBottom="20px"
            className="showImage"
            zIndex="1001"
          >
            <div className="">
              <Image
                src={uploadedImage}
                alt={"image"}
                width={"100%"}
                height={"100%"}
                borderRaduis={""}
                className={"add-image"}
              />
            </div>
          </Popup>
        )}
      </div>
    </>
  );
};

export default Books;
