import React from "react";

function Product() {
  return (
    <div className="@container border rounded-xl shadow-md bg-white max-w-[700px] mt-[60px] p-3"> 
      <div className="flex flex-col gap-4">
        <img
          src="https://hammeronline.in/cdn/shop/files/Bash_2.0_Bluetooth_Headphones.webp?v=1726899059"
          alt="product"
          className="w-full h-[280px] rounded-lg @min-[500px]:h-[400px] @min-[600px]:h-[250px]"
        />
        <div className="flex flex-col"> 
            <h2 className="text-lg font-bold @min-[700px]:text-gray-600 @min-[700px]:bg-blue-400">Premium Wireless Headphones</h2>
            <p className="text-gray-500 text-sm mt-2">Noise Cancellation, premium sound and 30hrs battery life</p  >
            <div>
                <span className="flex justify-between items-center border gap-2">$199</span>
                <button>Buy NOW</button>
            </div>
            
        </div>
      </div>
    </div>
  );
}

export default Product;
