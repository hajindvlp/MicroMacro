import React, { useState, useContext } from 'react';
import { firebaseContext } from '../firebase';

const Benedu = (props) => {
  const [ id, setId ] = useState('');
  const [ pw, setPw ] = useState('');
  const [ openInput, setOpenInput ] = useState(true);
  const [ message, setMessage ] = useState('');
  const firebase = useContext(firebaseContext);

  const hanldeSubmit = () => {
    firebase.firestore.collection('benedu').doc()
      .set({ id, pw })
      .then(res => {
        setMessage(`${id}을(를) 성공적으로 추가 했습니다!`);
        setOpenInput(false);
      });
  }

  return (
    <div>
      <h1> 일일학습 신청하기 </h1>
      <p> 일일학습을 신청하면 매일 밤 12시에 자동으로 일일학습 완료됩니다. </p>
      <p> 베네듀 포인트도 받을 수 있게 최소시간 풀이를 맞추고, 선생님의 의심을 피하기 위해 시간은 조금 길게 잡힙니다. </p>
      { openInput && (
        <div className="inputs" hidden={!openInput}>
        <div className="feild">
          <label>이메일</label>
          <input onChange={evt => setId(evt.target.value)}></input>
        </div>
        <div className="feild">
          <label>비밀번호</label>
          <input onChange={evt => setPw(evt.target.value)} type="password"></input>
        </div>
        <button onClick={hanldeSubmit}>제출</button>
        </div>
      ) }
      <div className="output">{message}</div>
    </div>
  )
}

export default Benedu;