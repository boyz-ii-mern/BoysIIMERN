import React, { Component } from 'react';
import TabsTest from './tabContent';
import Comments from '../Comments/commentSection';

function RenderTabs() {
    return (
        <div>
            <TabsTest>
                <div label="Comments">
                    <Comments />
                </div>
                <div label="Photo Gallery">
                   <p>The photo gallery goes here!</p>
                </div>
                <div label="Superlatives">
                    <p>Superlatives are assigned here!</p>
                </div>
            </TabsTest>
        </div>
    );

}
export default RenderTabs;