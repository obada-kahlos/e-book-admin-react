import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setToken } from "../../app/slices/autoSlice";
import Loader from "../../component/loader/loader";
const Redirect = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getToken = JSON.parse(localStorage.getItem("login") as any);
  const [tokenData, setTokenData] = useState(getToken);

  useEffect(() => {
    dispatch(setToken(getToken?.token));
  }, [dispatch, tokenData, getToken]);

  useEffect(() => {
    if (tokenData) {
      navigate("/dashbord/info");
    } else {
      navigate("/auth");
    }
  }, [tokenData]);

  return <Loader />;
};

export default Redirect;
