var MainPage = React.createClass({
  render: function() {
    return (
      <div>
        <NavArea />
        <AppointmentPicker />
        <DisplayArea />
      </div>
    );
  }
});

var NavArea = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentAox.
      </div>
    );
  }
});

var DisplayArea = React.createClass({
  render: function() {
    return (
      <div>
        And here's an area for display.
      </div>
    );
  }
});

React.render(
  <MainPage />,
  document.getElementById('example')
);