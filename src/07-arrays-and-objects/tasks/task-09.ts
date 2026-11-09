/**
 * A social media platform stores posts.
 * Tasks:
 * 1. Find post that containing "typescript"!
 * 2. Find post that containing "nestjs"!
 * 3. Find the post with highest number of likes!
 * 4. Calculate the total of likes!
 */

const posts = [
  {
    author: "Andi",
    content: "Learning TypeScript #typescript #programming",
    hashtags: ["typescript", "programming"],
    likes: 120,
  },
  {
    author: "Budi",
    content: "My first NestJS project #nestjs #typescript",
    hashtags: ["nestjs", "typescript"],
    likes: 250,
  },
  {
    author: "Citra",
    content: "Frontend development #nextjs #react",
    hashtags: ["nextjs", "react"],
    likes: 180,
  },
  {
    author: "Deni",
    content: "Backend with NestJS #nestjs #backend",
    hashtags: ["nestjs", "backend"],
    likes: 300,
  },
];

const typescriptPosts = posts.filter(post => post.hashtags.includes("typescript"));

const nestjsPosts = posts.filter(post => post.hashtags.includes("nestjs"));

const highestLikes = posts.reduce((highest, post) =>
    post.likes > highest.likes ? post : highest
);

const totalLikes = posts.reduce((total, post) => total + post.likes, 0);

console.log(`Posts Containing TypeScript: ${JSON.stringify(typescriptPosts, null, 2)}`);
console.log(`Posts Containing NestJS: ${JSON.stringify(nestjsPosts, null, 2)}`);
console.log(`Post With Highest Likes: ${highestLikes.author} (${highestLikes.likes} likes)`);
console.log(`Total Likes: ${totalLikes}`);