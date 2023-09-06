import './sass/main.scss'
// import DataManager from './data-manager';
import Main from './components/Main';

import {data} from './data/data'


function App() {

  return (
    <>
      <Main data={data}/>
    </>
  )
}

export default App
