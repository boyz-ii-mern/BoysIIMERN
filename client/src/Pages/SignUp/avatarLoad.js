// Pages and Packages
import React, { Component } from "react";
// import Avatar from 'react-avatar-edit';
import ImageUploader from 'react-images-upload';
import shortid from 'shortid'

// Firebase
import { storage, database } from "./../../firebase/index";
import "firebase/storage";
import "firebase/database";

// FilePond
import { FilePond, registerPlugin, File } from "react-filepond";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";

// FilePond CSS
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register Filepond Plugins for Additional Functionality
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

class AvatarLoad extends Component {
  constructor(props) {
    super(props);

    // Reference Firebase 
    this.storageRef = storage;
    this.databaseRef = database;

}

    state = {
        files: [],
        url: null,
        uploadValue: 0,
        metadataFile: [],
        rows: [],
        avatarLink: ''
    };
    
// Handles our Image Storage
handleProcessing(fieldName, file, metadata, load, error, progress, abort) {
    // Logs for Testing
    console.log(this.storageRef.child(file.name).fullPath);

    const fileUpload = file;

    // ShortID 
    const id = shortid.generate();

    const task = this.storageRef.child(`avatars/${file.name}`).put(fileUpload, {
        shortID: id});

    // Handle Uploading Here
        task.on(`state_changed` , (snapshot) => {
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
        }, (err) => {
            // Log Error
            console.log(err);
            error(err.message);
        }, () => {
            // Success
            console.log("VICTORY");
            this.setState({
                url: task.snapshot.downloadURL
            })

            // Get Metadata
            this.storageRef.child(`avatars/${file.name}`).getMetadata().then((metadata) => {
                // Metadata for 'filepond/${file.name}' contained
                // let downloadURL = '';
                this.storageRef.child(`avatars/${file.name}`).getDownloadURL().then(url => {
                    console.log(url)
                    let metadataFile = {
                        name: metadata.name,
                        size: metadata.size,
                        contentType: metadata.contentType,
                        fullPath: metadata.fullPath,
                        downloadURL: url,
                        id: id,
                        // eventId: this.uploadEventId,
                    }
                    this.setState({
                      avatarLink: url
                    });

                  // Send avatarLink to log in SignUp Index
                  this.props.action(`${this.state.avatarLink}`);

                // Save Metadata
                this.databaseRef.child('avatars').push({ metadataFile });
                });
            }).catch(function(error) {
              console.log(error)
        });
    })
}

handleInit() {
    console.log("FilePond ACTIVATED", this.pond);
}

render() {
  const pondStyle = {
    width: '170px',
    marginRight: '0',
    contentAlign: 'right'
  }

  const imgStyle = {
    borderRadius: '50%',
    marginRight: '0',
    marginLeft:'0',
    contentAlign: 'left',
    position: 'absolute',
    maxWidth: '170px',
    maxHeight: '170px',
    width: '200px',
    height: '200px'
  }

    return(
      <div>
        <p>Who's Most Likely to upload a profile pic?! YOU ARE!</p>
        <br />
        <div style={pondStyle}>
        <img style={imgStyle} src={this.state.avatarLink} alt='' />
              <FilePond
                  ref={ref => (this.pond = ref)}
                  files={this.state.files}
                  allowMultiple={false}
                  maxFiles={1}
                  allowImagePreview={true}
                  imagePreviewHeight={170}
                  imageCropAspectRatio={'1:1'}
                  imageResizeTargetWidth={200}
                  imageResizeTargetHeight={200}
                  stylePanelLayout={'compact circle'}
                  styleLoadIndicatorPosition={'center bottom'}
                  styleProgressIndicatorPosition={'center bottom'}
                  styleButtonRemoveItemPosition={'center bottom'}
                  styleButtonProcessItemPosition={'center bottom'}
                  server={{process : this.handleProcessing.bind(this)}}
                  oninit={() => this.handleInit()}
              >
                  {this.state.files.map(file => (
                      <File key = {file} source = {file}/>
                  ))}
              </FilePond>
            </div>
      </div>
    );
}
}

export default AvatarLoad;