var Text = React.createClass({
  getDefaultProps: function() {
	return {
		content: "",
		size: 0
	};
  },

  render: function() {
    classString = "text " + this.props.size

    return (
      <span className={classString} >
        {this.props.content}
      </span>
    );
  }
});