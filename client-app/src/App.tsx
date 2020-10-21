import React, { Component } from "react";
import { Header, Icon, List } from "semantic-ui-react";
import axios from "axios";

class App extends Component {
  state = {
    values: [],
  };

  componentDidMount() {
    axios.get("http://localhost:5000/api/values").then((response) => {
      console.log(response);
      this.setState({
        values: response.data,
      });
    });
  }

  render() {
    return (
      <React.Fragment>
        <Header as="h2" icon>
          <Icon name="settings" />
          Hey Buddy
          <Header.Subheader>
            Meet your friends here.
          </Header.Subheader>
        </Header>
        <List>
          {this.state.values.map((val: any) => (
            <List.Item key={val.id}>{val.name}</List.Item>
          ))}
        </List>
      </React.Fragment>
    );
  }
}

export default App;
