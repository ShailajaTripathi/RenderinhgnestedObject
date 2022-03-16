import React, { useState, useEffect } from "react";
import "./data.css";

function Data() {
  const [Users, setUsers] = useState([]);

  async function getData() {
    const res = await fetch(
      "https://itunes.apple.com/in/rss/topalbums/limit=25/json"
    );
    let resData = await res.json();
setUsers(resData.feed.entry);

  }
  console.log(Users);

  useEffect(() => {
    getData();
  }, []);

  // console.log(Users.entry);

  return (
    <div>
      {/* <div className="data_card">
        <div className="data_title"> */}
          <h2><i>Movie Details</i></h2>
        {/* </div> */}

        <div className="row">
          {Users.map((item, i) => (
         
            <div className="column">
            <div className="card">
             
              <img src={item["im:image"][2].label} />
              <p key={i}><b>Artist:</b>{item["im:artist"].label}</p>
              <p key={i}><b>Album Name:</b>{item["im:name"].label} </p>
              <p key ={i}><b>Release Date: </b>{item["im:releaseDate"]["attributes"].label}</p>
            </div>
            </div>
          
          ))}
        </div>
      </div>
    // </div>
  );
}

export default Data;
