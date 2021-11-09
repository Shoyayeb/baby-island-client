import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Navbar from './Pages/Shared/Navbar/Navbar';

function App() {
  return (
    <div>
      {/* <AuthProvider> */}
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          {/* <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/onlinedoctor">
              <OnlineDoctor></OnlineDoctor>
            </PrivateRoute>
            <PrivateRoute path="/ambulance">
              <Ambulance></Ambulance>
            </PrivateRoute>
            <PrivateRoute path="/service/:serviceId">
              <Service></Service>
            </PrivateRoute> */}
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer />
      </Router>
      {/* </AuthProvider> */}
    </div>
  );
}

export default App;
