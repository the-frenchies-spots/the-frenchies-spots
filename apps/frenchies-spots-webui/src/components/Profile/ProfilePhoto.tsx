import React, { useState } from "react";

import { ImagePicker, PictureValue } from "@frenchies-spots/material";

import ModalComfirm from "../Popup/ModalComfirm/ModalComfirm";

const ProfilePhoto = () => {
  const [picture, setPicture] = useState<PictureValue | null>(null);

  const handleComfirm = () => {
    alert("image saved !");
  };

  const handleCancel = () => {
    setPicture(null);
  };

  return (
    <ModalComfirm onComfirm={handleComfirm} onCancel={handleCancel}>
      {(open) => (
        <ImagePicker
          h={115}
          w={115}
          onImageChange={(newPicture) => {
            setPicture(newPicture);
            open();
          }}
          value={picture}
        />
      )}
    </ModalComfirm>
  );
};

export default ProfilePhoto;
