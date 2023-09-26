import React, { useEffect, useState } from "react";

import { ProfileEntity } from "@frenchies-spots/gql";
import { ImagePicker, PictureValue } from "@frenchies-spots/material";

import toast from "react-hot-toast";
import { useAuth } from "../../hooks";
import ModalComfirm from "../Popup/ModalComfirm/ModalComfirm";
import { useCloudinary } from "./../../hooks/use-cloudinary";

interface ProfilePhotoProps {
  profile: ProfileEntity;
}

const ProfilePhoto = (props: ProfilePhotoProps) => {
  const { profile } = props;

  const { onUpdateProfile } = useAuth();
  const [picture, setPicture] = useState<PictureValue | null>(
    profile?.photoUrl ? { url: profile.photoUrl } : null
  );

  useEffect(() => {
    setPicture(profile?.photoUrl ? { url: profile.photoUrl } : null);
  }, [profile]);

  const { uploadImage } = useCloudinary();

  const handleComfirm = async () => {
    if (profile && picture?.url) {
      const upload = async () => {
        const image = await uploadImage({
          folderName: `profiles/${profile.pseudo}/${profile.id}`,
          data: picture?.url,
        });
        return onUpdateProfile({ photoUrl: image.secure_url });
      };
      toast.promise(upload(), {
        loading: "Mise a jour de la photo de profile...",
        success: <b>Photo de profile mis a jour !</b>,
        error: <b>Mise a jour échoué.</b>,
      });
    }
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
