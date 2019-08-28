import React, { Component } from "react";
import PhotoLink from './PhotoLink';





const Image= props => {
    return (
        <div>
        {props.images.map(image=> {
            console.log(image.secure_url)
            return (
                <>
                <PhotoLink 
                secure_url={image.secure_url}
                public_id={image.public_id}
                removeImage={props.removeImage}
                updateProject={props.updateProject}
                />
                </>
            )
        })}
        </div>
    )
}

export default Image;