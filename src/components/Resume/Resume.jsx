import { useState, useEffect } from "react";
import axios from "axios";
import {
  ApConTw,
  ApSubWrap,
  ApWrap,
  AqAra,
  AqAraOne,
  AqAraOnePa,
  AqCon,
  AqMain,
  AqSec,
  AqSubSec,
  FileInput,
  FileInputLabel,
  FileUploadWrapper,
  MainForm,
  MainWr,
} from "./Resume.elements";
import { useNavigate } from "react-router-dom";
import { Button } from "../../globalStyles";
import {
  Loading,
  LoadingBar,
  LoadingBarContainer,
} from "../Item/Item.elements";

async function postImage({ image, description }) {
  try {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("description", description);

    const result = await axios.post(
      "https://agency-saudi-688c7ddad04b.herokuapp.com/images",
      formData,
      {
        headers: { "Content-Type": "application/pdf" },
      }
    );
    return result.data;
  } catch (error) {
    console.error("Error posting image:", error);
    throw error; // rethrow the error for further handling if necessary
  }
}

const Resuem = () => {
  const [file, setFile] = useState();
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [fileName, setFileName] = useState("ارفق الملف");
  const [isLoading, setIsLoading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const navigate = useNavigate();

  const submit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const result = await postImage({ image: file, description });
      setImages([result.image, ...images]);
      setUploadSuccess(true);
      setTimeout(() => navigate("/"), 2000); // Navigate after 3 seconds
    } catch (error) {
      console.error("Error posting image:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fileSelected = (event) => {
    const file = event.target.files[0];
    setFile(file);
    setFileName(file ? `Selected: ${file.name}` : "Upload PDF");
  };

  if (isLoading) {
    // Show loading bar during the upload
    return (
      <Loading>
        <LoadingBarContainer>
          <LoadingBar />
        </LoadingBarContainer>
      </Loading>
    );
  }

  if (uploadSuccess) {
    return (
      <div>
        <p>Upload was a success! Redirecting...</p>
      </div>
    );
  }

  return (
    <ApWrap>
      <ApSubWrap>
        <ApConTw>
          <AqCon></AqCon>
          <AqMain>
            <AqSubSec>
              <AqAra>
                <AqAraOne>
                  <AqAraOnePa>
                    الخطوة الاخيرة ارفق ملف PDF لسيرتك الذاتية
                  </AqAraOnePa>
                  <MainWr>
                    <MainForm onSubmit={submit}>
                      <FileUploadWrapper>
                        <FileInputLabel htmlFor="file-upload">
                          {fileName}
                        </FileInputLabel>
                        <FileInput
                          id="file-upload"
                          type="file"
                          accept="pdf/*"
                          onChange={fileSelected}
                        />
                      </FileUploadWrapper>
                      <Button type="submit">ارسل</Button>
                    </MainForm>
                  </MainWr>
                </AqAraOne>
              </AqAra>
            </AqSubSec>
          </AqMain>
        </ApConTw>
      </ApSubWrap>
    </ApWrap>
  );
};

export default Resuem;
