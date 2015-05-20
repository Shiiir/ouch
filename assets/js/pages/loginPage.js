var LoginPage = React.createClass({
  render: function() {
    return (
      <div>
        <Text data=LOGIN_TITLE/>
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

