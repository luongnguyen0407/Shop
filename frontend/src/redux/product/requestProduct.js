import axiosClient from "axios/configAxios";

export const reqSearchProduct = (value) => {
  return axiosClient.request({
    method: "get",
    url: "/v1/getproduct",
    params: {
      search: value,
    },
  });
};

export const reqGetCategory = () => {
  return axiosClient.request({
    method: "get",
    url: "/v1/getcategory",
  });
};

export const uploadImage = () => {
  return axiosClient.request({
    method: "get",
    url: "/v1/getcategory",
  });
};
