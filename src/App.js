import React, { useState } from 'react';
import Firebase, { firebaseContext } from './firebase';

import {
  Block, 
  Button, 
  Row, 
  Col, 
  Modal,
} from './components';
import SelfCheck from './Modals/SelfCheck';
import Benedu from './Modals/Benedu';
import Check from './Modals/Check';

import './App.css';

function App() {
  const [ modals, setModals ] = useState({
    benedu: false,
    selfCheck: false,
    check: false,
  });

  return (
    <firebaseContext.Provider value={new Firebase()}>
    <div className="App">
      <Col>
        <Block>
          <h1>디미고인에게 필요한 메크로들</h1>
        </Block>
        <Row>
          <Button onClick={() => setModals({benedu: !modals.benedu})}>
            <img alt='ButtonThumbnail' 
                src="https://benedu.co.kr/Content/dimigo/images/benedu.png"/>
            <p>베네듀</p>
          </Button>
          <Button onClick={() => setModals({selfCheck: !modals.selfCheck})}>
            <img alt='ButtonThumbnail' 
                src="https://www.moe.go.kr/images/template/01012/sub/moe1.png"/>
            <p>자가진단</p>
          </Button>
          <Button onClick={() => setModals({check: !modals.check})}>
            <img alt='ButtonThumbnail' 
                src="https://www.flaticon.com/svg/static/icons/svg/1828/1828743.svg"/>
            <p>현황체크</p>
          </Button>
          <Modal open={modals.benedu} toggle={() => setModals({benedu: !modals.benedu})} >
            <Benedu />
          </Modal>
          <Modal open={modals.selfCheck} toggle={() => setModals({benedu: !modals.selfCheck})} >
            <SelfCheck />
          </Modal>
          <Modal open={modals.check} toggle={() => setModals({check: !modals.check})} >
            <Check />
          </Modal>
        </Row>
      </Col>
    </div>
    </firebaseContext.Provider>
  );
}



export default App;
