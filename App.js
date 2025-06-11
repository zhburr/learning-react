const heading = React.createElement("h1", {id:'heading'}, "Hello world from react");
const heading2 = React.createElement("h1", {id:'heading'}, "Hello world from react2");
const parent = React.createElement("div",{id  : 'parent'}, React.createElement('div',{id : 'child'},[heading,heading2]))
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
