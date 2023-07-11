// import {
//   Button,
//   Card,
//   CardActions,
//   CardContent,
//   Typography,
// } from "@mui/material";
// import React from "react";
// import { Link } from "react-router-dom";

// const MovieItem = ({ title, releaseDate, posterUrl, id }) => {
//   return (
//     <Card
//       sx={{
//         margin: 2,
//         width: 250,
//         height: 320,
//         borderRadius: 5,
//         ":hover": {
//           boxShadow: "10px 10px 20px #ccc",
//         },
//       }}
//     >
//       <img height={"50%"} width="100%" src={posterUrl} alt={title} />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {new Date(releaseDate).toDateString()}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button
//           variant="contained"
//           fullWidth
//           LinkComponent={Link}
//           to={`/booking/${id}`}
//           sx={{
//             margin: "auto",
//             bgcolor: "#2b2d42",
//             ":hover": {
//               bgcolor: "#121217",
//             },
//           }}
//           size="small"
//         >
//           Book
//         </Button>
//       </CardActions>
//     </Card>
//   );
// };

// export default MovieItem;
import React from "react";
import { Link } from "react-router-dom";
// import React from 'react';
import './MovieItem.css';

const MovieItem = ({ key, id, posterUrl, releaseDate,title }) => {
  return (
    <div className="card">
      <img src={posterUrl} alt={title} />
      <h2>{title}</h2>
      {/* <p>{description}</p> */}
      <p> {new Date(releaseDate).toDateString()}</p>
      <Link to={`/booking/${id}`}><button className="book-now-button">Book Now</button></Link>
    </div>
  );
};

export default MovieItem;