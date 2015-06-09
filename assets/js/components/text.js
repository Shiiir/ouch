var Text = React.createClass({
  render: function() {
    classString = "text " +this.props.size
    return (
      <span className={classString} >
        {this.props.content}
      </span>
    );
  }
});