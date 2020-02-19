import * as React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import * as routes from "../../constants/routes";
import {firebase} from "../../firebase";
import {Account} from "../Account";
import {Home} from "../Home";
import {Default} from "../Default";
import {Navigation} from "../Navigation";
import {PasswordForget} from "../PasswordForgot";
import {withAuthentication} from "../Session/withAuthentication";
import {SignIn} from "../SignIn";
import {SignUp} from "../SignUp";

class AppComponent extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      authUser: null
    };
  }

  public componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState(() => ({ authUser }))
        : this.setState(() => ({ authUser: null }));
    });
  }

  public render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <hr />
          <Switch>
            <Route exact={true} path={routes.DEFAULT} component={Default} />
            <Route exact={true} path={routes.SIGN_UP} component={SignUp} />
            <Route exact={true} path={routes.SIGN_IN} component={SignIn} />
            <Route
              exact={true}
              path={routes.PASSWORD_FORGET}
              component={PasswordForget}
            />
            <Route exact={true} path={routes.HOME} component={Home} />
            <Route exact={true} path={routes.ACCOUNT} component={Account} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export const App = withAuthentication(AppComponent);
