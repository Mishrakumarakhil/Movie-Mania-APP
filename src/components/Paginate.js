import React from "react";
import { Pagination } from "@material-ui/lab";



const Paginate = ({ totalResults, page, handleChange }) => {
    return (
        <div style={{margin:'0 auto',display:'flex',alignItems:'center',justifyContent:'center', color:"white"}}>
            <h3>{`Showing ${page} of ${totalResults} results`}</h3>
            <Pagination count={totalResults} page={page} onChange={handleChange} color="secondary" variant="outlined"/>
        </div>
    );
};

export default Paginate;