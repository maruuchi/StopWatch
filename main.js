'use strict';
/* エラーチェック*/

{
  const timer = document.getElemntById('timer');
  const start = document.getElemntById('start');
  const stop = document.getElemntById('stop');
  const reset = document.getElemntById('reset');

  let startTime;

  start.addEventListener('click', () => {
    startTime = Date.now();
    countUp();
  });
}