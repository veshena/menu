const Checkout = (props) => {



  // const clear = (item) => {
  //   // console.log("clear")
  //   let itemIndex = props.breakfastProps.indexOf(item)
  //   // console.log(breakfastItems)
  //   props.breakfastProps.splice(itemIndex, 1)
  //   props.setBreakfastProps(props.breakfastProps)

  //   // let breakfastItems = [...props.breakfastProps]
  // }


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
                  {/* <button className="btn"
                    onClick={() => clear(item)}
                  >Clear</button> */}
                </p>

              )
            })}
          </div>

          <div>
            {props.lunchProps.map((item) => {

              return (

                <p>
                  {item}
                  {/* <button className="btn"
                      onClick={() => clear(item)}
                    >Clear</button> */}
                </p>

              )
            })}
          </div>

          <div>
            {props.drinksProps.map((item) => {

              return (

                <p>
                  {item}
                  {/* <button className="btn"
                      onClick={() => clear(item)}
                    >Clear</button> */}
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