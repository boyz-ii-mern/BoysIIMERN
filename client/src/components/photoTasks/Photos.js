// Import Necessary Libraries & Pages
import React, { Component } from "react";
import { render } from 'react-dom';
import UploadPhotos from "./UploadPhotos";

// Firebase
import { database, storage, firebase } from "../../firebase";
import "firebase/database";
import "firebase/storage";

import ImageGallery from "react-image-gallery";

class Photos extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // user: this.props.user,
            // eventID: to-do...
            file: null,
            key: null,
            url: null,
            images: []
        };

    }


    componentDidMount() {
        const imgRef = database.child('images');

        imgRef.on('value', (child) => {
            

            console.log(child.val());
            console.log(Object.keys(child.val()));

            this.setState({images: Object.keys(child.val()).map(key => child.val()[key].metadataFile.downloadURL)});
         })
    }
    

    render () {
        const imgStyle = {
            maxHeight: "50%",
            maxWidth: "50%",
            padding: '1rem'
        };

        const imgDisplay = {
            marginTop: '1rem',
            display: 'flex-box',
            flexDirection: 'column'
        };

        return(
            <div>
                <UploadPhotos />
                <br/>
        
            <div className="imgDiv" style={imgDisplay}>
                {this.state.images.map((url, i) => ( 
                <img src={url} key={i} style={imgStyle}/>
               ))}
            </div>
        </div>
        );
    }
}

export default Photos;