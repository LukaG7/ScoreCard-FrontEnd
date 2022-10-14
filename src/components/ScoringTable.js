import { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../context/auth.context";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ScoringTable() {
  const [table, setTable] = useState([]);
  const [courseName, setCourseName] = useState('')

  const { paramsId } = useParams();
  console.log("my params id is  ", paramsId);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/scoringtable/${paramsId}`)
      .then((res) => {
        console.log(res.data);
        setTable(res.data.table.holes);
        setCourseName(res.data.table.courseName)
        console.log(table);
      })
      .catch((err) => console.log(err));
  }, [paramsId]);

  console.log(table);

  const { isLoggedIn, isLoading } = useContext(AuthContext);

  if (isLoading) return <p>Loading ...</p>;

  if (!isLoggedIn) {
    return <Navigate to="/signup" />;
  } else {
    return (
      <div className="scoringtable-div">
        <h1>My Round at {courseName}</h1>
        <table className="table">
          <tbody>
            <tr>
              <td>Hole 1</td>
              <td>Hole 2</td>
              <td>Hole 3</td>
              <td>Hole 4</td>
              <td>Hole 5</td>
              <td>Hole 6</td>
              <td>Hole 7</td>
              <td>Hole 8</td>
              <td>Hole 9</td>
            </tr>
            <tr>
              {table.map((h, i) => {
                return (
                  i < 9 && (
                    <>
                      <td>{h.par}</td>
                    </>
                  )
                );
              })}
            </tr>
            <tr>
              {table.map((h, i) => {
                return (
                  i < 9 && (
                    <>
                      <td>{h.yardage}</td>
                    </>
                  )
                );
              })}
            </tr>
            <tr>
              <td>score</td>
              <td>score</td>
              <td>score</td>
              <td>score</td>
              <td>score</td>
              <td>score</td>
              <td>score</td>
              <td>score</td>
              <td>score</td>
            </tr>

            <tr>
              <td>Hole 10</td>
              <td>Hole 11</td>
              <td>Hole 12</td>
              <td>Hole 13</td>
              <td>Hole 14</td>
              <td>Hole 15</td>
              <td>Hole 16</td>
              <td>Hole 17</td>
              <td>Hole 18</td>
            </tr>
            <tr>
              {table.map((h, i) => {
                return (
                  i >= 9 && (
                    <>
                      <td>{h.par}</td>
                    </>
                  )
                );
              })}
            </tr>
            <tr>
              {table.map((h, i) => {
                return (
                  i >= 9 && (
                    <>
                      <td>{h.yardage}</td>
                    </>
                  )
                );
              })}
            </tr>

            <tr>
              <td>score</td>
              <td>score</td>
              <td>score</td>
              <td>score</td>
              <td>score</td>
              <td>score</td>
              <td>score</td>
              <td>score</td>
              <td>score</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ScoringTable;
