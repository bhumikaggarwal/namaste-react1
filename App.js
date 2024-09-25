const parent = React.createElement("div",{id: "parent"},
    [React.createElement("div",{id: "child1"},[
        React.createElement("h1",{},"Its an h1 tag"),
        React.createElement("h2",{},"Its an h2 tag")
    ]),
    React.createElement("div",{id: "child2"},[
        React.createElement("h1",{},"Its an h1 tag"),
        React.createElement("h2",{},"Its an h2 tag")
    ])
]
);
const head = React.createElement("h1",{},"hello from react");

console.log(parent);    //React creates an object at end of the day
const root = ReactDOM.createRoot(document.getElementById("heading"));

root.render(head);