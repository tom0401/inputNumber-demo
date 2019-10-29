import React from 'react';
import logo from './logo.svg';
import InputNumber from './component/inputNumber'
import './App.css';

function App() {
  return (
    <div className="App">

    </div>
  );
}

export default class Index extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      val: '默认值'
    };

    this.clickHander = this.clickHander.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  clickHander(e) {
    this.setState({
      val: '点击值'
    });
  }

  onChange(newVal) {
    console.log('InputNumber组件值被修改为： ' + newVal);
  }

  render() {
    return (
      <div>
        <InputNumber
          ref='inp'
          defaultValue={this.state.val}
          onChange={this.onChange}
        />
        <button
          style={{
            marginLeft: '10px',
            color: '#333',
            padding: '5px 10px',
            borderRadius: '5px',
            background: '#ddd',
            border: 'none',
            cursor: 'pointer'
          }}
          onClick={this.clickHander}
        >外部控制Input组件</button>
      </div>
    );
  }
}
