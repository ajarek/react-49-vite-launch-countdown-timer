import FlipCountClock from "./components/FlipCountClock/FlipCountClock"

function App() {
 

  return (
    <div className="App">
      <div className="header">
        <h2>WE`RE LAUNCHING SOON</h2>
      </div>
      <FlipCountClock/>
      <div className="footer">
        <div className="icons"><img src="/images/icon-facebook.svg" alt="icon" /></div>
        <div className="icons"><img src="/images/icon-instagram.svg" alt="icon" /></div>
        <div className="icons"><img src="/images/icon-pinterest.svg" alt="icon" /></div>
      </div>
    </div>
    
  )
}

export default App
