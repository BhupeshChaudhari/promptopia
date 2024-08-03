"use client";

import React, { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [posts, setPosts] = useState([]);
  const [searchedResults, setSearchedResults] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  const filterPrompts = (searchText) => {
    return posts.filter(
      (post) =>
        post.tag.includes(searchText) ||
        post.creator.username.includes(searchText)
    );
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchText(value);

    // Debounce search
    clearTimeout(searchTimeout);
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const handleTagClick = (tagName) => {
    setSearchText(tagName);
    const searchResult = filterPrompts(tagName);
    setSearchedResults(searchResult);
  };

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input"
        />
      </form>
      <PromptCardList
        data={searchText ? searchedResults : posts}
        handleTagClick={handleTagClick}
      />
    </section>
  );
};

export default Feed;
