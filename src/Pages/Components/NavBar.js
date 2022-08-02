import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../ContextAPI/useAuth";
function NavBar() {
  const { user, loading } = useAuthContext();
  return (
    <div className="bg-white p-2 ">
      <div className="bg-white-500   ">
        <nav className="w-full ">
          <ul className=" flex justify-between items-center ">
            <Link to="/" className="text-2xl font-bold mx-10 p-2">
              Test Page
            </Link>
            {/* <h1 className="font-bold text-black text-xl ml-2">SurveyMe </h1> */}
            <div className="flex gap-5 mr-5  items-center">
              <h1>
                Hello,<span className="font-bold">{user?.name}</span>{" "}
              </h1>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
