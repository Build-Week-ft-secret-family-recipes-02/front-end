import React from "react";

const Dashboard = () => {
  return (
    <div>
      <h1>Your Recipes!</h1>
      <form>
        <div>
          <input type="search" />
          <button>Search</button>
        </div>
      </form>
      <div className="Recipe-Container"></div>
    </div>
  );
};

export default Dashboard;
