import React, { useState } from "react";

import { ProfileEntity } from "@frenchies-spots/gql";
import { ImagePicker, PictureValue } from "@frenchies-spots/material";

import toast from "react-hot-toast";
import { useAuth } from "../../hooks";
import ModalComfirm from "../Popup/ModalComfirm/ModalComfirm";

interface ProfilePhotoProps {
  profile: ProfileEntity;
}

const ProfilePhoto = (props: ProfilePhotoProps) => {
  const { profile } = props;

  const { onUpdateProfile } = useAuth();
  const [picture, setPicture] = useState<PictureValue | null>(
    profile?.photoUrl ? { url: profile.photoUrl } : null
  );

  const handleComfirm = () => {
    toast.promise(onUpdateProfile({ photoUrl: picture?.url }), {
      loading: "Mise a jour de la photo de profile...",
      success: <b>Photo de profile mis a jour !</b>,
      error: <b>Mise a jour échoué.</b>,
    });
  };

  const handleCancel = () => {
    setPicture(profile?.photoUrl ? { url: profile.photoUrl } : null);
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
