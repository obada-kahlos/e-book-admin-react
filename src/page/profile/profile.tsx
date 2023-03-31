import React, { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import Icon from "../../component/shared/icon/ui/icon";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Image from "../../component/shared/image/ui/image";
import Button from "../../component/shared/button/ui/button";
import {
  useAdminGetProfileQuery,
  useAdminProfileImageMutation,
  useUpdateProfileInfoMutation,
} from "../../api/admin/admin-profile";

import "./profile.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Input from "../../component/shared/input/ui/input";
import Popup from "../../component/popup/ui/popup";
import Select from "../../component/shared/select/ui/select";
import { toastStatus } from "../../utils/Toastify/toastify";
import Alert from "../../component/alert/ui/alert";

const Profile = () => {
  const [uploadedImage, setUploadedImage] = useState<
    string | ArrayBuffer | null
  >();
  const [popup, setPopup] = useState(false);

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

  const { data, isSuccess, refetch } = useAdminGetProfileQuery({});
  const [addAdminImage] = useAdminProfileImageMutation({});

  if (data && isSuccess) {
    localStorage.setItem("admin-image", JSON.stringify(data?.profilePhoto));
  }

  const [updateData, { isSuccess: isUpdated, reset: resetUpdate }] =
    useUpdateProfileInfoMutation({});
  console.log({ isUpdated });

  useEffect(() => {
    if (isUpdated) {
      toastStatus("isSuccess", "Updated successfully");
    }
    resetUpdate();
    refetch();
  }, [isUpdated]);

  return (
    <div className="my-[30px] sm:p-4 px-2">
      {/* <Alert
        isOpen={openAlert}
        onClose={() => {
          setPopup(false);
        }}
        onAction={() => {
          handleDeleteAuthor();
        }}
      /> */}
      <div className="profile-image relative w-fit">
        <div>
          {data?.profilePhoto ? (
            <Image
              className={"profile-image"}
              src={data?.profilePhoto ? data?.profilePhoto : null}
              alt={"profile-image"}
              width={"250px"}
              height={"250px"}
              borderRadius={"10px"}
              border={"border-[5px] border-main-color"}
            />
          ) : (
            <Avatar
              src="./not-found.png"
              sx={{ width: "250px", height: "250px", borderRadius: "10px" }}
            />
          )}
        </div>
        <div className="edit-profile-image ">
          {data?.profilePhoto === null ? (
            <label htmlFor="add" className="rounded-full cursor-pointer">
              <IconButton color="primary">
                <Icon icon={<CameraAltIcon sx={{ color: "#fff" }} />} />
              </IconButton>
            </label>
          ) : (
            <div className="flex gap-4">
              <IconButton color="primary" onClick={() => console.log("hi")}>
                <Icon icon={<EditIcon sx={{ color: "#fff" }} />} />
              </IconButton>
              <IconButton color="primary" onClick={() => console.log("hi")}>
                <Icon icon={<DeleteIcon sx={{ color: "#fff" }} />} />
              </IconButton>
            </div>
          )}
        </div>
      </div>

      <div className="mt-[10px] w-fit">
        <div className="md:flex items-center gap-5 my-[10px]">
          <h4 className="md:text-[28px] text-[20px] text-[#333] font-[500] mb-[-8px]">
            {data?.firstName}_{data?.lastName}
          </h4>
          <h4 className="md:text-[28px] text-[20px] text-[#333] font-[500] mb-[-8px]">
            {data?.email}
          </h4>
        </div>
        <p> </p>
        <h5 className="md:text-[20px] text-[16px] text-[#666]">
          {data?.firstName} {data?.lastName}
        </h5>
        <h5 className="md:text-[20px] text-[16px] text-[#666]">
          {data?.gender}
        </h5>
        <h5 className="md:text-[20px] text-[16px] text-[#666]">
          {data?.phoneNumber}
        </h5>
        <h5 className="md:text-[20px] text-[16px] text-[#666]">
          {data?.address}
        </h5>

        <Button
          className={"edit-profile"}
          buttonText={"edit-profile"}
          width={"100%"}
          padding={"5px 10px"}
          margin={"10px 0px"}
          borderRadius={"6px"}
          bgColor={"bg-main-color"}
          color={"#fff"}
          fontSize={"16px"}
          bgHover={"bg-hover-color"}
          onClick={() => setPopup(true)}
        />
      </div>
      <input hidden type={"file"} id="add" onChange={onUploadFile} />

      <Popup
        headerTitle={"Profile Info"}
        translate={"translate(-50% , -50%)"}
        onClick={() => setPopup(false)}
        width={"750px"}
        height={"500px"}
        bgClor={"#fff"}
        borderRadius={"10px"}
        top={"50%"}
        left={"50%"}
        right={"0"}
        bottom={"0"}
        isOpen={popup}
        paddingBodyBottom={"40px"}
        className="add-Publisher"
        zIndex="1002">
        <div className="p-2">
          <Formik
            initialValues={{
              userName: data?.userName,
              email: data?.email,
              firstName: data?.firstName,
              lastName: data?.lastName,
              phoneNumber: data?.phoneNumber,
              gender: data?.gender,
              address: data?.address,
            }}
            onSubmit={(values) => {
              updateData({
                userName: values.userName,
                firstName: values.firstName,
                lastName: values.lastName,
                phoneNumber: values.phoneNumber,
                address: values.address,
                gender: values.gender,
              });
              setPopup(false);
            }}>
            <Form>
              <div className="my-[10px]">
                <div className="grid grid-cols-12 gap-1">
                  <div className="md:col-span-6 col-span-12">
                    <Field
                      as={Input}
                      className={"email"}
                      name={"email"}
                      placeholder={"Email"}
                      id={"Email"}
                      width={"100%"}
                      margin={"10px 0px"}
                      padding={"6px 10px"}
                      borderradius={"5px"}
                      border={"1px solid #ccc"}
                      bgcolor={"transparent"}
                      color={"#333"}
                      fontSize={"18px"}
                      lable={"Email"}
                      type={"text"}
                      disabled={true}
                    />
                  </div>

                  <div className="md:col-span-6 col-span-12">
                    <Field
                      as={Input}
                      className={"UserName"}
                      name={"userName"}
                      placeholder={"userName"}
                      id={"userName"}
                      width={"100%"}
                      margin={"10px 0px"}
                      padding={"6px 10px"}
                      borderradius={"5px"}
                      border={"1px solid #ccc"}
                      bgcolor={"transparent"}
                      color={"#333"}
                      fontSize={"18px"}
                      lable={"userName"}
                      type={"text"}
                    />
                    <ErrorMessage
                      name={"userName"}
                      render={(msg) => (
                        <p className="text-[red] text-[18px]">{msg}</p>
                      )}
                    />
                  </div>

                  <div className="md:col-span-6 col-span-12">
                    <Field
                      as={Input}
                      className={"First-Name"}
                      name={"firstName"}
                      placeholder={"Email"}
                      id={"FirstName"}
                      width={"100%"}
                      margin={"10px 0px"}
                      padding={"6px 10px"}
                      borderradius={"5px"}
                      border={"1px solid #ccc"}
                      bgcolor={"transparent"}
                      color={"#333"}
                      fontSize={"18px"}
                      lable={"First Name"}
                      type={"text"}
                      disabled={false}
                    />
                    <ErrorMessage
                      name={"firstName"}
                      render={(msg) => (
                        <p className="text-[red] text-[18px]">{msg}</p>
                      )}
                    />
                  </div>
                  <div className="md:col-span-6 col-span-12">
                    <Field
                      as={Input}
                      className={"Last-Name"}
                      name={"lastName"}
                      placeholder={"Email"}
                      id={"LastName"}
                      width={"100%"}
                      margin={"10px 0px"}
                      padding={"6px 10px"}
                      borderradius={"5px"}
                      border={"1px solid #ccc"}
                      bgcolor={"transparent"}
                      color={"#333"}
                      fontSize={"18px"}
                      lable={"Last Name"}
                      type={"text"}
                      disabled={false}
                    />
                    <ErrorMessage
                      name={"lastName"}
                      render={(msg) => (
                        <p className="text-[red] text-[18px]">{msg}</p>
                      )}
                    />
                  </div>
                  <div className="md:col-span-6 col-span-12">
                    <Field
                      as={Input}
                      className={"phoneNumber"}
                      name={"phoneNumber"}
                      placeholder={"Email"}
                      id={"phoneNumber"}
                      width={"100%"}
                      margin={"10px 0px"}
                      padding={"6px 10px"}
                      borderradius={"5px"}
                      border={"1px solid #ccc"}
                      bgcolor={"transparent"}
                      color={"#333"}
                      fontSize={"18px"}
                      lable={"Phone Number"}
                      type={"text"}
                      disabled={false}
                    />
                    <ErrorMessage
                      name={"phoneNumber"}
                      render={(msg) => (
                        <p className="text-[red] text-[18px]">{msg}</p>
                      )}
                    />
                  </div>
                  <div className="md:col-span-6 col-span-12">
                    <Field
                      as={Input}
                      className={"address"}
                      name={"address"}
                      placeholder={"Email"}
                      id={"address"}
                      width={"100%"}
                      margin={"10px 0px"}
                      padding={"6px 10px"}
                      borderradius={"5px"}
                      border={"1px solid #ccc"}
                      bgcolor={"transparent"}
                      color={"#333"}
                      fontSize={"18px"}
                      lable={"Address"}
                      type={"text"}
                      disabled={false}
                    />
                    <ErrorMessage
                      name={"address"}
                      render={(msg) => (
                        <p className="text-[red] text-[18px]">{msg}</p>
                      )}
                    />
                  </div>

                  <div className="col-span-12">
                    <Field
                      as={Select}
                      className={"gender"}
                      lable={"gender"}
                      name={"gender"}
                      id={""}
                      width={"100%"}
                      margin={"10px 0px"}
                      padding={"8px 5px"}
                      borderradius={"4px"}
                      border={"1px solid #ccc"}
                      bgcolor={"#fff"}
                      color={"#5b5a5a"}
                      fontSize={"16px"}>
                      <option value={0}>Male</option>
                      <option value={1}>Female</option>
                    </Field>
                    <ErrorMessage
                      name={"gender"}
                      render={(msg) => (
                        <p className="text-[red] text-[18px]">{msg}</p>
                      )}
                    />
                  </div>
                </div>
                <div className="flex justify-center items-center mt-[10px] mb-[30px]">
                  <Button
                    className={"profile-data"}
                    buttonText={"Edit"}
                    padding={"8px 30px"}
                    margin={"10px 0px"}
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
    </div>
  );
};

export default Profile;
