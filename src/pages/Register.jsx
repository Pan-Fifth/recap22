import React from "react";

function Register() {
  const inputStyle = "border p-0.5 px-2 border-gray-500 rounded-md";

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-4">
      <form className="bg-white p-6 rounded-md w-full max-w-md flex flex-col">
        <h2 className="text-center">Create Account</h2>
        <label htmlFor="">username:</label>
        <input type="text" className={inputStyle}></input>
        <label htmlFor="">password:</label>
        <input type="password" className={inputStyle}></input>
        <label htmlFor="">email:</label>
        <input type="email" className={inputStyle}></input>
        <label htmlFor="">phone:</label>
        <input type="text" className={inputStyle}></input>
        <button className="bg-amber-300 py-1 mt-3 rounded-2xl cursor-pointer hover:bg-rose-400 transition-all duration-150">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
