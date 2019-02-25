import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

class Signup extends Component {
  onSubmit = formProps => {
    console.log(formProps);
  };

  render() {
    // console.log(this.props);
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset className="form-group">
          <label>Email:</label>
          {/* <input className="form-control" type="text" /> */}
          <Field
            name="email"
            type="text"
            component="input"
            // autoComplete="none"
          />
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          {/* <input className="form-control" type="password" /> */}
          <Field
            name="password"
            type="password"
            component="input"
            // antoComplete="none"
          />
        </fieldset>
        <button className="btn btn-primary">Signup</button>
      </form>
    );
  }
}

// const createReduxForm = reduxForm({
//   form: "signup",
//   fields: ["email", "password"]
// });

// export default createReduxForm(Signup);

export default reduxForm({ form: "signup" })(Signup);
