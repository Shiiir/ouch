var LoginPage = React.createClass({
  render: function() {
    return (
      <div>
        <Text />
        <Input />
        <Input />
        <Button />
      </div>
    );
  }
});

React.render(
  <LoginPage />,
  document.getElementById('content')
);

