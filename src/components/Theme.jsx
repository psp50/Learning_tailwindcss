import React from 'react'

import { useState } from "react";

function Theme() {
  const [theme, setTheme] = useState("premium");

  return (
    <div className={`${theme} flex items-center justify-center h-screen premium:bg-pink-500`}>
      <div className="flex flex-col items-center gap-4 p-6 border rounded  premium:bg-green-800
            darkmode:bg-amber-800
            ocean:bg-blue-800">

        <h1
          className="
            premium:text-amber-500
            darkmode:text-black
            ocean:text-cyan-500
            text-2xl font-bold
          "
        >
          Testing Custom Variants
        </h1>

        <div className="flex gap-2">
          <button onClick={() => setTheme("premium")}>
            Premium
          </button>

          <button onClick={() => setTheme("darkmode")}>
            Dark
          </button>

          <button onClick={() => setTheme("ocean")}>
            Ocean
          </button>
        </div>
      </div>
    </div>
  );
}

export default Theme;