import React from "react";
import { Button, Divider, Form, Input } from "antd";
import "./index.css";

function UploadPage() {
  const onsubmit = (values) => {
    console.log(values);
  };
  return (
    <div id="upload-container">
      <Form name="상품 업로드" onFinish={onsubmit}>
        <Form.Item
          name="upload"
          label={<div className="upload-label">상품 사진</div>}
        >
          <div id="upload-img-placeholder">
            <img src="/images/icons/camera.png" />
            <span>이미지를 업로드 해주세요.</span>
          </div>
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
          name="art-description"
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
