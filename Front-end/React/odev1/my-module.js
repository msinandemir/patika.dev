import axios from "axios";

async function  getData(userId) {
  const { data: getUser } = await axios(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const { data: getPosts } = await axios(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );

  console.log("user => ", getUser);
  console.log("posts => ", getPosts);
};
export default getData;