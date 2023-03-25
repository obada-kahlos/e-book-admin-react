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
} from "../../api/admin/admin-profile";

import "./profile.css";

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

  const { data } = useAdminGetProfileQuery({});
  console.log({ data });
  const [addAdminImage] = useAdminProfileImageMutation({});
  return (
    <div className="my-[30px] sm:p-4 px-2">
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
        <div className="flex items-center gap-5">
          <h4 className="text-[28px] text-[#333] font-[500] mb-[-8px]">
            {data?.firstName}_{data?.lastName}
          </h4>
          <h4 className="text-[28px] text-[#333] font-[500] mb-[-8px]">
            {data?.email}
          </h4>
        </div>
        <p> </p>
        <h5 className="text-[20px] text-[#666]">
          {data?.firstName} {data?.lastName}
        </h5>
        <h5 className="text-[20px] text-[#666]">{data?.gender}</h5>
        <h5 className="text-[20px] text-[#666]">{data?.phoneNumber}</h5>
        <h5 className="text-[20px] text-[#666]">{data?.address}</h5>

        <Button
          className={"Add-Image"}
          buttonText={"Add Image"}
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
