import axios from "axios";
import Card from "../Fragments/Card";
import { useEffect, useState } from "react";

const LandingPage = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const fetchCardItem = async () => {
    try {
      const response = await axios.get(
        "https://pokeapi.deno.dev/pokemon?limit=20"
      );
      setItems(response.data);
      setFilteredItems(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchCardItem();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    filterItems(event.target.value);
  };

  const filterItems = (searchTerm) => {
    const filtered = items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="cari pokemon..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="card-content">
        {filteredItems.length === 0 ? (
          <p>Data tidak ditemukan</p>
        ) : (
          filteredItems.map((item, index) => <Card key={index} {...item} />)
        )}
      </div>
    </>
  );
};

export default LandingPage;
