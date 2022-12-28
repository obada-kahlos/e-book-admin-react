import { useEffect, useState } from "react";
import Button from "../../component/shared/button/ui/button";
import Input from "../../component/shared/input/ui/input";
import Table from "../../component/shared/table/ui/table";
import Tbody from "../../component/shared/table/ui/tbody";
import Td from "../../component/shared/table/ui/td";
import Th from "../../component/shared/table/ui/th";
import Thead from "../../component/shared/table/ui/thead";
import Tr from "../../component/shared/table/ui/tr";

import SearchIcon from "@mui/icons-material/Search";
import { useAddAuthorMutation, useGetAuterQuery } from "../../api/books/books";
import Loader from "../../component/loader/loader";

import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import ActionButton from "../../component/action-buttom/ui/action-button";
import { ErrorMessage, Field, Form, Formik } from "formik";

import * as yup from "yup";
import Popup from "../../component/popup/ui/popup";

import { toastStatus } from "../../utils/Toastify/toastify";

const Author = () => {
  const { data: getAuther, isLoading } = useGetAuterQuery({});
  const [addAuthor, { isSuccess, isError }] = useAddAuthorMutation();
  const handleClick = () => {};

  const personSchema = yup.object().shape({
    name: yup
      .string()
      .matches(/^[a-zA-Z ]*$/, "Must be character")
      .max(40, "Must be less than 40")
      .required("This field is required"),
  });

  const [popup, setPopup] = useState(false);
  const handleOpenPopup = () => {
    setPopup((prev) => !prev);
  };

  useEffect(() => {
    if (isSuccess) {
      toastStatus("isSuccess", "Added successfully");
    } else if (isError) {
      toastStatus("isError", "Something went wrong");
    }
  }, [isSuccess, addAuthor]);

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
              buttonText={"Add Author"}
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
            <Table width="100%">
              <Thead>
                <Tr>
                  <Th
                    text={"Author"}
                    color={"#fff"}
                    fontSize={"15px"}
                    fontWeight={"600"}
                    padding={"10px 15px"}
                    margin={"0px"}
                    textAlign={"center"}
                    bgColor={"bg-main-color"}
                    className={"auther"}
                  />
                  <Th
                    text={"Author's Books"}
                    color={"#fff"}
                    fontSize={"15px"}
                    fontWeight={"600"}
                    padding={"10px 15px"}
                    margin={"0px"}
                    textAlign={"center"}
                    bgColor={"bg-main-color"}
                    className={"autherBook"}
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
                        <>
                          {item.books?.length > 0 ? (
                            <select className="w-full h-full p-[10px] border border-[#ccc]">
                              <option disabled selected>
                                {" "}
                                See The Books{" "}
                              </option>
                              {item.books?.map((book: any, key: any) => (
                                <option key={key}> {book.title} </option>
                              ))}
                            </select>
                          ) : (
                            "There is no books"
                          )}
                        </>
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
            <Popup
              headerTitle={"Add-Author"}
              translate={"translate(-50% , -50%)"}
              onClick={handleOpenPopup}
              width={"800px"}
              height={"300px"}
              bgClor={"#fff"}
              borderRadius={"10px"}
              top={"50%"}
              left={"50%"}
              right={"0"}
              bottom={"0"}
              isOpen={popup}
              paddingBodyBottom={"0px"}
              className="add-author"
              zIndex="1002"
            >
              <div className="p-2">
                <Formik
                  validationSchema={personSchema}
                  initialValues={{
                    name: "",
                  }}
                  onSubmit={(values, { resetForm }) => {
                    addAuthor(values);
                    resetForm();
                  }}
                >
                  <Form>
                    <div className="my-[10px]">
                      <Field
                        as={Input}
                        className={"author-name"}
                        name={"name"}
                        placeholder={"Author name"}
                        id={"Author"}
                        width={"100%"}
                        margin={"10px 0px"}
                        padding={"6px 10px"}
                        borderradius={"5px"}
                        border={"1px solid #ccc"}
                        bgcolor={"transparent"}
                        color={"#333"}
                        fontSize={"18px"}
                        lable={"Author Name"}
                        type={"text"}
                      />
                      <ErrorMessage
                        name={"name"}
                        render={(msg) => (
                          <p className="text-[red] text-[18px]">{msg}</p>
                        )}
                      />
                      <div className="flex justify-center items-center mt-[10px] mb-[30px]">
                        <Button
                          className={"add-author"}
                          buttonText={"Submit"}
                          padding={"8px 30px"}
                          margin={"10px 0px"}
                          borderRadius={"30px"}
                          bgColor={"bg-main-color"}
                          bgHover={"bg-hover-color"}
                          color={"#fff"}
                          fontSize={"16px"}
                          width={"200px"}
                        />
                      </div>
                    </div>
                  </Form>
                </Formik>
              </div>
            </Popup>
        </div>
      )}
    </>
  );
};

export default Author;