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
    console.log(base64EncodedImage);
    const postData = JSON.stringify({ data: base64EncodedImage });
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      await axios.post(
        "http://localhost:3001/api/upload",
        postData,
        axiosConfig
      );

      //   await fetch("http://localhost:3001/api/upload", {
      //     method: "POST",
      //     body: JSON.stringify({ data: base64EncodedImage }),
      //     headers: { "Content-Type": "application/json" },
      //   });
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
