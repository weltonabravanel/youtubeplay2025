import React from "react";

function ListItems() {
  const categories = [
    "Tudo",
    "Música",
    "React routers",
    "Computador",
    "Beleza",
    "Filmes",
    "Times",
    "Notícias",
    "Mixes",
    "1990s",
    "Cinema",
    "Ao vivo",
    "Drama",
    "Carros",
    "Indiano",
    "Cricket",
    "Futebol",
    "Codigo",
  ];
  return (
    <div className="flex overflow-x-scroll hide-scroll-bar px-4">
      <div className="flex space-x-4 flex-nowrap">
        {categories.map((category) => {
          return (
            <div
              key={category}
              className="mb-4 flex-none bg-gray-200 hover:bg-gray-300 duration-300 rounded-xl px-4 py-2 font-medium text-gray-700 cursor-pointer"
            >
              {category}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListItems;
