import React from "react";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import "./style.css";

export default function PaginationComponent({ pageNumber, handleChange }) {
  return (
    <div className="pagination-component">
      <Typography>Page: {pageNumber}</Typography>
      <Pagination
        count={10}
        page={pageNumber}
        onChange={handleChange}
        sx={{
          color: "var(--white)",
          "& .Mui-selected": {
            backgroundColor: "var(--blue) !important",
            color: "#fff !important",
            borderColor: "var(--blue) !important",
          },
          "& .MuiPagination-ellipsis": {
            border: "0px solid var(--grey) !important",
          },

          "& .MuiPaginationItem-text": {
            color: "var(--white)",
            border: "1px solid var(--grey)",
          },
        }}
      />
    </div>
  );
}
