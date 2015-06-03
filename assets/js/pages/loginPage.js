var LoginPage = React.createClass({
  render: function() {
    console.log("LOGIN_TITLE", LOGIN_PAGE.TITLE);
    return (
      <div>
        <LoginTitle data={LOGIN_PAGE.TITLE} />
        <LoginForm />
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

// Reference: https://facebook.github.io/react/docs/tutorial.html#adding-new-comments
var LoginForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var usernameInput = React.findDOMNode(this.refs.username);
    var passwordInput = React.findDOMNode(this.refs.password);
    var username = usernameInput.value.trim();
    var password = passwordInput.value.trim();
    console.log("username", username, "password", password);
    if (!username || !password) {
      return;
    }
    // TODO: send request to the server
    usernameInput.value = '';
    passwordInput.value = '';
    return;
  },
  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input placeholder={LOGIN_PAGE.USERNAME_INPUT.PLACEHOLDER} ref={LOGIN_PAGE.USERNAME_INPUT.REF} />
        <br/>
        <Input placeholder={LOGIN_PAGE.PASSWORD_INPUT.PLACEHOLDER} ref={LOGIN_PAGE.PASSWORD_INPUT.REF} />
        <br/>
        <Button type="submit" value={LOGIN_PAGE.SUBMIT_BUTTON} />
      </form>
    );
  }
});

var Input = React.createClass({
  render: function() {
    return (
      <input type="text" placeholder={this.props.placeholder} ref={this.props.ref} />
    );
  }
});

var Button = React.createClass({
  render: function() {
    var buttonType = "";
    if(this.props.type === "submit")
      buttonType = "submit";
    else
      buttonType = "button";
    return (
      <input type={buttonType} value={this.props.value} />
    );
  }
});

React.render(
  <LoginPage />,
  document.getElementById('content')
);

