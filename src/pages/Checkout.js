import { useState } from "react";
const Checkout = (props) => {
 
  const [checkout, setCheckout] = useState("");
  const clear = () => {
    console.log(clear)
    setCheckout("");
}


  return (
    <div>
      <main>
        <h2>Checkout</h2>
        <div className="checkout">

            <div>
              {props.breakfastProps.map((item) => {

                return (
                  
                  <p>
                    {item}
                    <button className="btn"
                      onClick={clear}
                    >Clear</button>
                  </p>

                )
              })}
            </div>

            <div>
              {props.lunchProps.map((item) => {

                return (

                  <p>
                    {item}
                    <button className="btn"
                      // onClick={}
                    >Clear</button>
                  </p>

                )
              })}
            </div>

            <div>
              {props.drinksProps.map((item) => {

                return (

                  <p>
                    {item}
                    <button className="btn"
                      // onClick={}
                    >Clear</button>
                  </p>

                )
              })}
            </div>
        </div>
      </main>
    </div>
  )
}


export default Checkout