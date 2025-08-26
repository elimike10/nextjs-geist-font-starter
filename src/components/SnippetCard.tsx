"use client";
import React from "react";
import { Snippet } from "../lib/snippetTypes";

type Props = {
  snippet: Snippet;
  onDelete: (id: string) => void;
  onEdit: (snippet: Snippet) => void;
};

export default function SnippetCard({ snippet, onDelete, onEdit }: Props) {
  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString();
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 mb-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-gray-900">{snippet.title}</h3>
        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
          {snippet.language}
        </span>
      </div>
      
      <pre className="bg-gray-50 border border-gray-200 rounded-md p-4 overflow-x-auto mb-4">
        <code className="font-mono text-sm text-gray-800 whitespace-pre-wrap">
          {snippet.content}
        </code>
      </pre>
      
      <div className="flex justify-between items-center">
        <span className="text-xs text-gray-500">
          Created: {formatDate(snippet.createdAt)}
        </span>
        <div className="flex space-x-3">
          <button
            onClick={() => onEdit(snippet)}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline transition-colors"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(snippet.id)}
            className="text-red-600 hover:text-red-800 text-sm font-medium hover:underline transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
