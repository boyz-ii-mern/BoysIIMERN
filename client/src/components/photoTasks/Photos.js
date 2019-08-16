// Import Necessary Libraries & Pages
import React, { Component } from "react";
import { render } from 'react-dom';
import StackGrid from "react-stack-grid";
// import sizeMe from 'react-sizeme';

// Firebase
import { database, storage, firebase } from "../../firebase";
import "firebase/database";
import "firebase/storage";

// import ImageGallery from "react-image-gallery";

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
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "cover"
        };

        const imgDisplay = {
            marginTop: '1rem',
            display: 'flex-box',
            flexDirection: 'column'
        };

        return(
            <div>
        
            <div className="imgDiv" style={imgDisplay}>
            <StackGrid
                 columnWidth={250}
                 monitorImagesLoaded={true}
                >
                {this.state.images.reverse().map((url, i) => ( 
                <img src={url} key={i} style={imgStyle}/>
               ))}
            </StackGrid>
            </div>
        </div>
        );
    }
}

export default Photos;