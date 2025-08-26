"use client";
import React, { useState } from "react";
import { useSnippets } from "../hooks/useSnippets";
import SnippetList from "../components/SnippetList";
import AddSnippetModal from "../components/AddSnippetModal";
import { Snippet } from "../lib/snippetTypes";

export default function HomePage() {
  const { snippets, addSnippet, updateSnippet, deleteSnippet } = useSnippets();
  const [showModal, setShowModal] = useState(false);
  const [editSnippet, setEditSnippet] = useState<Snippet | null>(null);

  const handleSave = (snippet: Snippet) => {
    if (editSnippet) {
      updateSnippet(snippet);
    } else {
      addSnippet(snippet);
    }
  };

  const handleEdit = (snippet: Snippet) => {
    setEditSnippet(snippet);
    setShowModal(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this snippet?")) {
      deleteSnippet(id);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setEditSnippet(null);
  };

  const openAddModal = () => {
    setEditSnippet(null);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Code Snippets Manager
              </h1>
              <p className="text-gray-600">
                Save and organize your most important code snippets
              </p>
            </div>
            <button
              onClick={openAddModal}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-sm"
            >
              Add Snippet
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main>
          <SnippetList
            snippets={snippets}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        </main>

        {/* Modal */}
        {showModal && (
          <AddSnippetModal
            onClose={closeModal}
            onSave={handleSave}
            initialData={editSnippet || undefined}
          />
        )}
      </div>
    </div>
  );
}
