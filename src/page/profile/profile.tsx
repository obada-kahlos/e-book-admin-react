import React, { useState } from "react";
import { Avatar } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import Icon from "../../component/shared/icon/ui/icon";
import { IconButton } from "@mui/material";
import Image from "../../component/shared/image/ui/image";
import Button from "../../component/shared/button/ui/button";
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
            borderRaduis={"50%"}
            border={'border-[5px] border-main-color'}
          />
        ) : (
          <Avatar
            src="./not-found.png"
            sx={{ width: "250px", height: "250px" }}
          />
        )}

        <label htmlFor="add" className="absolute bottom-[25px] right-[25px] w-[25px] h-[25px] rounded-full cursor-pointer">
              <Icon icon={<CameraAltIcon sx={{color : '#333'}}/>} />
        </label>
      </div>

      <div className="mt-[10px] w-fit">
        <h4 className="text-[28px] text-[#333] font-[500]"> Obada Kahlous </h4>
        <h5 className="text-[20px] text-[#666]"> Obada.Kahlous </h5>
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
        />
      </div>
      <input hidden type={"file"} id="add" onChange={onUploadFile} />
    </div>
  );
};

export default Profile;
