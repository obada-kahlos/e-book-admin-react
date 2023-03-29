import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  useGetPublishersQuery,
  useAddPublisherMutation,
} from "../../api/Publisher/Publisher";

import Button from "../../component/shared/button/ui/button";
import Input from "../../component/shared/input/ui/input";
import Popup from "../../component/popup/ui/popup";

import SearchIcon from "@mui/icons-material/Search";
import Tbody from "../../component/shared/table/ui/tbody";
import Td from "../../component/shared/table/ui/td";
import Th from "../../component/shared/table/ui/th";
import Thead from "../../component/shared/table/ui/thead";
import Tr from "../../component/shared/table/ui/tr";
import Table from "../../component/shared/table/ui/table";

import * as yup from "yup";
import { toastStatus } from "../../utils/Toastify/toastify";

const Publisher = () => {
  const schema = yup.object().shape({
    name: yup
      .string()
      .matches(/^[a-zA-Z ]*$/, "Must be character")
      .min(5, "Must be more than 10")
      .max(30, "Must be less than 30")
      .required("This field is required"),
  });
  const [search, setSearch] = useState("");
  const [popup, setPopup] = useState(false);

  const { data: PublishersData, refetch } = useGetPublishersQuery({});
  const [addPublisher, { isSuccess, isError, reset: resetAdd, error }] =
    useAddPublisherMutation();
  console.log(error);
  useEffect(() => {
    if (isSuccess) {
      toastStatus("isSuccess", "Added successfully");
    }
    if (isError) {
      toastStatus("isError", "Something went wrong");
    }
    resetAdd();
    refetch();
  }, [isSuccess, isError, addPublisher]);

  return (
    <div className="my-[30px] sm:p-4 px-2">
      <div className="flex justify-between items-end gap-4">
        <div className="w-8/12">
          <Input
            className="search"
            icon={<SearchIcon sx={{ color: "#5b5a5a" }} />}
            name={"search"}
            type={"text"}
            placeholder={"Find Publisher"}
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
            onChange={(e: any) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        <Button
          className={"add"}
          buttonText={"Add Publisher"}
          width={"180px"}
          padding={"8px 30px"}
          margin={"0px"}
          borderRadius={"30px"}
          bgColor={"bg-main-color"}
          bgHover={"bg-hover-color"}
          color={"#fff"}
          fontSize={"16px"}
          onClick={() => setPopup(true)}
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
              text={"Publisher"}
              color={"#fff"}
              fontSize={"15px"}
              fontWeight={"600"}
              padding={"10px 15px"}
              margin={"0px"}
              textAlign={"center"}
              bgColor={"bg-main-color"}
              className={"auther-th"}
            />
          </Tr>
        </Thead>
        <Tbody>
          {PublishersData?.filter((value: any) => {
            if (search === "") {
              return value;
            } else if (
              value.name.toLowerCase().includes(search.toLocaleLowerCase())
            ) {
              return value;
            }
          }).map((item: any, key: any) => (
            <Tr key={key}>
              <>
                <Td
                  color={"#333"}
                  fontSize={"15px"}
                  fontWeight={"500"}
                  padding={"10px 15px"}
                  margin={"0px"}
                  textAlign={"left"}>
                  {item?.id}
                </Td>
                <Td
                  color={"#333"}
                  fontSize={"15px"}
                  fontWeight={"500"}
                  padding={"10px 15px"}
                  margin={"0px"}
                  textAlign={"left"}>
                  {item?.name}
                </Td>
              </>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <Popup
        headerTitle={"Add-Publisher"}
        translate={"translate(-50% , -50%)"}
        onClick={() => setPopup(false)}
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
        className="add-Publisher"
        zIndex="1002">
        <div className="p-2">
          <Formik
            validationSchema={schema}
            initialValues={{
              name: "",
            }}
            onSubmit={(values, { resetForm }) => {
              addPublisher(values);
              resetForm();
              setPopup(false);
            }}>
            <Form>
              <div className="my-[10px]">
                <Field
                  as={Input}
                  className={"Publisher-name"}
                  name={"name"}
                  placeholder={"Publisher name"}
                  id={"Publisher"}
                  width={"100%"}
                  margin={"10px 0px"}
                  padding={"6px 10px"}
                  borderradius={"5px"}
                  border={"1px solid #ccc"}
                  bgcolor={"transparent"}
                  color={"#333"}
                  fontSize={"18px"}
                  lable={"Publisher Name"}
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
                    className={"add-Publisher"}
                    buttonText={"Add"}
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
  );
};

export default Publisher;
