import React, { Component } from "react";


const Image = props => {
    return (
        <div>
        {props.images.map(image=> {
            console.log(image.secure_url)
            return (
                <>
                <div>
                <img src={image.secure_url} />
                </div>
                <div>
                <button onClick={() => props.removeImage(image.public_id)}>Delete</button>
                </div>
                </>
            )
        })}
        </div>
    )
}

export default Image;