var LoginPage = React.createClass({
  render: function() {
    return (
      <div>
        <LoginTitle />
        <LoginForm />
      </div>
    );
  }
});

var LoginTitle = React.createClass({
  render: function() {
    return (
      <div>
        {LOGIN_PAGE.TITLE}
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

    if (!username || !password) {
      return;
    }

    // TODO: submit to the server
    // $.ajax({
    //   url: this.props.url,
    //   dataType: 'json',
    //   type: 'POST',
    //   data: comment,
    //   success: function(data) {
    //     this.setState({data: data});
    //   }.bind(this),
    //   error: function(xhr, status, err) {
    //     console.error(this.props.url, status, err.toString());
    //   }.bind(this)
    // });
    window.location = "index.html"

    usernameInput.value = '';
    passwordInput.value = '';

    return;
  },

  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input placeholder={LOGIN_PAGE.USERNAME_INPUT.PLACEHOLDER} ref={LOGIN_PAGE.USERNAME_INPUT.REF} />
        <br/>
        <Input type="password" placeholder={LOGIN_PAGE.PASSWORD_INPUT.PLACEHOLDER} ref={LOGIN_PAGE.PASSWORD_INPUT.REF} />
        <br/>
        <Button type="submit" value={LOGIN_PAGE.SUBMIT_BUTTON} />
      </form>
    );
  }
});

var Input = React.createClass({

  render: function() {

    var inputType = "text";

    if(this.props.type)
      inputType = this.props.type;

    return (
      <input type={this.props.type} placeholder={this.props.placeholder} ref={this.props.ref} />
    );
  }
});

var Button = React.createClass({

  render: function() {

    var buttonType = "button";

    if(this.props.type === "submit")
      buttonType = "submit";

    return (
      <input type={buttonType} value={this.props.value} />
    );
  }
});

React.render(
  <LoginPage />,
  document.getElementById('content')
);

