// import { useState } from "react";

const Checkout = (props) => {
//   const clear = () => {
//     // console.log(clear)
//     setCheckout("");
// }

    return (
      <div>
        <main>
          <h2>Checkout</h2>
          <div className="checkout">
            {props.breakfastProps.map((item) => {
              return (
              <p>
                {item}
              <button className="btn" onClick={() => { props.clearProps() }}>Clear</button>
              </p>
              )
            })}
            {props.lunchProps.map((item) => {
              return (
                <p>{item}</p>
              )
            })}
            {props.drinksProps.map((item) => {
              return (
                <p>{item}</p>
              )
            })}
          </div>
        </main>
      </div>
    )
  }
  
  
  export default Checkout