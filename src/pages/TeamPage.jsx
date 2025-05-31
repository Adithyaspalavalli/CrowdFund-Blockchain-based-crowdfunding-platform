import React from "react";

// UI imports
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CssBaseline,
  Divider,
} from "@mui/material";

// components
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const developers = [
  "Appaji N",
  "Darshan Gowda S",
  "Chandan Hosmane",
  "Palavalli S Adithya",
];

function TeamPage() {
  return (
    <Box className="App">
      <CssBaseline />
      <NavBar />
      <Container component="main" maxWidth="md" sx={{ mt: 8, mb: 6 }}>
        {/* Page Title */}
        <Box textAlign="center" mb={4}>
          <Typography variant="h3" component="h1" gutterBottom color="primary">
            Our Team
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Meet the developers behind CrowdFund
          </Typography>
        </Box>

        <Divider sx={{ mb: 4 }} />
          {/* Guide Section */}
          <Box sx={{ mt: 6 }}>
          <Box textAlign="center">
          <Typography variant="h4" gutterBottom>
            Guide
          </Typography>
          </Box>
          <Card sx={{ borderLeft: "4px solid #388e3c", borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h6">Dr. Suma R</Typography>
              <Typography variant="body2" color="text.secondary">
                Professor, Department of Information Science and Engineering
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Sri Siddhartha Institute of Technology, Tumakuru
              </Typography>
            </CardContent>
          </Card>
        </Box>

        <Divider sx={{ mb: 4 }} />
        
        {/* Developers Section */}
        <Box>
          <Box textAlign="center">
            <Typography variant="h4" gutterBottom>
              Students
            </Typography>
          </Box>
          <Typography variant="body1" color="text.secondary" mb={2}>
            This project is developed by final year students of the Department of Information Science and Engineering,
            Sri Siddhartha Institute of Technology, Tumakuru.
          </Typography>
          <Grid container spacing={3}>
            {developers.map((name, idx) => (
              <Grid item xs={12} sm={6} key={idx}>
                <Card sx={{ borderLeft: "4px solid #1976d2", borderRadius: 2 }}>
                  <CardContent>
                    <Typography variant="h6">{name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Final Year ISE Student
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

       
        
      
      </Container>
      <Footer />
    </Box>
  );
}

export default TeamPage; 




// import React from "react";

// // UI imports
// import {
//   Box,
//   Typography,
//   Container,
//   Grid,
//   Card,
//   CardContent,
//   CssBaseline,
//   Divider,
//   Avatar,
//   IconButton,
//   Chip,
//   Fade,
//   Slide,
//   Grow,
// } from "@mui/material";

// // Icons
// import {
//   GitHub as GitHubIcon,
//   LinkedIn as LinkedInIcon,
//   Email as EmailIcon,
//   Code as CodeIcon,
//   Storage as StorageIcon,
//   Brush as BrushIcon,
//   Security as SecurityIcon,
// } from "@mui/icons-material";

// // components
// import NavBar from "../components/NavBar";
// import Footer from "../components/Footer";

// const developers = [
//   {
//     name: "Appaji N",
//     role: "Full Stack Developer",
//     avatar: "https://i.pravatar.cc/150?img=1",
//     skills: ["React", "Solidity", "Node.js"],
//     bio: "Passionate about blockchain technology and decentralized applications. Specializes in smart contract development and frontend architecture.",
//     github: "https://github.com",
//     linkedin: "https://linkedin.com",
//     email: "appaji@example.com"
//   },
//   {
//     name: "Darshan Gowda S",
//     role: "Blockchain Developer",
//     avatar: "https://i.pravatar.cc/150?img=2",
//     skills: ["Solidity", "Web3.js", "Ethereum"],
//     bio: "Expert in blockchain development with a focus on smart contracts and decentralized systems. Enthusiastic about creating secure and efficient solutions.",
//     github: "https://github.com",
//     linkedin: "https://linkedin.com",
//     email: "darshan@example.com"
//   },
//   {
//     name: "Chandan Hosmane",
//     role: "Frontend Developer",
//     avatar: "https://i.pravatar.cc/150?img=3",
//     skills: ["React", "Material-UI", "JavaScript"],
//     bio: "Creative frontend developer with a keen eye for design and user experience. Specializes in building responsive and intuitive interfaces.",
//     github: "https://github.com",
//     linkedin: "https://linkedin.com",
//     email: "chandan@example.com"
//   },
//   {
//     name: "Palavalli S Adithya",
//     role: "Backend Developer",
//     avatar: "https://i.pravatar.cc/150?img=4",
//     skills: ["Node.js", "Firebase", "MongoDB"],
//     bio: "Backend specialist focused on building scalable and secure server-side applications. Experienced in database design and API development.",
//     github: "https://github.com",
//     linkedin: "https://linkedin.com",
//     email: "adithya@example.com"
//   },
// ];

// const guide = {
//   name: "Dr. Suma R",
//   role: "Project Guide",
//   avatar: "https://i.pravatar.cc/150?img=5",
//   position: "Professor",
//   department: "Department of Information Science and Engineering",
//   institution: "Sri Siddhartha Institute of Technology, Tumakuru",
//   expertise: ["Blockchain", "Web Development", "Database Systems"],
//   email: "suma@example.com"
// };

// function TeamPage() {
//   return (
//     <Box className="App">
//       <CssBaseline />
//       <NavBar />
//       <Container component="main" maxWidth="lg" sx={{ mt: 8, mb: 6 }}>
//         {/* Page Title */}
//         <Fade in timeout={1000}>
//           <Box textAlign="center" mb={4}>
//             <Typography variant="h3" component="h1" gutterBottom color="primary">
//               Our Team
//             </Typography>
//             <Typography variant="h6" color="text.secondary">
//               Meet the talented developers behind CrowdFund
//             </Typography>
//           </Box>
//         </Fade>

//         <Divider sx={{ mb: 4 }} />
        
//         {/* Developers Section */}
//         <Slide direction="up" in timeout={1200}>
//           <Box>
//             <Box textAlign="center" mb={4}>
//               <Typography variant="h4" gutterBottom>
//                 Development Team
//               </Typography>
//               <Typography variant="body1" color="text.secondary" mb={2}>
//                 This project is developed by final year students of the Department of Information Science and Engineering,
//                 Sri Siddhartha Institute of Technology, Tumakuru.
//               </Typography>
//             </Box>
//             <Grid container spacing={4}>
//               {developers.map((dev, idx) => (
//                 <Grid item xs={12} sm={6} md={3} key={idx}>
//                   <Grow in timeout={1500 + (idx * 200)}>
//                     <Card 
//                       sx={{ 
//                         height: '100%',
//                         transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
//                         '&:hover': {
//                           transform: 'translateY(-8px)',
//                           boxShadow: '0 12px 20px rgba(0,0,0,0.2)',
//                         }
//                       }}
//                     >
//                       <CardContent sx={{ textAlign: 'center' }}>
//                         <Avatar
//                           src={dev.avatar}
//                           sx={{ 
//                             width: 120, 
//                             height: 120, 
//                             mx: 'auto', 
//                             mb: 2,
//                             border: '4px solid',
//                             borderColor: 'primary.main'
//                           }}
//                         />
//                         <Typography variant="h6" gutterBottom>
//                           {dev.name}
//                         </Typography>
//                         <Typography variant="subtitle1" color="primary" gutterBottom>
//                           {dev.role}
//                         </Typography>
//                         <Typography variant="body2" color="text.secondary" paragraph>
//                           {dev.bio}
//                         </Typography>
//                         <Box sx={{ mb: 2 }}>
//                           {dev.skills.map((skill, index) => (
//                             <Chip
//                               key={index}
//                               label={skill}
//                               size="small"
//                               sx={{ m: 0.5 }}
//                               color="primary"
//                               variant="outlined"
//                             />
//                           ))}
//                         </Box>
//                         <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
//                           <IconButton color="primary" href={dev.github} target="_blank">
//                             <GitHubIcon />
//                           </IconButton>
//                           <IconButton color="primary" href={dev.linkedin} target="_blank">
//                             <LinkedInIcon />
//                           </IconButton>
//                           <IconButton color="primary" href={`mailto:${dev.email}`}>
//                             <EmailIcon />
//                           </IconButton>
//                         </Box>
//                       </CardContent>
//                     </Card>
//                   </Grow>
//                 </Grid>
//               ))}
//             </Grid>
//           </Box>
//         </Slide>

//         <Divider sx={{ my: 6 }} />
        
//         {/* Guide Section */}
//         <Slide direction="up" in timeout={2000}>
//           <Box>
//             <Typography variant="h4" gutterBottom textAlign="center" mb={4}>
//               Project Guide
//             </Typography>
//             <Grid container spacing={4} justifyContent="center">
//               <Grid item xs={12} md={8}>
//                 <Grow in timeout={2500}>
//                   <Card 
//                     sx={{ 
//                       transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
//                       '&:hover': {
//                         transform: 'translateY(-8px)',
//                         boxShadow: '0 12px 20px rgba(0,0,0,0.2)',
//                       }
//                     }}
//                   >
//                     <CardContent>
//                       <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
//                         <Avatar
//                           src={guide.avatar}
//                           sx={{ 
//                             width: 100, 
//                             height: 100, 
//                             mr: 3,
//                             border: '4px solid',
//                             borderColor: 'success.main'
//                           }}
//                         />
//                         <Box>
//                           <Typography variant="h5" gutterBottom>
//                             {guide.name}
//                           </Typography>
//                           <Typography variant="subtitle1" color="success.main" gutterBottom>
//                             {guide.role}
//                           </Typography>
//                           <Typography variant="body2" color="text.secondary">
//                             {guide.position}, {guide.department}
//                           </Typography>
//                           <Typography variant="body2" color="text.secondary">
//                             {guide.institution}
//                           </Typography>
//                         </Box>
//                       </Box>
//                       <Box sx={{ mb: 2 }}>
//                         <Typography variant="subtitle2" gutterBottom>
//                           Areas of Expertise:
//                         </Typography>
//                         <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
//                           {guide.expertise.map((skill, index) => (
//                             <Chip
//                               key={index}
//                               label={skill}
//                               color="success"
//                               variant="outlined"
//                               size="small"
//                             />
//                           ))}
//                         </Box>
//                       </Box>
//                       <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
//                         <IconButton color="success" href={`mailto:${guide.email}`}>
//                           <EmailIcon />
//                         </IconButton>
//                       </Box>
//                     </CardContent>
//                   </Card>
//                 </Grow>
//               </Grid>
//             </Grid>
//           </Box>
//         </Slide>
//       </Container>
//       <Footer />
//     </Box>
//   );
// }

// export default TeamPage;