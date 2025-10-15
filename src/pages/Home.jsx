import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

export default function Home() {
const [reactRepos, setReactRepos] = useState([]);
  const [nodeRepos, setNodeRepos] = useState([]);
  const [pythonRepos, setPythonRepos] = useState([]);

  const API = import.meta.env.VITE_GITHUB_API;
  

  useEffect(() => {
    fetch(`${API}react&per_page=5`, {
    })
      .then(res => res.json())
      .then(data => { setReactRepos(data.items) })
      .catch(err => console.error(err));

    fetch(`${API}node&per_page=5`, {
 
    })
      .then(res => res.json())
      .then(data => setNodeRepos(data.items))
      .catch(err => console.error(err));

    fetch(`${API}python&per_page=5`, {
 
    })
      .then(res => res.json())
      .then(data => setPythonRepos(data.items))
      .catch(err => console.error(err));
  }, [API]);




  return (
    <div>
      <Navbar />
        <h2 className="text-2xl font-bold mb-4">Bem-vindo ao Fiap Commerce!</h2>
         <section className="@container p-6 bg-gray-50 rounded">
      {/* Grid de imagens */}
      <div className="grid grid-cols-2 @sm:grid-cols-3 @md:grid-cols-3 @lg:grid-cols-6 gap-4">
        {/* Card 1 */}
        <div className="relative group overflow-hidden rounded shadow transition-transform duration-300 animate-float">
          <img
            src=""
            alt="Imagem 1"
            className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
          />
          <span className="absolute bottom-2 left-2 text-sm text-white bg-black/60 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Imagem 1
          </span>
        </div>

        {/* Card 2 */}
        <div className="relative group overflow-hidden rounded shadow transition-transform duration-300 animate-float">
          <img
            src=""
            alt="Imagem 2"
            className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
          />
          <span className="absolute bottom-2 left-2 text-sm text-white bg-black/60 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Imagem 2
          </span>
        </div>

        {/* Card 3 */}
        <div className="relative group overflow-hidden rounded shadow transition-transform duration-300 animate-float">
          <img
            src=""
            alt="Imagem 3"
            className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
          />
          <span className="absolute bottom-2 left-2 text-sm text-white bg-black/60 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Imagem 3
          </span>
        </div>
      </div>
    </section>
    </div>
    
  );
}
