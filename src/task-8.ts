import axios from 'axios';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function fetchPosts(): Promise<Post[]> {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const response = await axios.get<Post[]>(url);

  return response.data;
}

fetchPosts().then((posts) => {
  console.log('Title of the first post:', posts[0].title);
});
