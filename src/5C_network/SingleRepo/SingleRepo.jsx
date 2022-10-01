import { useState } from "react";
import "./SingleRepo.css";

function SingleRepo({ repos, data }) {
  const [repostate, setRepoState] = useState({
    name: "",
    avatar_url: "",
    description: "",
  });
  console.log(repostate);
  function handleRepoDetail(rep) {
    setRepoState({
      ...repostate,
      name: rep.name,
      avatar_url: rep.owner.avatar_url,
      description: rep.description,
    });
  }

  return repos.map((rep, index) => {
    return (
      <div
        onClick={() => handleRepoDetail(rep)}
        className="single-repo"
        key={index}
      >
        <span>
          <img width="50px" src={data.avatar_url} alt="users-repo-image" />
        </span>
        <span>
          <b> {rep.name} </b> <br />
          <p className="repo-description">{rep.description}</p>
        </span>
      </div>
    );
  });
}

export default SingleRepo;
