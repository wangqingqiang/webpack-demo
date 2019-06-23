import './assets/style/index.css';
import './assets/style/main.less';
import image from './assets/images/main.jpg';

console.log(image);
console.log('hello,webpack');
document.body.style.background = `url(${image})`;