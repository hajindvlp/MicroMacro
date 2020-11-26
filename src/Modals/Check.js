import React, { useState, useContext } from 'react';
import { firebaseContext } from '../firebase';

import { Row } from '../components';

const Check = (props) => {
  const [ name, setName ] = useState('');
  const [ id, setId ] = useState('');
  const [ selfMsg, setSelfMsg ] = useState('');
  const [ beneduMsg, setBeneduMsg ] = useState('');
  const [ errMsg, setErrMsg ] = useState('');
  const firebase = useContext(firebaseContext);

  const handleSelf = () => {  
    firebase.firestore.collection('selfcheck').where("name", "==", name)
      .get()
      .then(querySnapshot => {
        if(!querySnapshot.empty) {
          let msg = '';
          querySnapshot.forEach(doc => {
            msg += `${name} : 최근 ${doc.data().date}에 했습니다.`;
          });
          setSelfMsg(msg);
          setErrMsg('');
        } else {
          setSelfMsg('');
          setErrMsg(`사용자 '${name}' 이(가) 없습니다.`)
        }
        
      })
      .catch(err => {
        setErrMsg(err);
      })
  }

  const handleBenedu = () => {
    firebase.firestore.collection('benedu').where('id', '==', id)
      .get()
      .then(querySnapshot => {
        if(!querySnapshot.empty) {
          let msg = '';
          querySnapshot.forEach(doc => {
            msg += `${id} : 최근 ${doc.data().date}에 했습니다.\n`;
          });
          setBeneduMsg(msg);
          setErrMsg('');
        } else {
          setBeneduMsg('');
          setErrMsg(`사용자 '${id}' 이(가) 없습니다.`);
        }
      })
      .catch(err => {
        setErrMsg(err);
      })
  }

  return (
    <div>
      <h1> 현황 체크하기 </h1>
      <Row>
        <div className="inputs">
          <h2>자가진단 확인하기</h2>
          <div className="feild">
            <label>성명</label>
            <input onChange={evt => setName(evt.target.value)} value={name} />
          </div>
          <button onClick={handleSelf}>확인하기</button>
          <div className="output">{selfMsg}</div>
        </div>
        <div className="inputs">  
          <h2>베네듀 확인하기</h2>
          <div className="feild">
            <label>이메일</label>
            <input onChange={evt => setId(evt.target.value)} value={id} />
          </div>
          <button onClick={handleBenedu}>확인하기</button>
          <div className="output">{beneduMsg}</div>
        </div>
      </Row>
      <div className="error">{errMsg}</div>
    </div>
  )
}

export default Check;