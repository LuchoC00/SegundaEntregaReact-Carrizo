import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function CardUser( {userData}) {
  return (
    <Card sx={{ maxWidth: 345 , height: 400}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={userData.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {userData.title}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {userData.category}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {userData.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
