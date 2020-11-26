import React, { useState, useContext } from 'react';
import { firebaseContext } from '../firebase';

const SelfCheck = (props) => {
  const [ name, setName ] = useState('');
  const [ birth, setBirth ] = useState('');
  const [ pw, setPw ] = useState('');
  const [ openInput, setOpenInput ] = useState(true);
  const [ message, setMessage ] = useState('');
  const firebase = useContext(firebaseContext);

  const handleSubmit = () => {
    firebase.firestore.collection('selfcheck').doc()
      .set({ name, birth, pw })
      .then(res => {
        setMessage(`${name}을(를) 성공적으로 추가 했습니다!`);
        setOpenInput(false);
      })
  }

  return (
    <div>
      <h1> 자가진단 신청하기 </h1>
      <p> 자가진단 신청하면 매일 밤 12시에 자동으로 자가진단이 완료됩니다. </p>
      { openInput && (
        <div className="inputs">
          <div className="feild">
            <label>성명</label>
            <input onChange={evt => setName(evt.target.value)} value={name} />
          </div>
          <div className="feild">
            <label>생년월일</label>
            <input onChange={evt => setBirth(evt.target.value)} value={birth} placeholder="YYMMDD" />
          </div>
          <div className="feild">
            <label>비밀번호</label>
            <input onChange={evt => setPw(evt.target.value)} value={pw} type="password"></input>
          </div>
          <button onClick={handleSubmit}>제출</button>
        </div>
      ) }
      <div className="output">{message}</div>
    </div>
  )
}

export default SelfCheck;