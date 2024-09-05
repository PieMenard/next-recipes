const Search = () => {
  return (
    <div className="flex items-center justify-center mt-20 mb-4">
      <select className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none">
        <option value="Beef">Beef</option>
        <option value="Chicken">Chicken</option>
        <option value="Lamb">Lamb</option>
        <option value="Pork">Pork</option>
      </select>
      <h1 className="text-xl font-semibold text-center mx-4 text-gray-500">
        OR
      </h1>
      <input
        className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        type="text"
        placeholder="Search for a recipe"
      />
      <button className="bg-black hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Search
      </button>
    </div>
  );
};

export default Search;
