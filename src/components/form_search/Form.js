import { useState } from "react";
import Card from "../card/Card";
import "../form_search/Form.css";
function Form({ name, url, description }) {
  const [user, setUser] = useState("");
  const [search, setSearch] = useState("");

  const searchProfile = async () => {
    try {
      const req = await fetch(`https://api.github.com/users/${search}`);
      let json = await req.json();
      setUser(json);
      console.log(json)
      if (json.message) console.log(json.message);
      setSearch("");
      console.log("user", user);
    } catch (err) {
      console.log("sasa", err.message);
    }
  };

  return (
    <>
      <div className="form">
        <div className="search_form">
          <div className="button">
            <button onClick={searchProfile}>Search Profile </button>
          </div>
          <div className="input">
            <input
            placeholder="profile name"
              autoFocus
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
            />
          </div>
        </div>
        <div className="cardForm">
          <Card
            url={user.avatar_url}
            description={user.name}
            name={user.name}
            html_url={user.html_url}
            last_update={user.updated_at}
            public_repos={user.public_repos}
          />
        </div>
      </div>
    </>
  );
}

export default Form;
