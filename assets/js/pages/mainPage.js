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

React.render(
  <MainPage />,
  document.getElementById('content')
);