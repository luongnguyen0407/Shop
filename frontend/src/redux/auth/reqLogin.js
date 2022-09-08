import axiosClient from "axios/configAxios";

export const reqLogin = (value) => {
  console.log(value);
  return axiosClient.request({
    method: "post",
    url: "/auth/login",
    data: { ...value },
  });
};
