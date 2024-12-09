import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles

const Home = () => {
  return (
    <div className="text-bg-dark">
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a href="/" className="navbar-brand">
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="50" fill="currentColor" className="bi bi-peace" viewBox="0 0 16 16" style={{ color: 'azure' }}>
              <path d="M7.5 1.018a7 7 0 0 0-4.79 11.566L7.5 7.793zm1 0v6.775l4.79 4.79A7 7 0 0 0 8.5 1.018m4.084 12.273L8.5 9.207v5.775a6.97 6.97 0 0 0 4.084-1.691M7.5 14.982V9.207l-4.084 4.084A6.97 6.97 0 0 0 7.5 14.982M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8"></path>
            </svg>
            <span className="fs-4">Snuggly Cats</span>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/Register">Register</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/snuggleboard">Snuggle board</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/information">My information</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <div className="px-4 py-5 my-5 text-center">
        <h1>Welcome to Snuggly Cats</h1>
        <hr className="hr hr-blurry" />
        <div className="container col-xl-10 col-xxl-8 px-4 py-5 bg-secondary">
          <h2 className="text-grey">What is Snuggly Cats?</h2>
          <h4>
            Snuggly Cats is ran by Jatsi who is also the CEO of Kitty Enterprises and this is his side project where cats that are in need of snuggles can register
            themselves here for snuggles!<br />
            Think of it as a dating app but just for snuggles!
          </h4>
          <div id="spacer" className="d-flex" style={{ height: '100px' }}>
            <div className="vr bg-secondary"></div>
          </div>
          <div>
            <img src="/images/doublejatsi.png" alt="Jatsi" className="img-thumbnail" />
            <h2 className="fw-normal">Jatsi (CEO)</h2>
            <h5>Jatsi, the sharp-eyed CEO of Kitty Enterprises in all of his glory.</h5>
          </div>
        </div>
      </div>
      <hr className="hr hr-blurry" />
    </div>
  );
};

export default Home;
