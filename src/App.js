/* eslint-disable */ //터미널에 뜨는 warning을 없애줌

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // 바인딩이 쉬움. 중가로에 넣어서 쓴다.
  
  // 데이터는 1. 변수에 넣거나 2. state에 넣거나
  
  // state는 변수대신 쓰는 데이터 저장 공간, useState()를 이용해 만들어야함.
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '강남 고기 맛집']);
  let [날짜, 날짜변경] = useState(['2월 17일', '2월 18일', '2월 19일']);
  let [따봉, 따봉변경] = useState(0);
  
  function 함수(){
    return 100
  }
  function 제목바꾸기(){             
    var newArray =  [...글제목];          //복사본을 만들어서 바꿔야 한다.   ...이 중,대가로를 제거
    newArray[0] = '여자코트추천';         // state 변경
    newArray.sort();
    글제목변경(newArray);
  }

  return (
    <div className="App">
    <div className= "black-nav">      
      <div>개발 Blog</div>
    </div>
    <button onClick={ 제목바꾸기 }> 변경 </button>
    <div className="list"> 
      <h3> { 글제목[0] } <span onClick={ ()=>{따봉변경(따봉+1)} }>👍</span>{따봉} </h3> 
      <p> { 날짜[0] } </p>
      <hr/>
    </div>
    <div className="list">
      <h3> { 글제목[1] } </h3>
      <p> { 날짜[1] } </p>
      <hr/>
    </div>
    <div className="list">
      <h3> { 글제목[2] } </h3>
      <p> { 날짜[2] } </p>
      <hr/>
    </div>   
  </div>
  );
}

export default App;
