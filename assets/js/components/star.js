var Star = React.createClass({
  getInitialState: function() {
    return {isActive: false};
  },

  changeStarState: function() {
    this.setState({isActive: !this.state.isActive});
  },

  render: function() {
    var active = "";
    if (this.state.isActive) {
      active = " active";
    }

    classString = "star" + active
    return (
      <span className={classString} onClick={this.changeStarState} >
        ★
      </span>
    );
  }
});