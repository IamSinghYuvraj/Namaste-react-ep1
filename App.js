const parent = React.createElement("h1", {
    id: "parent"
}, [React.createElement("h1", {
    id: "child"
}, [React.createElement("h1", {}, "This is an h1 tag"), React.createElement("h2", {}, "This is an h2 tag"), ]), React.createElement("h1", {
    id: "child2"
}, [React.createElement("h1", {}, "This is an h1 tag"), React.createElement("h2", {}, "This is an h2 tag"), 
]), 
]);


const root = ReactDOM.createRoot(document.getElementById("root")); //step 2: create an root element to put rood id of html

root.render(parent); //step 3:render the root by putting heading inside it