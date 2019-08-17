import React, { Component } from 'react';
import TabsTest from './tabContent';
import Comments from '../Comments/commentSection';
import AddComment from '../Comments/addComment';
import Photos from '../../photoTasks/Photos';
import UploadPhotos from "../../photoTasks/UploadPhotos"
import Superlatives from '../Superlatives/superlatives';
import SuperlativesForm from '../Superlatives/addSuperlativeForm';

function RenderTabs(props) {
    // console.log("rendertabs", props)
    return (
        <div>
            <TabsTest>
                <div label="Comments">
                    <AddComment />
                    <Comments comments={props.comments}/>
                </div>
                
                <div label="Photo Gallery">
                    <UploadPhotos />
                    <Photos />
                </div>

                <div label="Superlatives">
                    <SuperlativesForm />
                    <Superlatives />
                </div>
            </TabsTest>
        </div>
    );

}
export default RenderTabs;