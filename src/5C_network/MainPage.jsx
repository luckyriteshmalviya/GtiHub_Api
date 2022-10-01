import { useState } from "react";
import "./MainPage.css";
import SingleRepo from "./SingleRepo/SingleRepo";

function MainPage() {
  const [inputText, setInputText] = useState("");
  const [data, setData] = useState([]);
  const [repos, setRepos] = useState([]);

  function handleSearch() {
    fetch(`https://api.github.com/users/${inputText}`)
      .then((res) => res.json())
      .then((item) => setData(item));
  }

  function handleAllRepos() {
    fetch(`https://api.github.com/users/${inputText}/repos`)
      .then((res) => res.json())
      .then((item) => setRepos(item));
  }
  {
    console.log(repos);
  }
  return (
    <>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div style={{ margin: "0px 384px" }}>
        <br />
        <div className="user-detail">
          <span>
            <img width="70px" src={data.avatar_url} alt="user-image" />
          </span>
          <div>
            <b>
              <p>{data.name}</p>
            </b>
            <span>{data.bio}</span>
          </div>
        </div>
        <div>
          <button onClick={handleAllRepos}>See repos</button>
        </div>
      </div>
      <div className="parent-repo">
        <SingleRepo repos={repos} data={data} />
      </div>
    </>
  );
}
export default MainPage;
