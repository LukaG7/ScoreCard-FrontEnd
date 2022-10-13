import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Navigate } from "react-router-dom";

function Profile( { children } ) {
  
  const { isLoggedIn, isLoading } = useContext(AuthContext);

  if (isLoading) return <p>Loading ...</p>;

  if (!isLoggedIn) {

    return <Navigate to="/login" />;
  } else {

    return (
        <div className="profile">
            <h1>"Users" Profile</h1>

            <p>previous rounds below</p>
            {/* users previous scores */}
        </div>
    )
  }
}

export default Profile;
