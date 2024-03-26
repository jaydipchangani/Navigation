import React from "react";
import { ReactDOM } from "react";

function Header(){
    return(
        <index className="m-0 p-0 h-screen">
            <header className="bg-[#333] text-white p-5">
                <h1 className="m-0 text-3xl">Path Finder</h1>
            </header>
    <main>
    
    
    <section id="login" className="text-center bg-greay ">
      <h2 className="text-3xl pt-5 ">Admin Login</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required="" className="m-5" /><br></br>
        <label htmlFor="passsword">Password:</label>
        <input type="password" id="password" name="password" required="" className="m-5"/><br></br>
        <button type="submit" className="bg-[#333] hover:bg-[#757575] text-white font-bold py-2 px-4 border border-[#333] rounded">Login</button>
      </form>
    </section>
  </main>

  <footer className=" bg-[#333] text-white text-center pb-0"  >
  <h1>hui</h1>
    <p className=" ">© 2023 Path Finder. All rights reserved.</p>
</footer>
        </index>
    );
}

export default Header;