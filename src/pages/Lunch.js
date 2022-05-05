const Lunch = (props) => {
  let letsEat = props.noon


    const click = (event) => {
      console.log(event.target.name)
      props.setLunchProps(props.LunchProps.concat(event.target.name))
  }

  return (
    <div>
      <main>
        <h2>Lunch Menu</h2>
        {letsEat.map((item) => {
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


export default Lunch