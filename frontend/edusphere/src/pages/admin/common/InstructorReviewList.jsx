import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InstructorDetailsModal from './InstructorDetailsModal';

const InstructorReviewList = () => {
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedInstructor, setSelectedInstructor] = useState(null);

  useEffect(() => {
    const fetchInstructors = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/admin_api/new_instructors/');
        if (response.ok) {
          const data = await response.json();
          setInstructors(data);
        } else {
          toast.error('Failed to fetch instructors');
        }
      } catch (error) {
        toast.error('Error fetching instructors');
        console.error('Error fetching instructors:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchInstructors();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="w-full max-w-5xl p-8 bg-white rounded shadow-md">
      <h1 className="text-2xl font-bold text-blue-500 mb-4">Instructor Review List</h1>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="border-b-2 p-4">ID</th>
            <th className="border-b-2 p-4">Name</th>
            <th className="border-b-2 p-4">Email</th>
            <th className="border-b-2 p-4">Action</th>
            <th className="border-b-2 p-4">View</th>
          </tr>
        </thead>
        <tbody>
          {instructors.map((instructor) => (
            <tr key={instructor.id}>
              <td className="border-b p-4">{instructor.id}</td>
              <td className="border-b p-4">{instructor.user.username}</td>
              <td className="border-b p-4">{instructor.user.email}</td>
              <td className="border-b p-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Action
                </button>
              </td>
              <td className="border-b p-4">
                <button
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                  onClick={() => setSelectedInstructor(instructor)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ToastContainer />
      {selectedInstructor && (
        <InstructorDetailsModal
          instructor={selectedInstructor}
          onClose={() => setSelectedInstructor(null)}
        />
      )}
    </div>
  );
};

export default InstructorReviewList;
