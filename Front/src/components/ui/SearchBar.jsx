function SearchBar() {
  return (
    <div className="w-full h-10 bg-neutral-700 rounded-lg flex items-center px-4">
      <input
        type="text"
        placeholder="Filtrar Tareas..."
        className="w-full h-full bg-neutral-700 focus:outline-none"
      />
    </div>
  );
}

export default SearchBar;
