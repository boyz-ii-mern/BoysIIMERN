import React, { Component } from "react";
// import ImageUploader from 'react-images-upload';
import {storage} from "../firebase";


class Photobook extends Component {
    constructor(props) {
        super(props);
         this.state = {
            //  key or id for sorting by event:
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

    // Need to code a "Display All Images" function, one that can pull images PER event.
 
    render() {
        const style = {
            height: '50vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        };
        return (
        <>
            <div style={style}>
            <h3>Upload Your Pictures here!</h3>
            <br/>
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