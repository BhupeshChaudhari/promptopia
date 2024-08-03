"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import { useSession } from "next-auth/react"; // which user is currently logged in
import { useRouter, useSearchParams } from "next/navigation";

import Form from "@components/Form";

const EditPrompt = () => {
  //   const { data: session } = useSession();
  const router = useRouter();

  const searchParams = useSearchParams();
  const promptId = searchParams.get("id");

  const [submiiting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });

  useEffect(() => {
    const getPromptDetails = async () => {
      console.log("Hello");
      const response = await fetch(`/api/prompt/${promptId}`);

      const data = await response.json();
      console.log("update data", data);

      setPost({
        prompt: data.prompt,
        tag: data.tag,
      });
    };
    if (promptId) {
      console.log("jhubhjnk");
      getPromptDetails();
    }
  }, [promptId]);

  const UpdatePrompt = async (e) => {
    e.preventDefault();
    setSubmitting(false);

    if (!promptId) {
      return alert("Prompt ID not found");
    }

    try {
      const response = await fetch(`/api/prompt/${promptId}`, {
        method: "PATCH",
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/");
        alert("Prompt Updated Successfully");
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
      type="Edit"
      post={post}
      setPost={setPost}
      submiiting={submiiting}
      handleSubmit={UpdatePrompt}
    />
  );
};

export default EditPrompt;
