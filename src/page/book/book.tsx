import React, { ReactEventHandler, useEffect, useState } from "react";
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
import { BooksData, TheadDate } from "./book-data";
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
  useGetGenresQuery,
  useGetLanguagesQuery,
  useGetPublishersQuery,
  useUpdateBooksMutation,
} from "../../api/books/books";
import Select from "../../component/shared/select/ui/select";
import MenuItem from "@mui/material/MenuItem";

import { SelectChangeEvent } from "@mui/material/Select";
import {
  useAddAuthorMutation,
  useGetAuterQuery,
} from "../../api/author/author";
import Alert from "../../component/alert/ui/alert";
import { toastStatus } from "../../utils/Toastify/toastify";
import SectionLoading from "../../component/loader/section-loading";
import Loader from "../../component/loader/loader";
import MultiSelect from "../../component/react-select/react-select";

const Books = () => {
  /// schema for add books
  const schema = yup.object().shape({
    title: yup
      .string()
      .matches(/^[a-zA-Z ]*$/, "Must be character")
      .max(20, "Must be less than 20")
      .required("This field is required"),
    numberPages: yup
      .string()
      .matches(/[1-9]/, "Just Number")
      .required("This field is required"),
    quantity: yup
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
    publishers: yup.string().required("This field is required"),
    languages: yup.string().required("This field is required"),
    genreType: yup.string().required("This field is required"),
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

  /// get books data api
  const [page, setPage] = React.useState(1);
  const { data: getBooks, isLoading: isLoadingBook } = useGetBooksQuery(page);
  console.log({ getBooks });
  // pagination from Mui with handle change
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  /// handle change from mui for multi Select + state
  const [authors, setAuthors] = React.useState<any>([]);

  /// get author data api and passing to multi select component

  // author box, create new author + add post of author
  const { data: getAutherData, isLoading: isLoadingGetAuthor } =
    useGetAuterQuery({});
  const [addAuthor] = useAddAuthorMutation();
  const createOption = (label: string) => ({
    label,
    value: label.toLowerCase().replace(/\W/g, " "),
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [options, setOptions] = useState<any>([]);
  const [tagValue, setAuthorValue] = useState<any>([]);
  const handleCreate = (inputValue: string) => {
    setIsLoading(true);
    setTimeout(() => {
      const newOption = createOption(inputValue);
      setIsLoading(false);
      addAuthor({ name: newOption.value });
      setOptions((prev: any) => {
        return [...prev, newOption];
      });
      setAuthorValue((prev: any) => {
        return [...prev, newOption];
      });
    }, 1500);
  };
  const authorToBook = tagValue.map((item: any) => item.id);

  /// add book
  const [
    addBook,
    { isSuccess, reset: resetAdd, error: addBookError, isError },
  ]: any = useAddBooksMutation();
  const handleAddBook = (values: any) => {
    addBook({
      title: values.title,
      description: values.description,
      publisherId: values.publishers,
      numberPages: values.numberPages,
      price: values.price,
      languagesId: values.languages,
      genreId: values.genreType,
      quantity: values.quantity,
      authors: authorToBook,
      image: uploadedImage,
    });
    isError ? setPopup(true) : setPopup(false);
    isError ? setUploadedImage(uploadedImage) : setUploadedImage(undefined);
    isError ? setAuthorValue(authors) : setAuthorValue([]);
  };

  /// update book
  const [
    updateBook,
    { isSuccess: isUpdated, reset: resetUpdate, isError: isErrorUpdateBook },
  ] = useUpdateBooksMutation();

  const [getBookById, setGetBookById] = useState<any>(null);
  const getBookId = (id: number) => {
    const selectedBook = getBooks?.response?.find(
      (item: any) => item.id === id
    );
    setGetBookById((prev: any) => {
      return { ...prev, ...selectedBook };
    });
  };

  const handleUpdateBook = (values: any) => {
    updateBook({
      title: values.title,
      description: values.description,
      publisherId: values.publishers,
      numberPages: values.numberPages,
      price: values.price,
      languagesId: values.languages,
      genreId: values.genreType,
      id: getBookById?.id,
      authors: authorToBook,
      image: uploadedImage ? uploadedImage : getBookById?.image,
    });
    isErrorUpdateBook ? setPopup(true) : setPopup(false);
    isErrorUpdateBook
      ? setUploadedImage(uploadedImage)
      : setUploadedImage(undefined);
    isErrorUpdateBook ? setAuthors(authors) : setAuthors([]);
    setGetBookById(null);
  };

  /// delete book + popup for book author + state to get book's id
  const [deleteBook, { isSuccess: isDeleted, reset: resetDelete }] =
    useDeleteBooksMutation();
  const [openAlert, setOpenAlert] = useState(false);
  const [authorId, setAuthorId] = useState(null);
  const handleDeleteAuthor = () => {
    deleteBook(authorId);
    setOpenAlert(false);
  };

  /// alert on action add + update + delete + error
  useEffect(() => {
    if (isSuccess) {
      toastStatus("isSuccess", "Added successfully");
    }
    if (isDeleted) {
      toastStatus("isDeleted", "Deleted successfully");
    }
    if (isUpdated) {
      toastStatus("isSuccess", "Updated successfully");
    }
    resetDelete();
    resetUpdate();
    resetAdd();
  }, [isSuccess, isDeleted, isUpdated]);
  // data foor add books

  const { data: getGenres } = useGetGenresQuery({});
  const { data: getLanguages } = useGetLanguagesQuery({});
  const { data: publishers, isLoading: isLoadingPublishers } =
    useGetPublishersQuery({});

  // const result = useGetPublishersQuery({});
  // open popup
  const [popup, setPopup] = useState(false);
  const handleOpenPopup = () => {
    setPopup((prev) => !prev);
    setGetBookById(null);
    setUploadedImage(undefined);
    setAuthors([]);
  };

  /// search
  const [searchBook, setSearchBook] = useState("");
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchBook(event.target.value);
  };

  return (
    <>
      {isLoadingBook ? (
        <Loader />
      ) : (
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
            {getBooks?.response?.length > 0 ? (
              <>
                <div className="flex justify-between items-end gap-4">
                  <div className="w-8/12">
                    <Input
                      className="search"
                      icon={<SearchIcon sx={{ color: "#5b5a5a" }} />}
                      name={"search"}
                      type={"text"}
                      placeholder={"Find Book"}
                      id={"search"}
                      width={"80%"}
                      margin={"0px"}
                      padding={"8px 16px 8px 40px"}
                      borderradius={"20px"}
                      border={"1px solid #ccc"}
                      bgcolor={""}
                      color={"#5b5a5a"}
                      fontSize={"16px"}
                      lable={""}
                      onChange={handleSearch}
                    />
                  </div>
                  <Button
                    className={"add"}
                    buttonText={"Add Book"}
                    width={"180px"}
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
                <div className="flex justify-center items-center mt-[5px]">
                  <h1>
                    Total Books :{" "}
                    <strong> {getBooks?.response?.length} </strong>
                  </h1>
                </div>
                <Table width="100%">
                  <Thead>
                    <Tr>
                      {TheadDate.map((item, key) => (
                        <Th
                          key={key}
                          text={item}
                          color={"#fff"}
                          fontSize={"15px"}
                          fontWeight={"600"}
                          padding={"10px 15px"}
                          margin={"0px"}
                          textAlign={"center"}
                          bgColor={"bg-main-color"}
                          className={"book-id"}
                        />
                      ))}
                    </Tr>
                  </Thead>
                  <Tbody>
                    {getBooks?.response
                      ?.filter((value: any) => {
                        if (searchBook === "") {
                          return value;
                        } else if (
                          value.title
                            .toLowerCase()
                            .includes(searchBook.toLocaleLowerCase())
                        ) {
                          return value;
                        }
                      })
                      .map((item: any, key: any) => (
                        <Tr key={key}>
                          <Td
                            color={"#333"}
                            fontSize={"16px"}
                            fontWeight={""}
                            padding={""}
                            margin={""}
                            textAlign={"left"}>
                            <span> {item?.id} </span>
                          </Td>
                          <Td
                            color={""}
                            fontSize={""}
                            fontWeight={""}
                            padding={""}
                            margin={""}
                            textAlign={""}>
                            <div className="flex items-center justify-center">
                              <Image
                                className={"book-image"}
                                src={item?.image}
                                alt={item?.title}
                                width={"180px"}
                                height={"240px"}
                                borderRadius={""}
                              />
                            </div>
                          </Td>
                          <Td
                            color={"#333"}
                            fontSize={"16px"}
                            fontWeight={""}
                            padding={""}
                            margin={""}
                            textAlign={"left"}>
                            <span> {item?.title} </span>
                          </Td>
                          <Td
                            color={"#333"}
                            fontSize={"16px"}
                            fontWeight={""}
                            padding={""}
                            margin={""}
                            textAlign={"left"}>
                            <>
                              {item?.authors?.length > 0 ? (
                                <div>
                                  {item?.authors?.map((item: any, key: any) => (
                                    <span key={key}> {item}, </span>
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
                            textAlign={"left"}>
                            <span> {item?.genreType}</span>
                          </Td>
                          <Td
                            color={"#333"}
                            fontSize={"16px"}
                            fontWeight={""}
                            padding={""}
                            margin={""}
                            textAlign={"left"}>
                            <span> {item.publishers} </span>
                          </Td>
                          <Td
                            color={"#333"}
                            fontSize={"16px"}
                            fontWeight={""}
                            padding={""}
                            margin={""}
                            textAlign={"left"}>
                            <span> {item?.language} </span>
                          </Td>
                          <Td
                            color={"#333"}
                            fontSize={"16px"}
                            fontWeight={""}
                            padding={""}
                            margin={""}
                            textAlign={"left"}>
                            <span> {item?.price} </span>
                          </Td>
                          <Td
                            color={"#333"}
                            fontSize={"16px"}
                            fontWeight={""}
                            padding={""}
                            margin={""}
                            textAlign={"left"}>
                            <span> {item?.numberPages} </span>
                          </Td>
                          <Td
                            color={"#333"}
                            fontSize={"16px"}
                            fontWeight={""}
                            padding={""}
                            margin={""}
                            textAlign={"left"}>
                            <span> {item?.quantity} </span>
                          </Td>
                          <Td
                            color={"#333"}
                            fontSize={"16px"}
                            fontWeight={""}
                            padding={""}
                            margin={""}
                            textAlign={"left"}>
                            <span> {item?.publicationDate} </span>
                          </Td>
                          <Td
                            color={"#333"}
                            fontSize={"16px"}
                            fontWeight={""}
                            padding={""}
                            margin={""}
                            textAlign={"left"}>
                            <span> {item?.description.slice(0, 120)} </span>
                          </Td>
                          <Td
                            color={"#333"}
                            fontSize={"15px"}
                            fontWeight={"500"}
                            padding={"10px 15px"}
                            margin={"0px"}
                            textAlign={"left"}>
                            <ActionButton
                              deleteIcon={{
                                icon: (
                                  <DeleteOutlineOutlinedIcon
                                    sx={{ color: "#333" }}
                                  />
                                ),
                                onClick: () => {
                                  setOpenAlert(true);
                                  setAuthorId(item.id);
                                },
                              }}
                              editIcon={{
                                icon: (
                                  <ModeEditOutlinedIcon
                                    sx={{ color: "#333" }}
                                  />
                                ),
                                onClick: () => {
                                  setPopup(true);
                                  getBookId(item?.id);
                                },
                              }}
                            />
                          </Td>
                        </Tr>
                      ))}
                  </Tbody>
                </Table>
                <div className="flex justify-center items-center">
                  <Pagination
                    count={getBooks?.metaData?.totalPage}
                    page={page}
                    onChange={handleChange}
                    size="small"
                  />
                </div>
              </>
            ) : (
              <div className="flex justify-center items-center flex-col mt-[20px]">
                <p className="text-[#555] text-[30px] mb-[10px] block">
                  There is no book!
                </p>
                <p
                  onClick={handleOpenPopup}
                  className="text-main-color font-bold text-[18px] cursor-pointer">
                  Add One?
                </p>
              </div>
            )}

            <Popup
              headerTitle={getBookById ? "Update Book" : "Add Book"}
              translate={"translate(-50% , -50%)"}
              onClick={handleOpenPopup}
              width={"750px"}
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
              zIndex="1002">
              {isLoadingPublishers ? (
                <div className="absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4">
                  <SectionLoading />
                </div>
              ) : (
                <div className="p-2">
                  <Formik
                    enableReinitialize
                    initialValues={
                      getBookById
                        ? {
                            title: getBookById?.title,
                            publishers: getBookById?.publishers,
                            numberPages: getBookById?.numberPages,
                            description: getBookById?.description,
                            price: getBookById?.price,
                            languages: getBookById?.language,
                            genreType: getBookById?.genreType,
                            quantity: getBookById?.quantity,
                          }
                        : {
                            title: "",
                            publishers: "",
                            numberPages: "",
                            description: "",
                            price: "",
                            languages: "",
                            genreType: "",
                            quantity: "",
                          }
                    }
                    onSubmit={(values) => {
                      getBookById
                        ? handleUpdateBook(values)
                        : handleAddBook(values);
                    }}
                    validationSchema={schema}>
                    <Form>
                      <div className="grid grid-span-12">
                        <div className="grid grid-cols-12 gap-4">
                          <>
                            {BooksData.map((item, key) => (
                              <div
                                className="md:col-span-6 col-span-12"
                                key={key}>
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
                                    <p className="text-[red] text-[14px]">
                                      {msg}
                                    </p>
                                  )}
                                />
                              </div>
                            ))}
                            <div className="md:col-span-6 col-span-12">
                              <Field
                                as={Select}
                                className={"get-genres"}
                                lable={"Genres"}
                                name={"genreType"}
                                id={""}
                                width={"100%"}
                                margin={"0px"}
                                padding={"8px 5px"}
                                borderradius={"4px"}
                                border={"1px solid #ccc"}
                                bgcolor={"#fff"}
                                color={"#5b5a5a"}
                                fontSize={"16px"}>
                                <option>Choise Genres</option>
                                {getGenres
                                  ? getGenres?.map((option: any, key: any) => (
                                      <option key={key} value={option.id}>
                                        {option.name}
                                      </option>
                                    ))
                                  : null}
                              </Field>
                              <ErrorMessage
                                name={"genreType"}
                                render={(msg) => (
                                  <p className="text-[red] text-[14px]">
                                    {msg}
                                  </p>
                                )}
                              />
                            </div>
                            <div className="md:col-span-6 col-span-12">
                              <Field
                                as={Select}
                                className={"get-languages"}
                                lable={"Languages"}
                                name={"languages"}
                                id={""}
                                width={"100%"}
                                margin={"0px"}
                                padding={"8px 5px"}
                                borderradius={"4px"}
                                border={"1px solid #ccc"}
                                bgcolor={"#fff"}
                                color={"#5b5a5a"}
                                fontSize={"16px"}>
                                <option>Choise Language</option>
                                {getLanguages?.map((option: any, key: any) => (
                                  <option key={key} value={option.id}>
                                    {option.name}
                                  </option>
                                ))}
                              </Field>
                              <ErrorMessage
                                name={"languages"}
                                render={(msg) => (
                                  <p className="text-[red] text-[14px]">
                                    {msg}
                                  </p>
                                )}
                              />
                            </div>
                            <div className="md:col-span-12 col-span-12">
                              <Field
                                as={Select}
                                className={"get-publishers"}
                                lable={"publishers"}
                                name={"publishers"}
                                id={""}
                                width={"100%"}
                                margin={"0px"}
                                padding={"8px 5px"}
                                borderradius={"4px"}
                                border={"1px solid #ccc"}
                                bgcolor={"#fff"}
                                color={"#5b5a5a"}
                                fontSize={"16px"}>
                                <option>Choise Publishers</option>
                                {publishers?.map((option: any, key: any) => (
                                  <option key={key} value={option.id}>
                                    {option.name}
                                  </option>
                                ))}
                              </Field>
                              <ErrorMessage
                                name={"publishers"}
                                render={(msg) => (
                                  <p className="text-[red] text-[14px]">
                                    {msg}
                                  </p>
                                )}
                              />
                            </div>
                            <div className="md:col-span-12 col-span-12">
                              <label className="text-[#5b5a5a] ">
                                Select Author
                              </label>
                              <MultiSelect
                                isClearable={true}
                                isLoading={isLoading}
                                isDisabled={isLoading}
                                isMulti={true}
                                isSearchable={true}
                                onCreateOption={handleCreate}
                                onChange={(newValue) =>
                                  setAuthorValue(newValue)
                                }
                                options={getAutherData}
                                // options={tagData}
                                value={tagValue}
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
                              <>
                                {addBookError
                                  ? addBookError?.data?.errors?.Image?.map(
                                      (item: any, key: any) => (
                                        <p
                                          className="text-[red] text-[14px]"
                                          key={key}>
                                          {item}
                                        </p>
                                      )
                                    )
                                  : null}
                              </>
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
                                  <p className="text-[red] text-[14px]">
                                    {msg}
                                  </p>
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
              )}
            </Popup>

            {uploadedImage || getBookById ? (
              <div className="z-[1000] bg-[white] w-[300px] h-[300px] fixed top-0 right-0 p-[10px] shadow-xl">
                {!getBookById?.image && (
                  <div className="fixed right-[15px] top-[15px] rounded-full bg-[rgba(255,255,255,0.4)] cursor-pointer">
                    <IconButton onClick={() => setUploadedImage(undefined)}>
                      <Icon className="" icon={<CloseIcon />} />
                    </IconButton>
                  </div>
                )}
                <div className="">
                  <Image
                    src={uploadedImage ? uploadedImage : getBookById?.image}
                    alt={"image"}
                    width={"100%"}
                    height={"280px"}
                    borderRadius={""}
                    className={"add-image-popup"}
                  />
                </div>
              </div>
            ) : null}
          </div>
        </>
      )}
    </>
  );
};

export default Books;
