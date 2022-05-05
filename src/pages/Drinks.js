const Drinks = (props) => {
  let drinkUp = props.drink



    const click = (event) => {
        console.log(event.target.name)
        props.setDrinksProps(props.DrinksProps.concat(event.target.name))
    }

  return (
    <div>
      <main>
        <h2>Drinks Menu</h2>
        {drinkUp.map((item) => {
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


export default Drinks