var DisplayArea = React.createClass({
  getDefaultProps: function() {
	return {
		content: ""
	};
  },

  render: function() {
    return (
      <div class="note">
        <Text content={this.props.content}/>
      </div>
    );
  }
});