import { useState, useEffect, useContext } from "react";
import {
  TextField,
  Paper,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
  Typography,
  Pagination,
  Grid,
} from "@mui/material";
import { AddPagination } from "../Functinality/AddPagination";
import { ClipLoader } from "react-spinners";
import { useApp } from "../Context/useAppContext";

function Catalog() {
    const {pageNumbers} = useApp();
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);

  const sortOptions = [
    { value: "name", label: "Alphabetical" },
    { value: "priceDesc", label: "Price-High to Low" },
    { value: "price", label: "Price-Low to High" },
  ];

  const handleSort = (event) => {
    const selectedSort = event.target.value;
    setSort(selectedSort);
  };

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearch(query);
  };

  const handlePageChange = (event, value) => {
    setPage(value); 
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Grid container spacing={4}>
      <Grid item xs={3}>
        <Paper sx={{ mb: 2 }}>
          <TextField
            variant="outlined"
            fullWidth
            label="Search"
            name="search"
            onChange={handleSearch}
            value={search}
          />
        </Paper>
        <Paper sx={{ p: 2, mb: 2 }}>
          <FormControl component="fieldset">
            <RadioGroup>
              {sortOptions.map((sort, index) => (
                <FormControlLabel
                  key={index}
                  value={sort.label}
                  control={<Radio />}
                  label={sort.label}
                  onChange={handleSort}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Paper>
      </Grid>

      <Grid item xs={9}>
        {loading ? (
          <Box textAlign="center">
            <ClipLoader />
            <p>Loading Products...</p>
          </Box>
        ) : (
          <AddPagination page={page} search={search} sort={sort} />
        )}
      </Grid>

      <Grid item xs={12}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography>Displaying 1-12 of page {page}</Typography> 
          <Pagination
            color="secondary"
            size="large"
            count={pageNumbers}
            page={page}
            onChange={handlePageChange}
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export default Catalog;