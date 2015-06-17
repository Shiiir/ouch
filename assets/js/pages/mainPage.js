var MainPage = React.createClass({
  getTime: function() {
    // TODO: Get available date from parse server...
    // dateArray = available date
    $.ajax();
  },

  getInitialState: function() {
    return {displayMsg: ""};
  },

  triggerDisplayMsg: function(message) {
    this.setState({displayMsg: message});
  },

  render: function() {
    return (
      <div>
        <NavArea dateArray={this.dateChoice}/>
        <AppointmentPicker displayMessage={this.triggerDisplayMsg}/>
        <DisplayArea content={this.state.displayMsg} />
      </div>
    );
  }
});

React.render(
  <MainPage />,
  document.getElementById('content')
);