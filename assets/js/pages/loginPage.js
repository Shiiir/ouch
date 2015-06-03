var LoginPage = React.createClass({
  render: function() {
    console.log("LOGIN_TITLE", LOGIN_TITLE);
    return (
      <div>
        <LoginTitle data={LOGIN_TITLE} />
        <Input placeholder={LOGIN_USERNAME_INPUT_PLACEHOLDER} />
        <br/>
        <Input placeholder={LOGIN_PASSWORD_INPUT_PLACEHOLDER} />
      </div>
    );
  }
});

var LoginTitle = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.data}
      </div>
    );
  }
});

var Input = React.createClass({
  render: function() {
    return (
      <input type="text" placeholder={this.props.placeholder} />
    );
  }
});

React.render(
  <LoginPage />,
  document.getElementById('content')
);

