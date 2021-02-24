import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  var names = ['Salman', 'Shakib', 'Arafin', "Bappa", "Manna", "Asif"]

  const products = [
    { name: 'Photoshop', Price: '$90.99' },
    { name: 'Illastrator', Price: '$60.99' },
    { name: 'PDF Reader', Price: '$6.99' },
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            names.map(name => <li>{name}</li>)
          }
          {
               products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(product => <Product product={product}></Product>)
        }

        
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0)
  const  handleIncrease =()=>setCount(count +1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=>setCount(count -1)} >Decrease</button>
      <button onClick={()=>setCount(count +1)} >Increase</button>
    </div>
  )
}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return (
    <div>
      <h1>Dynamic Users: {users.length}</h1>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}


function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    // float: 'left'
  }
  return (
    <div style={productStyle}>
      <h2>{props.product.name}</h2>
      <h5>{props.product.price}</h5>
      <button>Buy Now</button>
    </div>
  )
}


function Person(props) {
  var PersonStyle = {
    width: '40%',
    border: '2px solid red',
    margin: '10px',
    padding: '10px'
  }
  return (<div style={PersonStyle}>
    <h1>Name : {props.name}</h1>
    <h5>profession : Heros of BD</h5>
  </div>)

}


export default App;
