import { Responsive, WidthProvider } from "react-grid-layout";
import "./index.css"
import { useState } from "react";
import { Form, FormControl } from "react-bootstrap"

const ResponsiveGridLayout = WidthProvider(Responsive);


const layout = [
    { i: "First Question", x: 0, y: 0, w: 1, h: 3 },
    { i: "Second Question", x: 1, y: 0, w: 1, h: 1 },
    { i: "Third Question", x: 2, y: 0, w: 1, h: 1 },
    { i: "Fourth Question", x: 3, y: 0, w: 1, h: 1 },
    { i: "Fifth Question", x: 4, y: 0, w: 1, h: 1 }
];

const getLayouts = () => {
    const savedLayouts = localStorage.getItem("grid-layout");

    return savedLayouts ? JSON.parse(savedLayouts) : { lg: layout };
};

const _rowHeight = 200

const _rowWidth = 1000

const DraggableStuff = () => {

    const secondQ_options = [1, 2, 3, 4, 5]

    const [currentLayout, setCurrentLayout] = useState(layout)

    const handleLayoutChange = (layout, layouts) => {
        localStorage.setItem("grid-layout", JSON.stringify(layouts));
        setCurrentLayout(layout)
        console.log(layout)
    };

    return (
        <div>
            <ResponsiveGridLayout
                layouts={getLayouts()}
                breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                cols={{ lg: 4, md: 4, sm: 3, xs: 2, xxs: 1 }}
                rowHeight={_rowHeight}
                width={_rowWidth}
                onLayoutChange={handleLayoutChange}
            >

                <div class="input-group" key="First Question" style={{ padding: "5px" }}>
                    <div class="input-group-prepend" style={{ height: "40px" }}>
                        <span class="input-group-text">First Question</span>
                    </div>
                    <textarea class="form-control" style={{
                        height: ((_rowHeight * (currentLayout[0]["h"])) + ((10 * (currentLayout[0]["h"] - 1))) - 51) + "px",
                    }}>
                    </textarea>

                </div>
                <div key="Second Question">
                    <p style={{ padding: "8px", color: "#ffffff" }}>Second Question</p>
                </div>
                <div key="Third Question">
                    <p style={{ padding: "8px", color: "#ffffff" }}>Third Question</p>
                </div>
                <div key="Fourth Question">
                    <p style={{ padding: "8px", color: "#ffffff" }}>Fourth Question</p>
                </div>
                <div key="Fifth Question">
                    <p style={{ padding: "8px", color: "#ffffff" }}>Fifth Question</p>
                </div>
            </ResponsiveGridLayout>
        </div>
    );
};
export default DraggableStuff