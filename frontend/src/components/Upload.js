import React, { useState } from "react";
import axios from "axios";
const Upload = () => {
  const [selectedFile, setSelectedFile] = useState();
  const handleSubmitFile = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
      uploadImage(reader.result);
      console.log(reader.result);
    };
    reader.onerror = () => {
      console.error("AHHHHHHHH!!");
    };
  };
  const handleSetImg = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };
  const uploadImage = async (base64EncodedImage) => {
    const poroduct = {
      title: "Aos",
      price: 8888,
    };
    console.log(base64EncodedImage);
    const postData = JSON.stringify({ img: base64EncodedImage, poroduct });
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzE1ZWI0MjE1ZDM2OTkyOGZlNDQyZDYiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2NjIzODMxNjYsImV4cCI6MTY2MjQ2OTU2Nn0.zRciCgB5dGa9YejIdM1DF3EMhCih8_Iak8gDwIqDaeA"}`,
      },
    };
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/addproduct",
        postData,
        axiosConfig
      );

      //   await fetch("http://localhost:3001/api/upload", {
      //     method: "POST",
      //     body: JSON.stringify({ data: base64EncodedImage }),
      //     headers: { "Content-Type": "application/json" },
      //   });
      console.log(res);
      console.log("upload success");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmitFile}>
        <input type="file" onChange={handleSetImg} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Upload;
