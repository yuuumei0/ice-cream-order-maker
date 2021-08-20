import React, {Component} from 'react'
import './App.css';
import MenuItem from './components/MenuItem'
import Order from './components/Order'
import "./index.css"

class App extends Component{
  constructor(props){
    super(props)
    this.state= {
      order:{}
    }
    // this.addToOrder=this.addToOrder.bind(this)
  }

  addToOrder=(menuItem)=>{
    // let newOrder={...this.state.order, menuItem}
    // this.setState({order:newOrder})
    console.log(menuItem)
  }

  render(){
  return (
    <div className="App" style={{backgroundImage:`url(${"https://www.hpcismart.com/images/website/ManChemTechnical/DIR_20/F_70920.jpg"})`}}>
      <h1 style={{color:"pink"}}>Welcome to Icecream Order Maker</h1>
      <MenuItem label="Select your flavor" options={["Strawberry", "Matcha", "Vanilla"]} selection="icecream" clickHandler={this.addToOrder} cssID="icecream"/>
      <MenuItem label="How many scoops do you want to order? Select a number" options={["1", "2", "3", "4"]} selection="scoops"/>
      <MenuItem label="Choose your toppings" options={["sprinkles", "red bean", "oreo cookies"]} selection= "toppings"/>
      <Order/>
    </div>
  );
  }

}

export default App;
