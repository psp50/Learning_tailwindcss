import React from "react";

function ProfileCard() {
  return (
    <div className="mx-auto text-center">
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/032/176/191/small_2x/business-avatar-profile-black-icon-man-of-user-symbol-in-trendy-flat-style-isolated-on-male-profile-people-diverse-face-for-social-network-or-web-vector.jpg"
        className="w-24 h-24 mx-auto rounded-full border-4 border-blue-500"
      />
      <h2 className="mt-4 font-bold text-2xl text-gray-700">Premsagar</h2>
      <p className="text-gray-600">Software Developer</p>
      <p className="mt-2 text-gray-600">Aspiring Software developer at Microsoft</p>

      <div className="flex justify-center gap-4 mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-pink-500">Follow</button>
        <button className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-blue-500">Message</button>
      </div>
    </div>
    
  );
}

export default ProfileCard; 
