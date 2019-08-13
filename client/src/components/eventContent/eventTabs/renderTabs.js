import React, { Component } from 'react';
import TabsTest from './tabContent';
import Comments from '../Comments/commentSection';
import Photos from '../../photoTasks/Photos';

function RenderTabs(props) {
    // console.log("rendertabs", props)
    return (
        <div>
            <TabsTest>
                <div label="Comments">
                    <Comments comments={props.comments}/>
                </div>
                <div label="Photo Gallery">
                   <Photos />
                </div>
                <div label="Superlatives">
                    <p>Superlatives are assigned here!</p>
                </div>
            </TabsTest>
        </div>
    );

}
export default RenderTabs;