"use client";
import { useState, useEffect } from "react";
import { Snippet } from "../lib/snippetTypes";

export function useSnippets() {
  const [snippets, setSnippets] = useState<Snippet[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("snippets");
      if (stored) {
        setSnippets(JSON.parse(stored));
      }
    } catch (error) {
      console.error("Error reading snippets from localStorage", error);
    }
  }, []);

  const saveSnippets = (newSnippets: Snippet[]) => {
    try {
      localStorage.setItem("snippets", JSON.stringify(newSnippets));
    } catch (error) {
      console.error("Error saving snippets to localStorage", error);
    }
  };

  const addSnippet = (snippet: Snippet) => {
    const newSnippets = [...snippets, snippet];
    setSnippets(newSnippets);
    saveSnippets(newSnippets);
  };

  const updateSnippet = (updatedSnippet: Snippet) => {
    const newSnippets = snippets.map(snippet => 
      snippet.id === updatedSnippet.id ? updatedSnippet : snippet
    );
    setSnippets(newSnippets);
    saveSnippets(newSnippets);
  };

  const deleteSnippet = (id: string) => {
    const newSnippets = snippets.filter(snippet => snippet.id !== id);
    setSnippets(newSnippets);
    saveSnippets(newSnippets);
  };

  return {
    snippets,
    addSnippet,
    updateSnippet,
    deleteSnippet
  };
}
