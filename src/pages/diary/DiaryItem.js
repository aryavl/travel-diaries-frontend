import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";
import CardActions from "@mui/material/CardActions";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Link } from "react-router-dom";
import { deletePost } from "../../api-helpers/helper";
const DiaryItem = ({ name,title, description, image, date, location, id, user }) => {
  const [open, setOpen] = useState(false);
  const isLoggedInUser = () => {
    if (localStorage.getItem("userId") === user) {
      return true;
    }
    return false;
  };

  const avatarName = name.split("")[0];
  const handleDelete =()=>{
    setOpen(true)
    deletePost(id)
    .then(res=>console.log(res))
  }

  return (
    <Card
      sx={{
        width: { xs: "300px", sm: "400px", md: "650px" },
        height: "100vh",
        m: 1,
        p: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "5px 5px 10px #CCC",
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            {avatarName}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <EditLocationAltIcon />
          </IconButton>
        }
        title={location}
        subheader={date}
      />
      <CardMedia component="img" height="60%" image={image} alt="Paella dish" />
      <CardContent>
        <Typography variant="h6" color="text.secondary">
          {title}
        </Typography>
        <hr />
        <Box paddingTop={1} display={"flex"}>
          <Typography width={"170px"} fontWeight={"bold"} variant="caption">
           {name}:{" "}
          </Typography>
          <Typography variant="body2" color="text.secondary" mt={"-1px"}>
            {description}
          </Typography>
        </Box>
      </CardContent>

      {isLoggedInUser() && (
        <CardActions sx={{ marginLeft: "auto" }}>
          <IconButton color="warning" LinkComponent={Link} to={`/post/${id}`}>
            <EditIcon />
          </IconButton>
          <IconButton color="error" onClick={handleDelete}>
            <DeleteForeverIcon />
          </IconButton>
        </CardActions>
      )}

      <Snackbar open={open} autoHideDuration={6000} onClose={()=>{setOpen(false)}}>
        <Alert onClose={()=>{setOpen(false)}} severity="success" sx={{ width: "100%" }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </Card>
  );
};

export default DiaryItem;
