"use client";

import React from "react";
import { useState } from "react";
import { useSession } from "next-auth/react"; // which user is currently logged in
import { useRouter } from "next/navigation";

import Form from "@components/Form";

const CreatePrompt = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [submiiting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });

  const createPrompt = async (e) => {
    e.preventDefault();
    setSubmitting(false);

    try {
      const response = await fetch("/api/prompt/new", {
        method: "POST",
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session?.user.id,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log("Error in creating post func in page.jsx");
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submiiting={submiiting}
      handleSubmit={createPrompt}
    />
  );
};

export default CreatePrompt;
