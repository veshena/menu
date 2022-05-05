import Home from './pages/Home'
import Breakfast from './pages/Breakfast'
import Lunch from './pages/Lunch'
import Drinks from './pages/Drinks'
import Checkout from './pages/Checkout'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'



const about = "Cooking has always been a passion of mine for as long as I can remember. I use all kind of culinary skills I've learned to enhance my own skills in order to have my own unique touch. My ultimate satisfaction is to see everyone's expressions as they're enjoying my meals, yes being a chef can be tough at times because of the extremely extended and grueling work hours but I don't mind as long as I can enjoy what I do.......       LadyLisa"

const bfast = [
  {
    title: "Fry Bake or Sada Roti with Saltfish",
    price: "$15.00"
  },
  {
    title: "Fry Bake or Sada Roti with Herring",
    price: "$15.00"
  },
  {
    title: "Fry Bake or Sada Roti with Shark",
    price: "$20.00"
  },
  {
    title: "Fry Bake or Sada Roti with Plantains",
    price: "$10.00"
  },
  {
    title: "Fry Bake or Sada Roti with Corn Beef",
    price: "$10.00"
  },
  {
    title: "Fry Bake or Sada Roti with Pumpkin",
    price: "$10.00"
  }
]

const midDay = [
  {
    title: "Coo Coo with Callaloo & Stewed King Fish",
    price: "$45.00"
  },
  {
    title: "Oil Down (Breadfruit & Pigtail)",
    price: "$35.00"
  },
  {
    title: "Curry Crab and Dumpling",
    price: "$40.00"
  },
  {
    title: "Chicken Pelau",
    price: "$35.00"
  },
  {
    title: "Stew Pork with Fried Rice, Macaroni Pie with Potato Salad",
    price: "$45.00"
  },
  {
    title: "Chicken Soup",
    price: "$40.00"
  }
]


const thristy = [
  {
    title: "Orange Pineapple",
    price: "$3.00"
  },
  {
    title: "Water",
    price: "$2.00"
  },
  {
    title: "Mauby",
    price: "$5.00"
  },
  {
    title: "Coconut Water",
    price: "$3.00"
  },
  {
    title: "Peardrax",
    price: "$3.00"
  },
  {
    title: "Sorrel",
    price: "$3.00"
  }
]

function App() {

  const [breakfast, setBreakfast] = useState([])
  const [lunch, setLunch] = useState([])
  const [drinks, setDrinks] = useState([]);

  return (
    <div>
      <h1>LADY LISA'S KITCKEN</h1>

      <div className='bullets'>
        <Header />
      </div>

      <Routes>
        <Route path='/'
          element={<Home
            aboutMe={about} />}
        />

        <Route path='/breakfast'
          element={<Breakfast
            breakfastProps={breakfast}
            setBreakfastProps={setBreakfast}
            early={bfast} />}
        />

        <Route path='/lunch'
          element={<Lunch
            lunchProps={lunch}
            setLunchProps={setLunch}
            noon={midDay} />}
        />

        <Route path='/drinks'
          element={<Drinks
            drinksProps={drinks}
            setDrinksProps={setDrinks}
            drink={thristy} />}
        />

        <Route path='/checkout'
          element={<Checkout
            breakfastProps={breakfast}
            setBreakfastProps={setBreakfast}
            lunchProps={lunch}
            setLunchProps={setLunch}
            drinksProps={drinks}
            setDrinksProps={setDrinks}
          />}
        />
      </Routes>
    </div>
  )
}

export default App