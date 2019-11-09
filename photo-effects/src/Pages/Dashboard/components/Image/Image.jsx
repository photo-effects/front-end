import React from "react";
import PhotoLink from "./PhotoLink";

// mapping over image that is displayed after clicking "choose file"
// need to change to reflect only one image since user wont be uploading multiple to canvas
// secure_url(displays image) and public_id(used to delete image from cloudinary) are both coming from cloudinary.
const Image = props => {
  return (
    <div>
      {props.images.map(image => {
        return (
          <>
            <PhotoLink
              secure_url={image.secure_url}
              public_id={image.public_id}
              removeImage={props.removeImage}
              updateProject={props.updateProject}
            />
          </>
        );
      })}
    </div>
  );
}; 

export default Image;
