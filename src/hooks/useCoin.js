import React, { useState } from "react";

const useCoin = () => {
  const [state, setState] = useState("");

  const Select = () => (
    <div>
      <label>Moneda</label>
      <select>
        <option value="ARG">Peso Argentino</option>
      </select>
    </div>
  );

  return [state, Select, setState];
};
export default useCoin;
