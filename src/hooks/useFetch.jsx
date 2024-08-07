import { useEffect, useRef, useState } from "react";

export const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);
  const abortControllerRef = useRef(null);

  const handleGet = async (url, body) => {
    setLoading(true);
    try {
      const options = {
        method: "GET",
        signal: abortControllerRef.current?.signal,
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await fetch(url, options);
      const response = await res.json();
      setData(response);
    } catch (e) {
      if (e.name === "AbortError") return;
      setError(true);
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const handlePost = async (url, body, method) => {
    setLoading(true);
    try {
      const options = {
        method: method ? method : "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
        signal: abortControllerRef.current?.signal,
      };
      const res = await fetch(url, options);
      const response = await res.json();
      setData(response);
    } catch (e) {
      if (e.name === "AbortError") return;
      setError(true);
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (url) => {
    setLoading(true);
    try {
      const options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        signal: abortControllerRef.current?.signal,
      };

      const res = await fetch(url, options);
      const response = await res.json();
      setData(response);
    } catch (e) {
      if(e.name === "AbortError") return;
      setError(true);
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  const getData = (url, body) => {
    abortControllerRef.current = new AbortController();
    handleGet(url, body);
  };

  const postData = (url, body, method) => {
    abortControllerRef.current = new AbortController();
    handlePost(url, body, method);
  };

  const deleteData = (url) => {
    abortControllerRef.current = new AbortController();
    handleDelete(url);
  }

  useEffect(() => {
    return () => {
      abortControllerRef.current?.abort();
    };
  }, []);

  return { data, loading, error, getData, postData, deleteData };
};
