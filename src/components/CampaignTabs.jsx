import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CampaignCard from "./CampaignCard";


function CustomTabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tab-panel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tab-panel-${index}`,
  };
}

export default function CampaignTabs({ campaigns }) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabs = [
    { label: "All", state: null },
    { label: "Active", state: 0 },
    { label: "Successful", state: 1 },
    { label: "Expired", state: 2 },
    { label: "Aborted", state: 3 },
  ];

  const filterCampaigns = (status) => {
    if (status === null) return campaigns;
    return campaigns.filter((c) => c.campaignStatus === status);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="campaign tabs"
          centered
        >
          {tabs.map((tab, idx) => (
            <Tab key={idx} label={tab.label} {...a11yProps(idx)} />
          ))}
        </Tabs>
      </Box>

      {tabs.map((tab, idx) => (
        <CustomTabPanel key={idx} value={value} index={idx}>
          <Grid container spacing={4}>
            {filterCampaigns(tab.state).map((campaign, i) => (
              <Grid item key={i} xs={12} sm={6} md={4}>
                <CampaignCard details={campaign} />
              </Grid>
            ))}
          </Grid>
        </CustomTabPanel>
      ))}
    </Box>
  );
}
