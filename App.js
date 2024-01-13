// const header = React.createElement("h1",{id: "heading"}, "Hello from React sript!");
// const root = ReactDOM.createRoot(document.getElementById("root"));

// console.log(header)

// root.render(header)


{/* <div id="grandparent ">
        <div id = "parent">
            <div id = "child">   
            <h1></h1>
            <p></p>
        </div>
    </div>
</div> */}

const grandparent = React.createElement(
    "div",
    {id : "grandparent"},
    React.createElement(
        "div",
        {id: "parent"},
            React.createElement(
                "div",
                {id:"child"},
                [
                    React.createElement("H1",{id:"h1"},"i'm h1 tag"),
                    React.createElement("p",{id:"p"},"i m df tag")
                ]
            )
        )
);
console.log(grandparent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(grandparent);