// library and compoent imports//
import React from "react";
import { 
  Card, 
  CardActions, 
  CardContent, 
  CardMedia, 
  Typography, 
  Button,
  LinearProgress, 
  Box, 
  Stack, 
  Chip,
  Avatar,
  useTheme
} from "@mui/material";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import ShareIcon from "@mui/icons-material/Share";
import { useNavigate } from "react-router-dom";

function CampaignCard(props) {
  const navigate = useNavigate();
  const theme = useTheme();

  // Extract the details
  const {
    bannerUrl,
    campaignStatus,
    title,
    description,
    ethRaised,
    ethFunded,
    deadline,
    id,
  } = props.details;

  // Find the no. of days left
  const today = Date.now();
  const diffTime = Math.abs(today - new Date(deadline));
  const daysLeft = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  // Calculate progress percentage
  const progressPercentage = (ethFunded / ethRaised) * 100;

  // Get status color
  const getStatusColor = () => {
    switch(campaignStatus) {
      case 'ACTIVE':
        return theme.palette.success.main;
      case 'SUCCESS':
        return theme.palette.success.dark;
      default:
        return theme.palette.error.main;
    }
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 16px 40px rgba(0, 0, 0, 0.12)",
        },
      }}
      elevation={1}
    >
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="200"
          image={bannerUrl || "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"}
          alt={title}
          sx={{ objectFit: "cover" }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 16,
            left: 16,
            zIndex: 2,
          }}
        >
          <Chip
            label={campaignStatus}
            size="small"
            sx={{
              bgcolor: getStatusColor(),
              color: "white",
              fontWeight: "bold",
              boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            }}
          />
        </Box>
      </Box>

      <CardContent 
        sx={{ 
          flexGrow: 1,
          cursor: "pointer",
        }}
        onClick={() => navigate(`/campaign/${id}`)}
      >
        <Typography 
          variant="h5" 
          component="h2" 
          gutterBottom
          sx={{
            fontWeight: "bold",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            height: "60px",
          }}
        >
          {title}
        </Typography>
        
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            display: "-webkit-box",
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
            height: "60px",
            mb: 2,
          }}
        >
          {description}
        </Typography>

        <Box sx={{ mt: 2, mb: 1 }}>
          <LinearProgress 
            variant="determinate" 
            value={progressPercentage > 100 ? 100 : progressPercentage} 
            sx={{ 
              height: 8, 
              borderRadius: 4,
              backgroundColor: 'rgba(0, 0, 0, 0.1)',
              '& .MuiLinearProgress-bar': {
                borderRadius: 4,
                backgroundImage: `linear-gradient(to right, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
              }
            }}
          />
        </Box>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mb: 1 }}
        >
          <Typography variant="body2" color="text.secondary">
            {`${Math.round(progressPercentage)}% Funded`}
          </Typography>
          <Typography variant="body2" fontWeight="bold">
            {`${ethFunded} / ${ethRaised} ETH`}
          </Typography>
        </Stack>

        <Box sx={{ mt: 2, pt: 2, borderTop: `1px solid ${theme.palette.divider}` }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <AccessTimeRoundedIcon fontSize="small" color="action" />
            <Typography variant="body2" color="text.secondary">
              {daysLeft > 0 
                ? `${daysLeft} days left` 
                : "Campaign ended"}
            </Typography>
          </Stack>
        </Box>
      </CardContent>

      <CardActions sx={{ p: 2, pt: 0 }}>
        <Button 
          size="medium" 
          variant="contained"
          fullWidth
          onClick={() => navigate(`/campaign/${id}`)}
          sx={{ borderRadius: 2 }}
        >
          View Campaign
        </Button>
      </CardActions>
    </Card>
  );
}

export default CampaignCard;
