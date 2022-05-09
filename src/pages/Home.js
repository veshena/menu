const Home = (props) => {
  let me = props.aboutMe

  return (
    <div>
      <main>
        <div className="home"></div>

        <p>
          {me}
        </p>
      </main>
    </div>
  )
}


export default Home