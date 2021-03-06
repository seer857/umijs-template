import styles from './index.less';
import Home from './views/home';
import { Button } from 'antd';
import axios from 'axios';
export default function IndexPage() {
  function checkAll() {
    axios.get('/api/users').then((res) => {
      console.log(res);
    });
  }
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <div className={styles.one}>
        <Home />
      </div>
      <Button onClick={checkAll}>111</Button>
    </div>
  );
}
