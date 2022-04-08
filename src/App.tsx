import React from "react";
import { Button } from "antd";
import Modal from '../components/Modal/index';
class App extends React.Component {

  openModal() {
    Modal.create({
      title: 'Hello World'
    });
  }

  render() {
    return (
      <>
        <Button onClick={() => this.openModal()}>open modal</Button>
      </>
    );
  }
}

export default App;
