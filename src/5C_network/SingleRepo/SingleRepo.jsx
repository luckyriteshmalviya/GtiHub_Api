import { Link } from "react-router-dom";
import "./SingleRepo.css";

function SingleRepo({ repos, data }) {
  return repos.map((rep, index) => {
    return (
      <Link
        to={`/repo/${rep.owner.login}/${rep.name}`}
        className="single-repo"
        key={index}
      >
        <span>
          <img width="70px" src={data.avatar_url} alt="users-repo-image" />
        </span>
        <span style={{ overflowY: "hidden" }}>
          <h5 style={{ color: "#5b5bd9", textAlign: "left" }}> {rep.name} </h5>
          <p className="repo-description">{rep.description}</p>
        </span>
      </Link>
    );
  });
}

export default SingleRepo;
