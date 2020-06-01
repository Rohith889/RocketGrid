import React, { Component } from "react";
import Super from "./super";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Search from "./search";
import Navba from "./navbar";
import "./App.css";
import { _ } from "lodash";
import CheckBox from "./checkbox";

import Carouse from "./carousel";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isloaded: false,
      filter: false,
      id1: false,
      id2: false,
      id3: false,
      id4: false,
      filterText: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isloaded: true,

          items: json
        });
      });
  }

  filterUpdate(value) {
    this.setState({
      filterText: value
    });
  }
  filterbutton = () => {
    const kp = this.state.filter;
    this.setState({ filter: !kp });
  };
  id1button = () => {
    const ap = this.state.id1;
    this.setState({ id1: !ap });
  };
  id2button = () => {
    const ap = this.state.id2;
    this.setState({ id2: !ap });
  };
  id3button = () => {
    const ap = this.state.id3;
    this.setState({ id3: !ap });
  };
  id4button = () => {
    const ap = this.state.id4;
    this.setState({ id4: !ap });
  };

  render() {
    console.log(this.state.filterText);
    var { isloaded, items, filterText } = this.state;

    let NewText = this.state.items
      .filter(name => {
        return name.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0;
      })
      .map(name => {
        return (
          <li key={name.id}>
            {name.name}||{name.username}{" "}
          </li>
        );
      });
    var { isloaded, items } = this.state;
    if (!isloaded) {
      return (
        <div className="Load">
          <center>
            <h2>Loading...!</h2>
          </center>
        </div>
      );
    } else {
      return (
        <div className="body">
          <Super />

          <button className="btn" onClick={this.filterbutton}>
            <h4>Filter</h4>
          </button>

          {this.state.filter === true ? (
            <div className="but">
              <div className="cor">
                <div className="row">
                  <div className="col-1">
                    {" "}
                    <Navba />
                  </div>

                  <div className="col-sm-6 ">
                    <h3>UserInformation..!</h3>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-1">
                  <Navba />
                </div>
                <div className="col-sm-1 ">
                  <button className="btn-1">
                    <h6>ID</h6>
                  </button>
                  <p>Sorted</p>

                  {this.state.items.map((item, index) => (
                    <div>
                      <td>{item.id}</td>
                    </div>
                  ))}
                </div>

                <div className="col-sm-2 ">
                  <button className="btn-1" onClick={this.id1button}>
                    <h6>Name</h6>
                  </button>
                  <p>SortHere</p>
                  <div>
                    {this.state.id1 === false ? (
                      <div>
                        {this.state.items.map((item, index) => (
                          <div>
                            <td>{item.name}</td>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div>
                        {_.sortBy(items, ["name"]).map((item, index) => (
                          <div>
                            <td>{item.name}</td>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-sm-2 ">
                  <button className="btn-1" onClick={this.id2button}>
                    <h6>UserName</h6>
                  </button>
                  <p>SortHere</p>
                  <div>
                    {this.state.id2 === false ? (
                      <div>
                        {this.state.items.map((item, index) => (
                          <div>
                            <td>{item.username}</td>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div>
                        {_.sortBy(items, ["username"]).map((item, index) => (
                          <div>
                            <td>{item.username}</td>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-sm-1.5 ">
                  <button className="btn-1" onClick={this.id3button}>
                    <h6>CityName</h6>
                  </button>
                  <p>SortHere</p>
                  <div>
                    {this.state.id3 === false ? (
                      <div>
                        {this.state.items.map((item, index) => (
                          <div>
                            <td>{item.address.city}</td>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div>
                        {_.sortBy(items, ["address.city"]).map(
                          (item, index) => (
                            <div>
                              <td>{item.address.city}</td>
                            </div>
                          )
                        )}
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-sm-2 ">
                  <button className="btn-1" onClick={this.id4button}>
                    <h6>Email</h6>
                  </button>
                  <p>SortHere</p>
                  <div>
                    {this.state.id4 === false ? (
                      <div>
                        {this.state.items.map((item, index) => (
                          <div>
                            <td>{item.email}</td>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div>
                        {_.sortBy(items, ["email"]).map((item, index) => (
                          <div>
                            <td>{item.email}</td>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-sm-2.5 ">
                  <Search
                    filterText={this.state.filterText}
                    filterUpdate={this.filterUpdate.bind(this)}
                  />
                  <p>{NewText}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="last">
              <div className="cor">
                <div className="row">
                  <div className="col-1">
                    {" "}
                    <Navba />
                  </div>

                  <div className="col-sm-6 ">
                    <h3>UserInformation..!</h3>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-1 ">
                  <Navba />
                </div>

                <div className="col-sm-1 ">
                  <button className="btn-1">
                    <h6>ID</h6>
                  </button>
                  <p>Sorted</p>

                  {this.state.items.map((item, index) => (
                    <div>
                      <td>{item.id}</td>
                    </div>
                  ))}
                </div>

                <div className="col-sm-2 ">
                  <button className="btn-1" onClick={this.id1button}>
                    <h6>Name</h6>
                  </button>
                  <p>SortHere</p>
                  <div>
                    {this.state.id1 === false ? (
                      <div>
                        {this.state.items.map((item, index) => (
                          <div>
                            <td>{item.name}</td>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div>
                        {_.sortBy(items, ["name"]).map((item, index) => (
                          <div>
                            <td>{item.name}</td>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-sm-2 ">
                  <button className="btn-1" onClick={this.id2button}>
                    <h6>UserName</h6>
                  </button>
                  <p>SortHere</p>
                  <div>
                    {this.state.id2 === false ? (
                      <div>
                        {this.state.items.map((item, index) => (
                          <div>
                            <td>{item.username}</td>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div>
                        {_.sortBy(items, ["username"]).map((item, index) => (
                          <div>
                            <td>{item.username}</td>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-sm-2 ">
                  <button className="btn-1" onClick={this.id3button}>
                    <h6>CityName</h6>
                  </button>
                  <p>SortHere</p>
                  <div>
                    {this.state.id3 === false ? (
                      <div>
                        {this.state.items.map((item, index) => (
                          <div>
                            <td>{item.address.city}</td>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div>
                        {_.sortBy(items, ["address.city"]).map(
                          (item, index) => (
                            <div>
                              <td>{item.address.city}</td>
                            </div>
                          )
                        )}
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-sm-2 ">
                  <button className="btn-1" onClick={this.id4button}>
                    <h6>Email</h6>
                  </button>
                  <p>SortHere</p>
                  <div>
                    {this.state.id4 === false ? (
                      <div>
                        {this.state.items.map((item, index) => (
                          <div>
                            <td>{item.email}</td>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div>
                        {_.sortBy(items, ["email"]).map((item, index) => (
                          <div>
                            <td>{item.email}</td>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      );
    }
  }
}

export default App;
