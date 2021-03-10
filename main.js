'use strict';
/* エラーチェック*/

{
  const timer = document.getElemntById('timer');
  const start = document.getElemntById('start');
  const stop = document.getElemntById('stop');
  const reset = document.getElemntById('reset');

  let startTime;

  function countUp() {
    console.log(Date.now() - startTime);
    const d = new Date(Date.now() - startTime);
    const m = d.getMinutes();
    const s = d.getSeconds();
    const ms = d.getMilliseconds(); 
    setTimeout(() => {
      countUp();
    }, 10);
  }

  start.addEventListener('click', () => {
    startTime = Date.now();
    countUp();
  });
}