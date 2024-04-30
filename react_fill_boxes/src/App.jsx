import { useState } from 'react'
import Box from './Box';
import './App.css'

function App() {
  const [order, setOrder] = useState([]);
  const config = [[1,1,0],[0, 1, 1],[1,0,1]];
  const container = config.flat();

  const onClickHandler = (e, index) => {
    if(!order.includes(index)){
      const newOrder = [...order, index];
      setOrder(newOrder);
      if(newOrder.length==container.filter(Boolean).length){
        deactivate();
      }
    }
  }

  const deactivate = () => {
     const timer = setInterval(()=>{
      setOrder((arr)=>{
        const newArr = [...arr];
        newArr.pop();
        if(newArr.length==0){
          clearInterval(timer);
        }
        return newArr;
      });
     }, 300);

  }

 

  return (
    <div className='container'>
    {container.map((value, index)=><Box key={index} onClickHandler={onClickHandler} displayBox={value} index={index} order={order} />)}
    </div>
  )
}

export default App
