import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// 把项目中的组件渲染到index.html中
// ReactDOM.render(<App />, document.getElementById('root'));

// 根组件渲染到index.html中

// reactdom 就是把一个react组件从一个真正的dom节点中渲染到另一个真正的dom节点中

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// setTimeout(() => {
//   root.unmount();
// },2000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
