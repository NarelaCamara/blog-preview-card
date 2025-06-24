import "./App.css";
import viteLogo from "./assets/illustration-article.svg";
import user from "./assets/user.avif";

function App() {
  return (
    <div className="container">
      <div className="container__card">
        <img src={viteLogo} className="card__image" alt="" />
        <div className="card__section">
          <button className="section__button">Learning</button>
          <p className="section__fecha ">Published 21 Dec 2023</p>
          <h2 className="section__title">HTML & CSS foundations</h2>
          <p className="section__text">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
        </div>
        <div className="card__footer">
          <img src={user} className="footer__avatar" alt="" />
          <p className="footer__name">Greg Hooper</p>
        </div>
      </div>
    </div>
  );
}

export default App;
