import styled from "styled-components";
import tw from "twin.macro";
import { HomePage } from "./containers/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login } from "./containers/Login";
import { Home } from "./containers/Dashboard/Home";
import { Library } from "./containers/Dashboard/Library";
const AppContainer = styled.div`
  z-index: -1;
  ${tw`
		w-full
		h-full
		flex
		flex-col
		bg-gradient-to-br from-black via-gray-900 to-blue-900
	`}
`;
function App() {
  return (
    <AppContainer>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Home} />
          <Route exact path="/library" component={Library} />
        </Switch>
      </Router>
    </AppContainer>
  );
}

export default App;
