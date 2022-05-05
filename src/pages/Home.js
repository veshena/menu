const Home = (props) => {
  let me = props.aboutMe

  return (
    <div>
      <main>
        <p>{me}</p>
        <div className="home"></div>
      </main>
    </div>
  )
}


export default Home