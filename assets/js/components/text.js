var Text = React.createClass({
  render: function() {
    return (
      <span className="text {this.props.size}" >
        {this.props.content}
      </span>
    );
  }
});