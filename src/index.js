/* @jsx createElement */
import { createElement, render, Component} from './react.js';

class YourTitle extends Component {
  render() {
    return (
      <p>나는 타이틀이 되고싶어!</p>
    );
  }
}

function Title() {
  return (
    <div>
      <h2>정말 동작할까?</h2>
      <YourTitle />
      <p>잘 동작하는지 보고 싶다.</p>
    </div>
  );
}

render(<Title />, document.querySelector('#root'));
