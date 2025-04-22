import React from 'react';
import { Link, Typography, Box } from "@mui/material";

function Copyright({ sx = {} }) {
  return (
    <Box sx={sx}>
      <Typography variant="body2" component="span">
        {"© "}
        {new Date().getFullYear()}{" "}
        <Link 
          color="inherit" 
          href="/"
          sx={{ 
            textDecoration: 'none',
            '&:hover': { textDecoration: 'underline' }
          }}
        >
          CrowdFunding
        </Link>
        {". All Rights Reserved."}
      </Typography>
    </Box>
  );
}

export default Copyright;
