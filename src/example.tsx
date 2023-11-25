import { h, render } from 'preact';

import s from './example.module.css';

function App() {
  return (
    <div className={s.root}>test tsx</div>
  );
}

const rootEl = document.getElementById('root');
if (rootEl == null) {
  throw new Error(`Unable to find root element`);
}
render(<App />, rootEl);
