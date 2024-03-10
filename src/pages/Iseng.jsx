import React, { useState } from "react";

const Modal = ({ number }) => {
  return (
    <div className="m-2">
      <h1 className="font-bold">Persentase pasangan: {number}%</h1>
    </div>
  );
};

const Iseng = () => {
  const [showModal, setShowModal] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");

  const handleShowModal = () => {
    // Calculate the percentage match between the names
    const matchPercentage = calculatePercentage(name1, name2);
    setPercentage(matchPercentage);

    setShowModal(true);
  };

  const calculatePercentage = (name1, name2) => {
    // Dummy calculation for demonstration purpose
    return Math.floor(100) + 1;
  };

  return (
    <div>
      <h1 className="m-2">Aplikasi Persentase Jodoh</h1>
      <input
        type="text"
        placeholder="Nama kamu"
        value={name1}
        onChange={(e) => setName1(e.target.value)}
        className="w-48 text-black px-2 py-2 m-2 rounded-md"
      />
      <input
        type="text"
        placeholder="Nama pasangan kamu"
        value={name2}
        onChange={(e) => setName2(e.target.value)}
        className="w-48 text-black px-2 py-2 m-2 rounded-md"
      />
      <button
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md"
        onClick={handleShowModal}
      >
        Hitung persentase
      </button>
      {showModal && <Modal number={percentage} />}
    </div>
  );
};

export default Iseng;
