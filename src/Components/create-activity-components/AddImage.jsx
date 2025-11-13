import React from "react";
import {
  Field,
  ImagePreview,
  PreviewImg,
} from "../../Components/styled/create-activity-style-comp/CreateActivity.styled.jsx";

export default function AddImage({
  id = "image",
  label = "Add Image",
  accept = "image/*",
  onChange,
  preview, // string | undefined (object URL)
}) {
  return (
    <Field>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="file" accept={accept} onChange={onChange} />
      {preview && (
        <ImagePreview>
          <PreviewImg src={preview} alt="Selected activity" />
        </ImagePreview>
      )}
    </Field>
  );
}
