import { useState } from "react";
import { useEffect } from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";

function Followers() {
  const { userName } = useParams();
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch(`https://api.github.com/users/${userName}/followers`)
      .then((item) => item.json())
      .then((elem) => setList(elem));
  }, []);

  return (
    <>
      <h3>Followers</h3>
      {list.map((item, index) => {
        return (
          <Link to={`/?q=${item.login}`} key={index}>
            <div
              style={{
                margin: "10px",
                backgroundColor: "lightgray",
              }}
            >
              <span>
                <img width="40px" src={item.avatar_url} alt="image" />
              </span>
              <span>
                {item.login}
                <br />
                {item.url}
              </span>
            </div>
          </Link>
        );
      })}
      <Link to={"/"}>
        <button>Go Back to Home</button>
      </Link>
    </>
  );
}

export default Followers;
