import React, { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import Icon from "../../component/shared/icon/ui/icon";
import { IconButton } from "@mui/material";
import Image from "../../component/shared/image/ui/image";
import Button from "../../component/shared/button/ui/button";
import {
  useAdminGetProfileImageQuery,
  useAdminProfileImageMutation,
} from "../../api/admin/admin-profile";
const Profile = () => {
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
  const getToken = JSON.parse(localStorage.getItem("login") as any);
  const { data } = useAdminGetProfileImageQuery({});
  const [addAdminImage] = useAdminProfileImageMutation({});
  console.log({ data });
  return (
    <div className="my-[30px] sm:p-4 px-2">
      <div className="relative w-fit">
        {uploadedImage ? (
          <Image
            className={"profile-image"}
            src={uploadedImage}
            alt={"profile-image"}
            width={"250px"}
            height={"250px"}
            borderRadius={"50%"}
            border={"border-[5px] border-main-color"}
          />
        ) : (
          <Avatar
            src="./not-found.png"
            sx={{ width: "250px", height: "250px" }}
          />
        )}

        <label
          htmlFor="add"
          className="absolute bottom-[25px] right-[25px] w-[25px] h-[25px] rounded-full cursor-pointer">
          <Icon icon={<CameraAltIcon sx={{ color: "#333" }} />} />
        </label>
      </div>

      <div className="mt-[10px] w-fit">
        <div className="flex items-center gap-5">
          <h4 className="text-[28px] text-[#333] font-[500] mb-[-8px]">
            {getToken?.first_name}_{getToken?.last_name}
          </h4>
          <h4 className="text-[28px] text-[#333] font-[500] mb-[-8px]">
            {getToken?.email}
          </h4>
        </div>
        <p> </p>
        <h5 className="text-[20px] text-[#666]">
          {getToken?.first_name} {getToken?.last_name}
        </h5>
        <Button
          className={"edit-profile"}
          buttonText={"Edit Profile"}
          width={"100%"}
          padding={"5px 10px"}
          margin={"10px 0px"}
          borderRadius={"6px"}
          bgColor={"bg-main-color"}
          color={"#fff"}
          fontSize={"16px"}
          bgHover={"bg-hover-color"}
          onClick={() => addAdminImage({ profilePhoto: uploadedImage })}
        />
      </div>
      <input hidden type={"file"} id="add" onChange={onUploadFile} />
    </div>
  );
};

export default Profile;
