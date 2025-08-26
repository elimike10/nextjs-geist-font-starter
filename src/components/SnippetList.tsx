"use client";
import React from "react";
import { Snippet } from "../lib/snippetTypes";
import SnippetCard from "./SnippetCard";

type Props = {
  snippets: Snippet[];
  onDelete: (id: string) => void;
  onEdit: (snippet: Snippet) => void;
};

export default function SnippetList({ snippets, onDelete, onEdit }: Props) {
  if (snippets.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-lg font-medium text-gray-900 mb-2">No snippets yet</h3>
          <p className="text-gray-500 mb-4">
            Start building your code snippet library by adding your first snippet.
          </p>
          <p className="text-sm text-gray-400">
            Click the "Add Snippet" button above to get started.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="text-sm text-gray-600 mb-4">
        {snippets.length} snippet{snippets.length !== 1 ? 's' : ''} saved
      </div>
      {snippets.map((snippet) => (
        <SnippetCard
          key={snippet.id}
          snippet={snippet}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}
