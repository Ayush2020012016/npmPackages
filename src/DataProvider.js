import { useState } from "react";
import { DataContext } from "./Context";

function DataProvider({ children }) {
  const [packagesList, setPackagesList] = useState([]);
  return (
    <DataContext.Provider value={{ packagesList, setPackagesList }}>
      {children}
    </DataContext.Provider>
  );
}
export default DataProvider;
