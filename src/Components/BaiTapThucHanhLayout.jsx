import React, { Component } from "react";
import "./BaiTapThucHanhLayout.css";

export default class BaiTapThucHanhLayout extends Component {
  render() {
    return (
      <div className="">
        <div className="header">
          <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container d-flex">
              <a className="navbar-brand" href="#">
                Start Bootstrap
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="main">
          <div className="banner py-5">
            <div className="container px-lg-5">
              <div className="p-4 p-lg-5 bg-light rounded-3 text-center">
                <div className="m-4 m-lg-5">
                  <h1 className="fw-bold">A warm welcome!</h1>
                  <p className="fs-4">
                    Bootstrap utility classes are used to create this jumbotron
                    since the old component has been removed from the framework.
                    Why create custom CSS when you can use utilities?
                  </p>
                  <button className="btn btn-primary btn-lg">
                    Call to action
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="content pt-4">
            <div className="container px-lg-5">
              <div className="row">
                <div className="col-6 mb-5">
                  <div className="card bg-light border-0 h-100">
                    <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                      <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                      <i class="fa-solid fa-layer-group"></i>
                      </div>
                      <h2 className="fs-4 fw-bold">Fresh new layout</h2>
                      <p className="mb-0">
                        With Bootstrap 5, we've created a fresh new layout for
                        this template!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-5">
                  <div className="card bg-light border-0 h-100">
                    <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                      <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                      <i class="fa-solid fa-cloud-arrow-down"></i>
                      </div>
                      <h2 className="fs-4 fw-bold">Free to download</h2>
                      <p className="mb-0">
                        As always, Start Bootstrap has a powerful collectin of
                        free templates.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-5">
                  <div className="card bg-light border-0 h-100">
                    <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                      <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                      <i class="fa-solid fa-align-justify"></i>
                      </div>
                      <h2 className="fs-4 fw-bold">Jumbotron hero header</h2>
                      <p className="mb-0">
                        The heroic part of this template is the jumbotron hero
                        header!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-5">
                  <div className="card bg-light border-0 h-100">
                    <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                      <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                      <i class="fa-brands fa-bootstrap"></i>
                      </div>
                      <h2 className="fs-4 fw-bold">Feature boxes</h2>
                      <p className="mb-0">
                        We've created some custom feature boxes using Bootstrap
                        icons!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-5">
                  <div className="card bg-light border-0 h-100">
                    <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                      <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                      <i class="fa-solid fa-code"></i>
                      </div>
                      <h2 className="fs-4 fw-bold">Simple clean code</h2>
                      <p className="mb-0">
                        We keep our dependencies up to date and squash bugs as
                        they come!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-5">
                  <div className="card bg-light border-0 h-100">
                    <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                      <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                      <i class="fa-regular fa-circle-check"></i>
                      </div>
                      <h2 className="fs-4 fw-bold">A name you trust</h2>
                      <p className="mb-0">
                        Start Bootstrap has been the leader in free Bootstrap
                        templates since 2013!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer py-5 bg-dark">
          <div className="container">
            <p className="m-0 text-center text-white">
              Copyright © Your Website 2023
            </p>
          </div>
        </div>
      </div>
    );
  }
}
