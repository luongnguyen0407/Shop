import axiosClient from "axios/configAxios";

export const reqLogin = (value) => {
  return axiosClient.request({
    method: "post",
    url: "/auth/login",
    data: { ...value },
  });
};

export const reqRegister = (value) => {
  const { rfpassword, ...res } = value;
  return axiosClient.request({
    method: "post",
    url: "/auth/register",
    data: { ...res },
  });
};

export const resConnect = () => {
  return axiosClient.request({
    method: "post",
    url: "/auth/connect",
  });
};
