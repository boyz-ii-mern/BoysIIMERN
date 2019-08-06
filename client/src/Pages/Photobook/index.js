import React, { Component } from "react";
// import ImageUploader from 'react-images-upload';
import {storage} from ".././../firebase";


class Photobook extends Component {
    constructor(props) {
        super(props);
         this.state = {
             image: null,
             url: ''
         };

         this.handleChange = this.handleChange.bind(this);

         this.handleUpload = this.handleUpload.bind(this);
    }
 
    handleChange = e => {
        if(e.target.files[0]) {
            const image = e.target.files[0];
            this.setState(() => ({image}));
        }
    }

    handleUpload = () => {
        const {image} = this.state;
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed', 
        (snapshot) => {
            // Progress Function
        },
        (error) => {
            // Error Function
            console.log(error);
        },
        () => {
            // Complete function
            storage.ref('images').child(image.name).getDownloadURL().then(url => {
                console.log(url);
                this.setState({url});
            })
        });
    }
 
    render() {
        const style = {
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        };
        return (
        <>
            <h1>Upload Your Pictures here!</h1>
            <div style={style}>
            <input type="file" onChange={this.handleChange}/>
            <button onClick={this.handleUpload}>Upload</button>
            <br/>
            <img src={this.state.url} alt="Uploaded Images" height="auto" width="auto"/>
        </div>
        </>
        );
    }
}
  
  export default Photobook;
  