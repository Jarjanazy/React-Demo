const Car = (props) => {
    return React.createElement("div", {},
    [
        React.createElement("h2", {}, props.name),
        React.createElement("h2", {}, props.prodYear),
        React.createElement("h2", {}, props.price),
    ]
    )
}



// create a component called App
const App = () => {
    return React.createElement(
        "div", // what kind of tag you want
        {}, // componenet attributes, id, name for example
        [
        Car({
            name : "Jeep",
            prodYear : "2020",
            price : "10k"
        }),
        Car({
            name : "Ford",
            prodYear : "2018",
            price : "8k"
        })
    ]
    )
}

// render this React component to this div
ReactDOM.render(
    React.createElement(App), 
    document.getElementById("root")
)
