import { Heart, Menu, Phone, Search, User2 } from "lucide-react";
import { BrowserRouter } from "react-router-dom";

import Main from "./components/Main";

function App() {
  return (
    <div>
      <BrowserRouter>
        <header className="bg-white py-5 px-3 w-full top-0 flex flex-row items-center justify-between">
          <div className="flex items-center bg-slate-100 px-3 py-2 w-full max-w-xs lg:max-w-[50%] rounded-lg lg:mr-8">
            <Search />
            <input type="text" className="w-full bg-slate-100 px-2 outline-none" placeholder="Pesquise aqui" />
          </div>
          <nav className="mr-auto hidden md:flex">
            <a href="#" className="text-gray-500 font-medium hover:text-black hover:bg-gray-100 p-2 rounded-lg duration-300">
              Aluguel
            </a>
            <a href="#" className="text-gray-500 font-medium hover:text-black hover:bg-gray-100 p-2 rounded-lg duration-300">
              Compras
            </a>
            <a href="#" className="text-gray-500 font-medium hover:text-black hover:bg-gray-100 p-2 rounded-lg duration-300">
              Favoritos
            </a>
          </nav>
          <div className="flex gap-3 items-center">
            <button className="bg-rose-500 hover:bg-rose-600 duration-300 text-white flex items-center justify-center px-4 py-2 rounded font-medium">
              <span className="hidden md:flex">Sign In</span>
              <User2 />
            </button>
            <button id="btn-open" className="sm:hidden flex items-center justify-center px-4 py-2">
              <Menu />
            </button>
          </div>
        </header>
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
