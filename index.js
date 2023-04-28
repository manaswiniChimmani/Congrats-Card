const element = (
  // Write your code here.
  <div className="bg-container">
    <div>
      <h1 className="h1">Congratulations</h1>
    </div>
    <div className="card1">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="img"
      />
      <h1 className="h2">Kiran V</h1>
      <p className="p1">
        Vishnu Institute of Computer Education and Technology, Bhimavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="img"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
