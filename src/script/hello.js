/** @jsx React.DOM */

var React = require("react");

var Hello = React.createClass({
    render: function ()
    {
        return (
            <div className="special"><img src="media/react.png"/> { this.props.children } </div>
        );
    }
})

module.exports = Hello;