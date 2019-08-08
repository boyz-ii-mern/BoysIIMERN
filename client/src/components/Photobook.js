import React, { Component } from "react";
// import ImageUploader from 'react-images-upload';
import { storage, database } from "../firebase";


class Photobook extends Component {
    constructor(props) {
        super(props);
         this.state = {
            //  key or id for sorting by event:
            image: null,
            url: '',
            images: []
         };

         this.handleChange = this.handleChange.bind(this);

         this.handleUpload = this.handleUpload.bind(this);
    }
 
    handleChange = e => {
        if(e.target.files[0]) {
            const image = e.target.files[0];
            this.setState(() => ({
                image: {image},
                url: URL.createObjectURL(image)
            }));
        }
    }

    handleUpload = () => {
        const {image} = this.state;
        const uploadTask = storage.ref(`images/${image.name}`).put(image[0]);
        const key = '';

        uploadTask.on('state_changed',
        (error) => {
            // Error Function
            console.log(error);
        },
        () => {
            storage.ref('images').child(image.name).getDownloadURL().then((snap) => {
                database.ref().child(this.state).child(key).set({
                    "url" : snap.metadata.downloadURLs[0]
                })
            })
        
            this.setState({
                file: null,
                url: null,
            })
        });
    }

    componentDidMount() {
        const ref = database.ref();
        ref.on('child_added', (child) => {
            let images = this.state.images.slice();
            images.push({
                key: child.key,
                url: child.val().url
            })
            this.setState({images})
        });
    }
 
    render() {
        const style = {
            height: '50vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        };

        const previewStyle = {
            maxHeight: "100px",
            maxWidth: "100px"
        };

        const imgStyle = {
            maxHeight: "300px",
            maxWidth: "300px"
        };

        return (
        <>
        <div style={style}>
            <h3>Upload Your Pictures here!</h3>
            <br/>
            <input type="file" onChange={this.handleChange}/>
            <img src={this.state.url} style={previewStyle} alt=" " />
            <button onClick={this.handleUpload}>Upload</button>
            <br/>
            {this.state.images.map((image) =>
                <div key={image.key}>
                    <img src={image.url} style={imgStyle} alt=" " />
                </div>
            )}
        </div>
        </>
        );
    }
}
  
  export default Photobook;
  