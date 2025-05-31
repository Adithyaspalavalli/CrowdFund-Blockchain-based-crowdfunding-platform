import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, useTheme, Divider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Logo from './Logo';
import Copyright from './Copyright';

const footerLinks = [
  {
    title: 'About',
    links: [
      { name: 'Our Story', url: '/about' },
      { name: 'Our Team', url: '/team' },
     
    ]
  },
];

const Footer = () => {
  const theme = useTheme();
  
  return (
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: 'background.dark',
        color: 'white',
        pt: 6,
        pb: 3,
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo and Social */}
          <Grid item xs={12} md={4}>
            <Logo color="light" variant="h5" sx={{ mb: 2 }} />
            <Typography variant="body2" sx={{ mb: 3, opacity: 0.7 }}>
              A blockchain-based crowdfunding platform that connects innovative projects with backers who want to make a difference.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton 
                aria-label="facebook" 
                size="small"
                sx={{ 
                  color: 'white',
                  '&:hover': { color: theme.palette.primary.light }
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton 
                aria-label="twitter" 
                size="small"
                sx={{ 
                  color: 'white',
                  '&:hover': { color: theme.palette.primary.light }
                }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton 
                aria-label="linkedin" 
                size="small"
                sx={{ 
                  color: 'white',
                  '&:hover': { color: theme.palette.primary.light }
                }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton 
                aria-label="github" 
                size="small"
                sx={{ 
                  color: 'white',
                  '&:hover': { color: theme.palette.primary.light }
                }}
              >
                <GitHubIcon />
              </IconButton>
            </Box>
          </Grid>
          
          {/* Links Sections */}
          {footerLinks.map((section) => (
            <Grid item xs={6} sm={4} md={2} key={section.title}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                {section.title}
              </Typography>
              <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }}>
                {section.links.map((link) => (
                  <Box component="li" key={link.name} sx={{ mb: 1 }}>
                    <Link 
                      href={link.url} 
                      underline="hover" 
                      color="inherit"
                      sx={{ 
                        opacity: 0.7,
                        '&:hover': { opacity: 1 }
                      }}
                    >
                      {link.name}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}
          
          {/* Newsletter Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              Get Connected
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.7 }}>
              Join us in revolutionizing crowdfunding with blockchain technology. Connect your wallet to get started.
            </Typography>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.1)' }} />
        
        {/* Bottom Section */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: { sm: 'center' }, justifyContent: 'space-between' }}>
          <Copyright sx={{ color: 'white', opacity: 0.7 }} />
          <Typography variant="body2" sx={{ mt: { xs: 2, sm: 0 }, opacity: 0.7 }}>
           CrowdFund platform - [ONLY] Core functionalities done. 🚧
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
