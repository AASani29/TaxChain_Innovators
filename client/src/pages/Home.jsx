import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../components/Header";

export default function Home() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="bg-cream min-h-screen px-4" style={{ backgroundColor: "#f8f1d1" }}>
      <Header />

      {/* Main Content */}
      <div className="container mx-auto py-8">
        {/* User Info Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
      <h1 className="text-2xl font-bold text-center text-green-900 mb-4">User Dashboard</h1>
      <p className="text-lg text-center text-gray-800">Welcome to Shacchakor, {currentUser?.username || "User"}</p>
    </div>

        {/* Features Section */}
        <div className="grid grid-cols-3 gap-6">
          <Link
            to="/explore-projects"
            className="bg-teal-900 text-white p-6 rounded-lg shadow-md text-center hover:bg-gray-800"
          >
            Explore Projects
          </Link>
          <Link
            to="/pay-tax"
            className="bg-teal-900 text-white p-6 rounded-lg shadow-md text-center hover:bg-gray-800"
          >
            Pay Tax
          </Link>
          <Link
            to="/view-contributions"
            className="bg-teal-900 text-white p-6 rounded-lg shadow-md text-center hover:bg-gray-800"
          >
            View My Contributions
          </Link>
          <Link
            to="/community-stories"
            className="bg-teal-900 text-white p-6 rounded-lg shadow-md text-center hover:bg-gray-800"
          >
            Community Stories
          </Link>
          <Link
            to="/rewards"
            className="bg-teal-900 text-white p-6 rounded-lg shadow-md text-center hover:bg-gray-800"
          >
            Rewards Earned
          </Link>
          <Link
            to="/new-project-proposals"
            className="bg-teal-900 text-white p-6 rounded-lg shadow-md text-center hover:bg-gray-800"
          >
            New Project Proposals
          </Link>
        </div>

        {/* Impact Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
          <h3 className="text-lg font-semibold text-center">Your Impact So Far</h3>
          <div className="mt-4 text-center">
            <div className="text-3xl font-bold">5250 TK</div>
            <div className="bg-gray-300 rounded-full h-4 mt-4">
              <div
                className="bg-teal-900 rounded-full h-4"
                style={{ width: "70%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
