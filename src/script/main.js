/** @jsx React.DOM */

var React = require("react");

var Hello = React.createClass({
    render: function ()
    {
        return (
            <div className="special">
                <img src="media/react.png"/>
                Hello { this.props.target }
            </div>
        );
    }
});


React.renderComponent(
    <Hello target="World!"/>,
    document.getElementById("container")
);
