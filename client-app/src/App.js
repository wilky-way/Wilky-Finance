import React, { Component } from "react";
import { Header, List } from "semantic-ui-react";
import "./App.css";
import axios from "axios";

class App extends Component {
    state = {
        values: []
    };

    componentDidMount() {
        axios.get("http://localhost:5000/api/values").then(response => {
            console.log(response);
            this.setState({
                values: response.data
            });
        });
    }
    render() {
        return (
            <div>
                <Header as="h2" icon="globe" content="Wilky Finance" />
                <List>
                    {this.state.values.map(value => (
                        <List.Item key={value.id}>{value.name}</List.Item>
                    ))}
                </List>
                <ul></ul>
            </div>
        );
    }
}

export default App;
