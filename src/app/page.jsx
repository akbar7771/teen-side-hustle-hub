// Combined version: Hero section + Hustle posting with Tailwind + Framer Motion

import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", description: "", link: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prev) => ({ ...prev, [name]: value }));
  };

  const addPost = () => {
    if (newPost.title && newPost.description && newPost.link) {
      setPosts((prev) => [...prev, newPost]);
      setNewPost({ title: "", description: "", link: "" });
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-gray-100 p-6">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center py-12"
      >
        <h1 className="text-5xl font-bold mb-4">Teen Side Hustle Hub 🚀</h1>
        <p className="text-xl text-gray-700 max-w-xl mx-auto">
          Discover and share real side hustle ideas that teenagers are using around the world to make money online.
        </p>
      </motion.section>

      {/* Post Form */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl mx-auto space-y-4 mb-10"
      >
        <input
          placeholder="Hustle Title"
          name="title"
          value={newPost.title}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded-xl p-3 text-lg"
        />
        <input
          placeholder="Description"
          name="description"
          value={newPost.description}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded-xl p-3 text-lg"
        />
        <input
          placeholder="External Link (e.g., https://...)"
          name="link"
          value={newPost.link}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded-xl p-3 text-lg"
        />
        <button
          onClick={addPost}
          className="w-full bg-black text-white py-3 rounded-2xl text-lg shadow-md hover:scale-105 transition-transform"
        >
          Post My Hustle 💸
        </button>
      </motion.div>

      {/* Posts List */}
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {posts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="rounded-2xl bg-white shadow-md hover:shadow-xl transition p-5"
          >
            <h2 className="font-semibold text-xl mb-2">{post.title}</h2>
            <p className="text-gray-700 mb-2">{post.description}</p>
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Visit Hustle 🔗
            </a>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
