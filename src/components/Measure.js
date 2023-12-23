import React, { useEffect, useState } from "react";
import axios from "axios";
import LoopIcon from "@mui/icons-material/Loop";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "sys", headerName: "Sys", width: 150 },
  { field: "dia", headerName: "Dia", width: 150 },
  { field: "pr", headerName: "Pr", width: 150 },
];

const MeasureList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const result = await axios("http://localhost:8000/measures/");
      setData(result.data);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="measure-list">
      {isLoading && <LoopIcon />}
      {error && <p>Error: {error}</p>}
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid rows={data} columns={columns} pageSize={5} />
      </div>
    </div>
  );
};

export default MeasureList;
