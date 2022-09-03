import img from './img/For_website_🐶_200712_3.jpg';

import './css/index.css';
import './scss/index.scss';
import './css/index2.css';

// 創建圖片插入body
const oImg = document.createElement('img');

oImg.src = img;
document.body.appendChild(oImg);

const newArray = [new Promise(() => {}), new Promise(() => {}),
];

newArray.map((item) => item);
