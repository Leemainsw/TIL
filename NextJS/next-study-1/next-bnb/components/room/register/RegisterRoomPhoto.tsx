import React from "react";
import styled from "styled-components";
import { isEmpty } from "lodash";
import { useDispatch } from "react-redux";
import { useSelector } from "../../../store";
import palette from "../../../styles/palette";
import Button from "../../common/Button";
import UploadIcon from "../../../public/static/svg/register/upload.svg";
import { uploadFileAPI } from "../../../lib/api/file";
import { registerRoomActions } from "../../../store/registerRoom";
import RegisterRoomPhotoCardList from "./RegisterRoomPhotoCardList";
import RegisterRoomFooter from "./RegisterRoomFooter";

const Container = styled.div`
  padding: 62px 30px 100px;
  h2 {
    font-size: 19px;
    font-weight: 800;
    margin-bottom: 56px;
  }
  h3 {
    font-weight: bold;
    color: ${palette.gray_76};
    margin-bottom: 6px;
  }
  .register-room-step-info {
    font-size: 14px;
    max-width: 400px;
    margin-bottom: 24px;
  }
  .register-room-upload-photo-wrapper {
    width: 858px;
    height: 433px;
    margin: auto;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px dashed ${palette.gray_bb};
    border-radius: 6px;
    input {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: pointer;
    }
    img {
        width: 100%;
        max-height: 100%;
    }
  }
`;

const RegisterRoomPhoto: React.FC = () => {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.registerRoom.photos);
  const uploadImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files && files.length > 0) {
      const file = files[0];
      const formdata = new FormData();
      formdata.append("file", file);
      try {
        const { data } = await uploadFileAPI(formdata);
        if (data) {
          dispatch(registerRoomActions.setPhotos([...photos, data]));
        }
      } catch (e) {
        console.log(e);
      }
    }
    console.log(files);
  };

  return (
    <Container>
      <h2>숙소 사진 올리기</h2>
      <h3>7단계</h3>
      <div className="register-room-step-info">
        게스트가 사진을 보고 숙소의 느낌을 생생히 떠올려볼 수 있도록 해주세요.
        우선 사진 1장을 업로드하고 숙소를 등록한 후에 추가할 수 있습니다.
      </div>
      {isEmpty(photos) && (
        <div className="register-room-upload-photo-wrapper">
          <>
            <input type="file" accept="image/*" onChange={uploadImage} />
            <Button icon={<UploadIcon />} color="bittersweet" width="167px">
              사진 업로드
            </Button>
          </>
        </div>
      )}
      {!isEmpty(photos) && <RegisterRoomPhotoCardList photos={photos} />}
      <RegisterRoomFooter
        prevHref="/room/register/conveniences"
        nextHref="/room/register/description"
      />
    </Container>
  );
};

export default RegisterRoomPhoto;
