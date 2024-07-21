import React, { useState, useEffect } from 'react';
import { SideBar } from './common/SideBar';
import Header from './common/Header';
import axios from 'axios';
import api from '../../api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const InstructorCourses = () => {
  const [showSubCategoryForm, setShowSubCategoryForm] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [subCategoryRequest, setSubCategoryRequest] = useState('');

  useEffect(() => {
    // Fetch categories from the backend
    api.get('/admin_api/categories/')
      .then(response => {
        setCategories(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the categories!', error);
      });
  }, []);

  const handleSubCategoryRequest = () => {
    setShowSubCategoryForm(!showSubCategoryForm);
    if (!showSubCategoryForm) {
      // Reset form fields when opening the form
      setSelectedCategory('');
      setSubCategory('');
      setSubCategoryRequest('');
    }
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSubCategoryChange = (e) => {
    setSubCategory(e.target.value);
  };

  const handleSubCategoryRequestChange = (e) => {
    setSubCategoryRequest(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subCategoryData = {
      name: subCategory,
      description: subCategoryRequest,
      active: false,  // Set the active field to false
      category: selectedCategory,  // Include the selected category
    };

    api.post(`/admin_api/categories/${selectedCategory}/add_subcategory/`, subCategoryData)
      .then(response => {
        console.log('Subcategory created:', response.data);
        toast.success('Subcategory submission successful!');
        // Reset form fields and hide the form
        setSelectedCategory('');
        setSubCategory('');
        setSubCategoryRequest('');
        setShowSubCategoryForm(false);
      })
      .catch(error => {
        console.error('There was an error creating the subcategory!', error);
        toast.error('Error creating subcategory!');
      });
  };

  return (
    <div className="flex">
      <SideBar />
      <div className="flex-grow flex flex-col">
        <Header />
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">Instructor Courses</h1>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleSubCategoryRequest}
          >
            Sub Category Request
          </button>
          {showSubCategoryForm && (
            <form className="mt-4" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Select Category
                </label>
                <select
                  className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                >
                  <option value="">Select a category</option>
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Sub Category
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={subCategory}
                  onChange={handleSubCategoryChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Sub Category Descripton
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={subCategoryRequest}
                  onChange={handleSubCategoryRequestChange}
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Submit Request
              </button>
            </form>
          )}
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};
