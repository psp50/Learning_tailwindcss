import React from "react";

const members = [
  {
    name: "John Doe",
    role: "Frontend Developer",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Sarah Wilson",
    role: "Backend Developer",
    img: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Michael Brown",
    role: "UI/UX Designer",
    img: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Emily Davis",
    role: "Project Manager",
    img: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

function Flexbox() {
  return (
    <div className="p-10 bg-gray-400 min-h-screen">
      <h1 className="text-3xl font-bold text-center">Meet our Team</h1>

      <div className="flex justify-around items-center m-10 gap-4">
        {members.map((member, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 w-60 text-center hover:shadow-lg transition duration-300">
            <img
              src={member.img}
              alt={member.name}
              className="w-20 h-20 rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold">{member.name}</h2>
            <p className="text-gray-500">{member.role}</p>
            <button>View Profile</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Flexbox;
