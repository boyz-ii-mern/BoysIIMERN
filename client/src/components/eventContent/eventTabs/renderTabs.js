import React from 'react';
import TabsTest from './tabContent';
import PhotoTab from './photoTab';
import CommentTab from './commentTab';
import SuperlativeTab from './superlativeTab';


function RenderTabs(props) {
    // console.log("renderTabs props", props)
    return (
        <div>
            <TabsTest>
                <CommentTab 
                
                    label="Comments" 
                 
                    action={props.action} 
                    comments={props.comments}
                    friends={props.friends} />
                <PhotoTab label="Photo Gallery" />
                <SuperlativeTab
                    eventId={props.eventId}
                    userId={props.userId}
                    friends={props.friends}
                    label="Superlatives"
                />
            </TabsTest>
        </div>
    );

}

export default RenderTabs;