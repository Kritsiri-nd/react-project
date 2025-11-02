import React, { useState } from "react";

function SearchList() {
  const items = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
  ];

  const [search, setSearch] = useState("");

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center text-gray-800 max-w-[500px] h-100 border-1 py-10">
      <h1 className="text-3xl font-bold mb-4">Search</h1>
      <input
        type="text"
        placeholder="ค้นหาสิ่งที่ต้องการ..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border rounded px-3 py-2 mb-4 w-64 focus:outline-none focus:ring-2 focus:ring-black"
      />
      <ul className="w-64 space-y-2">
        {filteredItems.map((item, idx) => (
          <li key={idx} className="bg-blue-200 p-2 border rounded">
            {item}
          </li>
        ))}
        {filteredItems.length === 0 && (
          <li className="text-gray-500 italic">ไม่พบผลลัพธ์</li>
        )}
      </ul>
    </div>
  );
}

export default SearchList;
