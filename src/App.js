import logo from './logo.svg';
import './App.css';

function App() {
  // 바인딩이 쉬움. 중가로에 넣어서 쓴다.
  let posts = '강남 고기 맛집';
  let postst ={color: 'blue', fontsize: '30px'};
  function 함수(){
    return 100
  }

  return (
    <div className="App">
      <div className= "black-nav">
        <div className={ posts }></div>
        <div style={ postst }>개발 Blog</div>
      </div>
      <img src={ logo } />
      <h4>{ 함수() }</h4>
      <h4>{ posts }</h4>
    </div>
  );
}

export default App;
