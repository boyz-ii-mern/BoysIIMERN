import React, { Component } from 'react';
import Photos from '../../photoTasks/Photos';
import UploadPhotos from "../../photoTasks/UploadPhotos"

class PhotoTab extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <UploadPhotos />
                <Photos />
            </div>
        );
    }

}
export default PhotoTab;