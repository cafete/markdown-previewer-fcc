import React, { Component } from "react";
import "./App.css";
import FormGroup from "react-bootstrap/lib/FormGroup";
import ControlLabel from "react-bootstrap/lib/ControlLabel";
import FormControl from "react-bootstrap/lib/FormControl";

const marked = require("marked");

class App extends Component {
  state = {
    markdown:
      "# This is my Markdown Previewer!\n## by [cafete](https://www.freecodecamp.org/cafete)\nYou can add code like `this` or like this:\n```\ngit add .\n```\nThis is a list:\n* item 1\n* item 2\n* item 3\n> This is a quote\n\n**BOLD!**"
  };

  updateMarkdown = markdown => {
    this.setState({ markdown });
  };

  render() {
    let markdown = this.state.markdown;

    return (
      <div className="App container">
        <div>
          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Markdown Input</ControlLabel>
            <FormControl
              id="editor"
              componentClass="textarea"
              placeholder="Enter Markdown"
              value={markdown}
              onChange={event => this.updateMarkdown(event.target.value)}
            />
          </FormGroup>
        </div>
        <div>
          <h1>Markdown Output</h1>
          <div
            id="preview"
            dangerouslySetInnerHTML={{ __html: marked(markdown) }}
          />
        </div>
      </div>
    );
  }
}

export default App;
