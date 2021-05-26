import React from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import Header from "../component/common/Header";
import AuthButton from "../component/common/AuthButton";
import axios from "axios";

const AuthResultPage = () => {
  const { search } = useLocation();
  const { code } = queryString.parse(search);

  const getAccessToken = () => {
    const option = {
      method: "POST",
      url: "https://testapi.openbanking.or.kr/oauth/2.0/token",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: {
        code: code,
        client_id: "1346a7ac-fa44-49d4-bc65-bd04add80812",
        client_secret: "64917adb-6f07-4839-a9e2-a6f99a8fb84f",
        redirect_uri: "http://localhost:3000/authResult",
        grant_type: "authorization_code",
      },
    };
    axios(option).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <>
      <Header title={"사용자 발급 토큰 확인"}></Header>
      <p>사용자가 발급받은 사용자 코드는</p>
      <p>{code}</p>
      <AuthButton title={"토큰받기"} handleClick={getAccessToken}></AuthButton>
    </>
  );
};

export default AuthResultPage;
