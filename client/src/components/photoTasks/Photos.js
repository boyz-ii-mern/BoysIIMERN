// Import Necessary Libraries & Pages
import React, { Component } from "react";
import StackGrid from "react-stack-grid";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

// Firebase
import { database } from "../../firebase";
import "firebase/database";
import "firebase/storage";

class Photos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventId: '',
            file: null || ["null"],
            key: null || ["null"],
            url: null || ["null"],
            images: [] || ["null"],
            photoIndex: 0,
            isOpen: false,
        };
    }

    async componentDidMount() {
        const imgRef = database.child('images' + window.location.pathname + '/');

        imgRef.on('value', (child) => {
            
            console.log(child.val());
            console.log(Object.keys(child.val() || {}));

            if (Object.keys(child.val() || {}) === null) {
                return console.log("No Photos Uploaded Yet...");
            } else {
                return (this.setState({images: Object.keys(child.val() || {}).reverse().map(key => child.val()[key].metadataFile.downloadURL)
                }));
            }
         })
    }
    
    render () {
        const { photoIndex, isOpen } = this.state;

        const imgStyle = {
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "cover"
        };

        const imgDisplay = {
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
                {this.state.images.map((url, i) => ( 
                    <img src={url} photoindex={i} key={i} style={imgStyle} 
                    onClick={() => this.setState({ 
                        isOpen: true
                    })}/>
                ))}  
            </StackGrid>
            </div>

                {isOpen && (
                <Lightbox
                mainSrc={this.state.images[photoIndex]}
                nextSrc={this.state.images[(photoIndex + 1) % this.state.images.length]}
                prevSrc={this.state.images[(photoIndex + this.state.images.length - 1) % this.state.images.length]}
                onCloseRequest={() => this.setState({ isOpen: false })}
                enableZoom={false}
                onMovePrevRequest={() =>
                    this.setState({
                    photoIndex: (photoIndex + this.state.images.length - 1) % this.state.images.length,
                    })
                }
                onMoveNextRequest={() =>
                    this.setState({
                    photoIndex: (photoIndex + 1) % this.state.images.length,
                    })
                }
                />
            )}
            
        </div>
        );
    }
}

export default Photos;