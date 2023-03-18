import { useEffect, useState } from "react";
import Button from "../../component/shared/button/ui/button";
import Input from "../../component/shared/input/ui/input";
import Table from "../../component/shared/table/ui/table";
import Tbody from "../../component/shared/table/ui/tbody";
import Td from "../../component/shared/table/ui/td";
import Th from "../../component/shared/table/ui/th";
import Thead from "../../component/shared/table/ui/thead";
import Tr from "../../component/shared/table/ui/tr";
import Loader from "../../component/loader/loader";
import ActionButton from "../../component/action-buttom/ui/action-button";
import Popup from "../../component/popup/ui/popup";

import SearchIcon from "@mui/icons-material/Search";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";

import {
  useAddAuthorMutation,
  useDeleteAuthorMutation,
  useGetAuterQuery,
  useUpdateAuthorMutation,
} from "../../api/author/author";

import { ErrorMessage, Field, Form, Formik } from "formik";

import * as yup from "yup";
import Alert from "../../component/alert/ui/alert";
import { toastStatus } from "../../utils/Toastify/toastify";

const Author = () => {
  /// get api for author
  const { data: getAuther, isLoading } = useGetAuterQuery({});

  /// add author
  const [addAuthor, { isSuccess, isError, reset: resetAdd }] =
    useAddAuthorMutation();

  /// Schema for Input add author
  const schema = yup.object().shape({
    authorName: yup
      .string()
      .matches(/^[a-zA-Z ]*$/, "Must be character")
      .min(10, "Must be more than 10")
      .max(30, "Must be less than 30")
      .required("This field is required"),
  });

  const [popup, setPopup] = useState(false);
  const handleOpenPopup = () => {
    setPopup((prev) => !prev);
    setGetAuthorInfo(null);
  };

  //// get author by id and update it
  const [getAuthorInfo, setGetAuthorInfo] = useState<any>();
  const getAuthorById = (id: number) => {
    const selectAuthor = getAuther.find((item: any) => item.id === id);
    setGetAuthorInfo((prev: any) => {
      return { ...prev, ...selectAuthor };
    });
  };
  const updateHandler = (id: number) => {
    getAuthorById(id);
    setPopup(true);
  };
  const [updateAuthor, { isSuccess: isUpdated, reset: resetUpdate }] =
    useUpdateAuthorMutation();

  //// delete author + popup for delete author + state to get author's id
  const [openAlert, setOpenAlert] = useState(false);
  const [authorId, setAuthorId] = useState(null);
  const [deleteAuthor, { isSuccess: isDeleted, reset: resetDelete }] =
    useDeleteAuthorMutation();
  const handleDeleteAuthor = () => {
    deleteAuthor(authorId);
    setOpenAlert(false);
  };

  /// alert on action add + update + delete + error
  useEffect(() => {
    if (isSuccess) {
      toastStatus("isSuccess", "Added successfully");
    }
    if (isUpdated) {
      toastStatus("isSuccess", "Updated successfully");
    }
    if (isError) {
      toastStatus("isError", "Something went wrong");
    }
    if (isDeleted) {
      toastStatus("isDeleted", "Deleted successfully");
    }
    resetDelete();
    resetUpdate();
    resetAdd();
  }, [isSuccess, addAuthor, deleteAuthor, isError, isDeleted, isUpdated]);

  //// search
  const [search, setSearch] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="my-[30px] sm:p-4 px-2">
          <Alert
            isOpen={openAlert}
            onClose={() => {
              setOpenAlert(false);
            }}
            onAction={() => {
              handleDeleteAuthor();
            }}
          />

          {getAuther?.length > 0 ? (
            <>
              <div className="flex justify-between items-end gap-4">
                <div className="w-8/12">
                  <Input
                    className="search"
                    icon={<SearchIcon sx={{ color: "#5b5a5a" }} />}
                    name={"search"}
                    type={"text"}
                    placeholder={"Find Author"}
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
                    onChange={handleChange}
                  />
                </div>
                <Button
                  className={"add"}
                  buttonText={"Add Author"}
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
                      className={"auther-id"}
                      minWidth={"0px"}
                    />
                    <Th
                      text={"Author"}
                      color={"#fff"}
                      fontSize={"15px"}
                      fontWeight={"600"}
                      padding={"10px 15px"}
                      margin={"0px"}
                      textAlign={"center"}
                      bgColor={"bg-main-color"}
                      className={"auther-th"}
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
                      minWidth={"0px"}
                    />
                  </Tr>
                </Thead>
                <Tbody>
                  {getAuther
                    ?.filter((value: any) => {
                      if (search === "") {
                        return value;
                      } else if (
                        value.name
                          .toLowerCase()
                          .includes(search.toLocaleLowerCase())
                      ) {
                        return value;
                      }
                    })
                    .map((item: any, key: any) => (
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
                            {item?.id}
                          </Td>
                          <Td
                            color={"#333"}
                            fontSize={"15px"}
                            fontWeight={"500"}
                            padding={"10px 15px"}
                            margin={"0px"}
                            textAlign={"left"}
                          >
                            {item?.label}
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
                              {item.bookTitle?.length > 0 ? (
                                <select className="w-full h-full p-[10px] border border-[#ccc]">
                                  <option disabled selected>
                                    {" "}
                                    See The Books{" "}
                                  </option>
                                  {item.bookTitle?.map(
                                    (book: any, key: any) => (
                                      <option key={key}> {book.title} </option>
                                    )
                                  )}
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
                                  updateHandler(item.id);
                                },
                              }}
                            />
                          </Td>
                        </>
                      </Tr>
                    ))}
                </Tbody>
              </Table>
            </>
          ) : (
            <div className="flex justify-center items-center flex-col mt-[20px]">
              <p className="text-[#555] text-[30px] mb-[10px] block">
                There is no authors!
              </p>
              <p
                onClick={handleOpenPopup}
                className="text-main-color font-bold text-[18px] cursor-pointer"
              >
                Add One?
              </p>
            </div>
          )}

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
                validationSchema={schema}
                initialValues={
                  getAuthorInfo
                    ? {
                        authorName: getAuthorInfo?.name,
                      }
                    : {
                        authorName: "",
                      }
                }
                onSubmit={(values, { resetForm }) => {
                  getAuthorInfo
                    ? updateAuthor({
                        authorName: values.authorName,
                        id: getAuthorInfo?.id,
                      })
                    : addAuthor(values);
                  setPopup(false);
                  setGetAuthorInfo(null);
                  resetForm();
                }}
              >
                <Form>
                  <div className="my-[10px]">
                    <Field
                      as={Input}
                      className={"author-name"}
                      name={"authorName"}
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
                      name={"authorName"}
                      render={(msg) => (
                        <p className="text-[red] text-[18px]">{msg}</p>
                      )}
                    />
                    <div className="flex justify-center items-center mt-[10px] mb-[30px]">
                      <Button
                        className={"add-author"}
                        buttonText={getAuthorInfo ? "Update" : "Add"}
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
