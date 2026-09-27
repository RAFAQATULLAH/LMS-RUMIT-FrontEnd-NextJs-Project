'use client';

import { useState } from 'react';
import { X, BookOpen, Calendar, Layers, Plus, Tag } from 'lucide-react';

export default function AddCourseForm({ isOpen, onClose, onSubmitCourse }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    module: 'Modern Front-End Development',
    dueDate: '',
    isHackathon: false,
    topics: '',
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Convert comma-separated topics into an array
    const formattedData = {
      ...formData,
      topicsArray: formData.topics
        ? formData.topics.split(',').map((t) => t.trim())
        : [],
    };

    if (onSubmitCourse) {
      onSubmitCourse(formattedData);
    }

    // Reset and close
    setFormData({
      title: '',
      description: '',
      module: 'Modern Front-End Development',
      dueDate: '',
      isHackathon: false,
      topics: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 font-sans">
      <div className="bg-gray-800 border border-gray-700 rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-gray-700/50 border-b border-gray-700">
          <div className="flex items-center gap-2 text-white">
            <BookOpen className="w-5 h-5 text-blue-400" />
            <h2 className="text-lg font-bold">Add New Course / Assignment</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          
          {/* Title Input */}
          <div>
            <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
              Course / Assignment Title <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="title"
              required
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g. Admin Panel Dashboard"
              className="w-full bg-gray-700 border border-gray-600 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          {/* Module & Due Date Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Module Dropdown */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                <Layers className="w-3.5 h-3.5 text-gray-400" /> Module
              </label>
              <select
                name="module"
                value={formData.module}
                onChange={handleChange}
                className="w-full bg-gray-700 border border-gray-600 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all cursor-pointer"
              >
                <option value="Modern Front-End Development">Modern Front-End</option>
                <option value="Front-End Development">Front-End Dev</option>
                <option value="Web Designing">Web Designing</option>
                <option value="Backend Development">Backend Development</option>
              </select>
            </div>

            {/* Due Date */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-gray-400" /> Due Date
              </label>
              <input
                type="date"
                name="dueDate"
                required
                value={formData.dueDate}
                onChange={handleChange}
                className="w-full bg-gray-700 border border-gray-600 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all cursor-pointer"
              />
            </div>

          </div>

          {/* Topics Input */}
          <div>
            <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5 flex items-center gap-1">
              <Tag className="w-3.5 h-3.5 text-gray-400" /> Topics (Comma-separated)
            </label>
            <input
              type="text"
              name="topics"
              value={formData.topics}
              onChange={handleChange}
              placeholder="e.g. NextJS, ReactJS, Tailwind CSS"
              className="w-full bg-gray-700 border border-gray-600 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          {/* Description Textarea */}
          <div>
            <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
              Description
            </label>
            <textarea
              name="description"
              rows={3}
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter brief assignment instructions..."
              className="w-full bg-gray-700 border border-gray-600 rounded-xl p-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
            />
          </div>

          {/* Hackathon Checkbox */}
          <div className="flex items-center gap-3 bg-purple-950/30 border border-purple-500/30 rounded-xl p-3">
            <input
              type="checkbox"
              id="isHackathon"
              name="isHackathon"
              checked={formData.isHackathon}
              onChange={handleChange}
              className="w-4 h-4 text-purple-600 bg-gray-700 border-gray-600 rounded focus:ring-purple-500 cursor-pointer"
            />
            <label htmlFor="isHackathon" className="text-sm font-medium text-purple-200 cursor-pointer select-none">
              Mark as Hackathon Challenge
            </label>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-700">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-semibold text-gray-300 bg-gray-700 hover:bg-gray-600 rounded-xl transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg transition-all active:scale-95"
            >
              <Plus className="w-4 h-4" /> Save Course
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}