import logo from './logo.svg';
import Login from './components/Login/Login';

function App()  {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">

              <a className="navbar-brand" href="/"><img src={logo} width="30"  alt="logo" /></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">

                </div>
              </div>

          </div>
        </nav>
      </header>

      <div className="row">
        <div className="col col-md-6 offset-md-3">
          <h1 className="text-center">
            Welcome to Home page
          </h1>
        </div>
      </div>

    </div>
  );
}

export default App;
