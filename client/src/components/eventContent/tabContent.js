import React from "react";
import { render } from "react-dom";
import { Tabs } from "@yazanaabed/react-tabs";

class TabsTest extends React.Component {
    return() {
        render(
            <div>
                <Tabs
                activeTab={{
                    id: "tab1"
                }}
                >
                <Tabs.Tab id="tab1" title="Tab 1">
                    <div style={{ padding: 10 }}>This is tab 1</div>
                </Tabs.Tab>
                <Tabs.Tab id="tab2" title="Tab 2">
                    <div style={{ padding: 10 }}>This is tab 2</div>
                </Tabs.Tab>
                </Tabs>
            </div>
        )
    }
}

export default TabsTest;