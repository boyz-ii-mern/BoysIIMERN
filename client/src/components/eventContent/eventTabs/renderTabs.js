import React from 'react';
import TabsTest from './tabContent';
import PhotoTab from './photoTab';
import CommentTab from './commentTab';
import SuperlativeTab from './superlativeTab';



function RenderTabs(props) {
    // console.log("rendertabs", props)
    return (
        <div>
            <TabsTest>
                <CommentTab label="Comments" action={props.action} comments={props.comments} />
                <PhotoTab label="Photo Gallery" />
                <SuperlativeTab label="Superlatives" />
            </TabsTest>
        </div>
    );

}
export default RenderTabs;