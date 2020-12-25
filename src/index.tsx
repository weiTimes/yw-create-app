import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

import ICON_BANNER from '@/images/speed_fast.jpg';

import './index.css';
// import { IDepartSale, IRes, ISalesTotal } from './data.d';

const App = () => {
  const [currentTime, setCurrentTime] = useState(moment());

  console.log(currentTime, 'currentTime');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='container'>
      <div className='desc text-main'>
        欢迎使用<code>yw-create-app</code>，现在你可以愉快地使用它进行开发了。
      </div>
      <div className='text-time'>
        时间：
        {moment().format('YYYY-MM-DD HH:mm:ss')}
      </div>
      <img className='banner' src={ICON_BANNER} alt='logo' />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
