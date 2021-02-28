const Car = () => {
    return React.createElement("div", {},
    [
        React.createElement("h2", {}, "Ford"),
        React.createElement("h2", {}, "Hunda"),
        React.createElement("h2", {}, "Tata"),
    ]
    )
}



// create a component called App
const App = () => {
    return React.createElement(
        "div", // what kind of tag you want
        {}, // componenet attributes, id, name for example
        Car()
    )
}

// render this React component to this div
ReactDOM.render(
    React.createElement(App), 
    document.getElementById("root")
)
