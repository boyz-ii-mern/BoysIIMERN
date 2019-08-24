// Pages and Packages
import React, { Component } from "react";
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

class bannerLoad extends Component {
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
        bannerLink: ''
    };
    
// Handles our Image Storage
handleProcessing(fieldName, file, metadata, load, error, progress, abort) {
    // Logs for Testing
    console.log(this.storageRef.child(file.name).fullPath);

    const fileUpload = file;

    // ShortID 
    const id = shortid.generate();

    const task = this.storageRef.child(`banners/${file.name}`).put(fileUpload, {
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
            this.storageRef.child(`banners/${file.name}`).getMetadata().then((metadata) => {
                // Metadata for 'filepond/${file.name}' contained
                this.storageRef.child(`banners/${file.name}`).getDownloadURL().then(url => {
                    console.log(url)
                    let metadataFile = {
                        name: metadata.name,
                        size: metadata.size,
                        contentType: metadata.contentType,
                        fullPath: metadata.fullPath,
                        downloadURL: url,
                        id: id,
                    }
                    this.setState({
                      bannerLink: url
                    });

                  // Send bannerLink to log in Create Event Index
                  this.props.action(`${this.state.bannerLink}`);

                // Save Metadata
                this.databaseRef.child('banners').push({ metadataFile });
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
  const parentDiv = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center!important'
  }

  const pondStyle = {
    justifyContent: 'center'
  }

  const imgDiv = {
    width: '300px',
    height: '150px',
    overflow: 'hidden',
    margin: '0 auto'
  }

  const imgStyle = {
    margin: 'auto',
    display: 'inline',
    height: 'auto',
    width: '100%'
  }

    return(
      <div>
        <p>Choose a Banner for Your Event!</p>
        <br />
        <div style={parentDiv}>
          <div style={pondStyle}>
              <FilePond
                  ref={ref => (this.pond = ref)}
                  files={this.state.files}
                  allowMultiple={false}
                  maxFiles={1}
                  allowImagePreview={true}
                  server={{process : this.handleProcessing.bind(this)}}
                  oninit={() => this.handleInit()}
              >
                  {this.state.files.map(file => (
                      <File key = {file} source = {file}/>
                  ))}
              </FilePond>
            </div>
          <div style={imgDiv}>
            <img style={imgStyle} src={this.state.bannerLink} alt='' />
          </div>
        </div>
      </div>
    );
}
}

export default bannerLoad;