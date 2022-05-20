import './style.css';

import { Observable, Subscriber } from 'rxjs';

const counter = new Observable<number>((Subscriber) => {
  let count = 1;
  const IntervalId = setInterval(() => {
    console.log('Number : ', count);
    Subscriber.next(count++);
  }, 1000);
  return () => {
    clearInterval(IntervalId);
  };
});

const stop = counter.subscribe((value) => console.log(value));

setTimeout(() => {
  console.log('Finished');
  stop.unsubscribe();
}, 5000);
