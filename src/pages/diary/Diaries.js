import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import { getAllPosts } from "../../api-helpers/helper";
import DiaryItem from "./DiaryItem";

const Diaries = () => {
  const [posts, setPosts] = useState();
  useEffect(() => {
    getAllPosts()
      .then((data) => {
        // console.log(data?.posts.slice(1));
        setPosts(data?.posts.slice(1));
      })
      .catch((err) => console.log(err));

    // return () => {
    //   second
    // }
  }, []);

  return (
    <Box
      display={"flex"}
      flexDirection="column"
      padding={3}
      justifyContent="center"
      alignItems={"center"}
    >
      {posts ? (
        posts.map((item, index) => (
          <DiaryItem
            key={item._id}
            id={item._id}
            description={item.description}
            image={item.image}
            location={item.location}
            title={item.title}
            user={item.user._id}
            name={item.user.name}
            date={new Date(`${item.date}`).toLocaleDateString()}
          />
        ))
      ) : (
        <>Loading...</>
      )}
    </Box>
  );
};

export default Diaries;
