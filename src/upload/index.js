import { Divider, Form, Input, Button } from "antd";
import "./index.css";

function UploadPage() {
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <div>
      <Form name="Upload Company DB" onFinish={onSubmit}>
        <Form.Item name="upload">
          <div id="upload-img-placeholder">
            <img id="ic_media" src="/images/icons/ic_media.svg" />
            <span>Upload Company Logo</span>
          </div>
        </Form.Item>

        <Divider />

        <Form.Item
          name="Author Company"
          label={<div className="upload-label">Witter</div>}
          rules={[{ required: true, message: "Your company name" }]}
        >
          <Input className="upload-name" placeholder="Your company name" />
        </Form.Item>

        <Divider />

        <Form.Item
          name="company_name"
          label={<div className="upload-label">TITLE</div>}
          rules={[{ required: true, message: "Type company name" }]}
        >
          <Input
            className="upload-name"
            placeholder="Type Company's Eng name"
          />
        </Form.Item>

        <Divider />

        <Form.Item
          name="about_industry"
          label={<div className="upload-label">About Industry</div>}
          rules={[{ required: true, message: "Please provide information" }]}
        >
          <Input.TextArea
            showCount
            maxLength={1000}
            size="large"
            id="contents_text"
            className="upload-name"
            placeholder="Please provide company information"
          />
        </Form.Item>

        <Divider />

        <Form.Item
          name="about_company"
          label={<div className="upload-label">About Company</div>}
          rules={[{ required: true, message: "Please provide information" }]}
        >
          <Input.TextArea
            showCount
            maxLength={1000}
            size="large"
            id="contents_text"
            className="upload-name"
            placeholder="Please provide company information"
          />
        </Form.Item>
        <Form.Item>
          <Button id="submit-button" size="large" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default UploadPage;
