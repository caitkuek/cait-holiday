import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [ holiday, setHoliday ] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/holidays/${id}`)
      .then((response) => response.json())
      .then((data) => setHoliday(data));
  }, []);

  if (holiday.status === "fail") {
    return "no holiday here"
  }

  return (
    <div>
      <h1>Holiday Info</h1>
      <h2>{holiday.name}</h2>
      <dl>
        <dt>Celebrated</dt>
        <dd>{holiday.celebrated ? "Yes" : "No"}</dd>
        <dt>Likes</dt>
        <dd>{holiday.likes}</dd>
        <dt>Description</dt>
        <dd>{holiday.description}</dd>
      </dl>
    </div>
  );
}

export default Detail;
