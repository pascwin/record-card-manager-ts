import * as React from "react";
import { DataGrid, GridToolbar, GridColDef } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import { useCollection } from "../../../../hooks/useCollection";

const VISIBLE_FIELDS = ["name", "rating", "country", "dateCreated", "isAdmin"];

const RecordsDataGrid = () => {
  const { data } = useDemoData({
    dataSet: "Employee",
    visibleFields: VISIBLE_FIELDS,
    rowLength: 100,
  });
  const category = "English";
  const uid = "pPv97gbfuubbWXYOqhFYlUDKoUv2";
  const { documents } = useCollection(
    "records",
    ["uid", "==", uid],
    ["category", "==", category],
    []
  );

  const columns: GridColDef[] = [
    { field: 'question', headerName: 'question', width: 150 },
    { field: 'answer', headerName: 'answer', width: 150 },
    { field: 'category', headerName: 'category', width: 150 },
    { field: 'stage', headerName: 'stage', width: 150 },
    { field: 'lastRepeat', headerName: 'lastRepeat', width: 150 },
    { field: 'actions', headerName: 'actions', width: 150 },
  ];

  console.log(data.rows);
  console.log(documents)

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid {...data} components={{ Toolbar: GridToolbar }} />
      <DataGrid
        columns={columns}
        rows={documents}
        components={{ Toolbar: GridToolbar }}
      />
    </div>
  );
};

export default RecordsDataGrid;
