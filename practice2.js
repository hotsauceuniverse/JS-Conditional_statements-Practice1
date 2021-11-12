// 조건문 연습
let isShow = true;
let checked = false;

if(isShow){
  console.log('Show~!');
}

if(checked){
  console.log('Checked~!');
}

if(isShow) {
  console.log('Show~!')
} else {
  console.log('Checked~!')
} //위의 조건문과 같은 내용


let stoplight = '빨간불';

if (stoplight === '빨간불') {
  console.log('멈춤');
} else if (stoplight === '노란불') {
  console.log('천천히');
} else if (stoplight === '초록불') {
  console.log('통과');
} else {
  console.log('고장');
}

1 == '1' // true
console.log(1=='1'); // true
1 === '1' // false
console.log(1==='1'); // false

// = 대입연산자
// == 동등연산자
// === 삼중 등호 연산자 (데이터까지 비교)

let score = prompt('0 ~ 10 사이 숫자를 입력하세요');

if(score <= 4){
  alert('정답보다 값이 작습니다');
} else if (score >= 6){
  alert('정답보다 값이 큽니다');
} else{
  alert('정답입니다')
} 

