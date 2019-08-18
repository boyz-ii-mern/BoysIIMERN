// Pages and Packages
import React, { Component } from "react";
// import Avatar from 'react-avatar-edit';
// import ImageUploader from 'react-images-upload';

// Firebase
import { storage, database } from "./../../firebase/index";
import "firebase/storage";
import "firebase/database";

class AvatarLoad extends Component {
  constructor(props) {
    super(props);
  }

  state = { 
    selectedFile: null,
    files: [],
    url: '',
    metadataFile: [],
    avatarLink: ''
  };

fileChangedHandler = (event) => {
  this.setState({ selectedFile: event.target.files[0] })
  console.log(event.target.files[0])
}

uploadHandler = (e) => {
  e.preventDefault();

  const file = this.state.selectedFile;
  console.log(file);

  // Logs for Testing
  console.log(storage.child(file.name).fullPath);

  const uploadTask = storage.child('avatars/' + file.name).put(file);
  
  uploadTask.on(`state_changed`, (snapshot) => {
      // Progress
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done.');
      switch (snapshot.state) {
        case storage.TaskState, 'paused':
          console.log('Upload is paused.');
          break;
        case storage.TaskState, 'running':
          console.log('Upload is running');
          break;
        }
    }, (error) => {
      // Error
      switch (error.code) {
        case 'storage/unauthorized':
          break;
        case 'storage/canceled':
          break;
        case 'storage/unknown':
          break;
        }
    }, () => {
      // Success!
      uploadTask.snapshot.ref.getDownloadURL()
      .then(function(downloadURL) {
        console.log("Uploaded Link: ", downloadURL);
      });

      // Get File Firebase Storage Metadata
      storage.child(`avatars/${file.name}`).getMetadata()
      .then((metadata) => {
        storage.child('avatars/' + file.name)
        .getDownloadURL().then(url => {
          console.log(url)
          let metadataFile = {
            name: metadata.name,
            downloadURL: url,
            contentType: metadata.contentType
          }
          this.setState({
            avatarLink: url
          });

          // Send avatarLink to log in SignUp Index
          this.props.action(`${this.state.avatarLink}`);
          
        // Save Metadata in Firebase Database
        database.child('avatars').push({ metadataFile });
        })
      }).catch(function(error) {
        console.log(error)
      });
    })
}

render() {

    return (
      <div>
          <p>Who's Most Likely to upload a profile pic?! YOU ARE!</p>
          <br />
          <input type="file" onChange={this.fileChangedHandler}/>
          <button onClick={this.uploadHandler}>Upload!</button>

          {/* <ImageUploader
              withIcon={true}
              buttonText='Choose an Image'
              onChange={this.onDrop}
              withPreview={true}
              singleImage={true}
              imgExtension={['.jpg', '.gif', '.png', '.gif']}
              maxFileSize={5242880}
          /> */}
          {/* <button onClick={this.onUpload}>Save Image</button>
          <br /> */}
      </div>
    ); 
  }
}

export default AvatarLoad;