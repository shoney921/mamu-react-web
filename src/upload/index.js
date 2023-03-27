import React, { useState } from "react";
import { Button, Divider, Form, Input, Upload, message } from "antd";
import "./index.css";
import { API_URL } from "../config/constants.js";
import axios from "axios";
import { useHistory } from "react-router-dom";

function UploadPage() {
  const [imageUrl, setImageUrl] = React.useState(null);
  const history = useHistory();

  const onSubmit = (values) => {
    console.log("art Name log : ", values);
    axios
      .post(`${API_URL}/arts`, {
        artName: values.art,
        artistName: values.artist,
        description: values.description,
        imageUrl: imageUrl,
      })
      .then((result) => {
        console.log("axios 결과 :", result);
        history.replace("/");
      })
      .catch((error) => {
        console.error("axios 에러 :", error);
        message.error(`에러발생 : ${error.message}`);
      });
  };
  const onChangeImage = (info) => {
    if (info.file.status === "uploading") {
      return;
    }
    if (info.file.status === "done") {
      const response = info.file.response;
      const imageUrl = response.imageUrl;
      setImageUrl(imageUrl);
    }
  };
  return (
    <div id="upload-container">
      <Form name="상품 업로드" onFinish={onSubmit}>
        <Form.Item
          name="upload"
          label={<div className="upload-label">상품 사진</div>}
        >
          <Upload
            name="image"
            action={`${API_URL}/image`}
            listType="picture"
            showUploadList={false}
            onChange={onChangeImage}
          >
            {imageUrl ? (
              <img id="upload-img" src={`${API_URL}/${imageUrl}`} />
            ) : (
              <div id="upload-img-placeholder">
                <img src="/images/icons/camera.png" />
                <span>이미지를 업로드 해주세요.</span>
              </div>
            )}
          </Upload>
        </Form.Item>
        <Divider />
        <Form.Item
          label={<div className="upload-label">작가 명</div>}
          name="artist"
          rules={[{ required: true, message: "작가 이름을 입력해주세요" }]}
        >
          <Input
            className="upload-artist-name"
            size="large"
            placeholder="작가의 이름을 입력해주세요"
          />
        </Form.Item>
        <Divider />
        <Form.Item
          label={<div className="upload-label">작품 이름</div>}
          name="art"
          rules={[{ required: true, message: "작품 이름을 입력해주세요" }]}
        >
          <Input
            className="upload-art-name"
            size="large"
            placeholder="작품의 이름을 입력해주세요"
          ></Input>
        </Form.Item>
        <Divider />
        <Form.Item
          label={<div className="upload-label">작품 설명</div>}
          name="description"
          rules={[{ required: true, message: "작품 소개를 입력해주세요" }]}
        >
          <Input.TextArea
            showCount
            maxLength={300}
            id="art-description"
            size="large"
            placeholder="작품의 설명을 입력해주세요"
          ></Input.TextArea>
        </Form.Item>
        <Form.Item>
          <Button id="submit-button" size="large" htmlType="submit">
            등록하기
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default UploadPage;
