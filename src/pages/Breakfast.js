const Breakfast = (props) => {
  let getUp = props.early

  

    const click = (event) => {
      console.log(event.target.name)
      props.setBreakfastProps(props.breakfastProps.concat(event.target.name))
  }

  return (
    <div>
      <main>
        <h2>Breakfast Menu</h2>
        {getUp.map((item) => {
          return (
            <h3>
              <div className="title">{item.title}</div>
              <div className="price">{item.price}</div>
              <button className="btn" name={item.title} onClick={click}>Add To Checkout</button>
            </h3>
          )
        })}
      </main>
    </div>
  )
}


export default Breakfast