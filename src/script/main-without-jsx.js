

var React = require("react");

var Hello = React.createClass({displayName: 'Hello',
    render: function ()
    {
        return (
            React.DOM.div( {className:"special"},
                React.DOM.img( {src:"media/react.png"}),
                "Hello ",  this.props.target
            )
        );
    }
});


React.renderComponent(
    Hello( {target:"World!"}),
    document.getElementById("container")
);