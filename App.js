const heading = document.createElement("h1"); //Create an Element 
heading.innerHTML = "Hello World from Javascript!!"
const jsparent = document.getElementById("jsHeading");
jsparent.appendChild(heading)

const reactheading = React.createElement("h1", {
     id: "heading",
     abc: "xyz"
}, "Hello World using React!!!");
const reactroot = ReactDOM.createRoot(document.getElementById("reactroot"));
 reactroot.render(reactheading); 


const reactparent = React.createElement("h1", {    //nested react elements 
    id: "parent"
}, [React.createElement("h1", {
    id: "child"
}, [React.createElement("h1", {}, "This is an h1 tag"), React.createElement("h2", {}, "This is an h2 tag"), ]), React.createElement("h1", {
    id: "child2"
}, [React.createElement("h1", {}, "This is an h1 tag"), React.createElement("h2", {}, "This is an h2 tag"), 
]), 
]); 


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(reactparent); //Use root render .