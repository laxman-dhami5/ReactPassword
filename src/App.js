import React, { useState } from 'react';
import Modal from './Components/Modal';


function App() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState([]);
  const [editData, setEditData] = useState(null); // State to hold data for editing

  const onSubmitHandler = (data) => {
    if (editData) {
      // If editData exists, update it
      const updatedData = formData.map(item => {
        if (item.id === editData.id) {
          return { ...item, ...data };
        } else {
          return item;
        }
      });
      
      setFormData(updatedData);
      setEditData(''); // Reset editData after editing
    } else {
      // If editData is null, add new data
      const newData = {
        ...data,
        id: Math.random().toString()
      };
      setFormData((prevData) => [...prevData, newData]);
    }
    setShowModal(false);
  };

  const closeModalHandler = () => {
    setShowModal(false);
    setEditData(null); // Clear edit data when closing modal
  };

  const onDeleteHandler = (id) => {
    setFormData((prevData) => prevData.filter((item) => item.id !== id));
  };

  const onEditHandler = (id) => {
    const editData = formData.find((item) => item.id === id);
    // Set the edit data in the state for editing
    setEditData(editData);
    setShowModal(true);
  };

  return (
    <div>
      <h2>Password Saver</h2>
      <h3>Total Passwords: {formData.length}</h3>
      <label htmlFor="search">Search:</label>
      <input type="search"  /><br /><br />
      <button type="button" onClick={() => setShowModal(true)}>Add New Password</button>
      {showModal && <Modal onSubmit={onSubmitHandler} onClose={closeModalHandler} editData={editData} />} {/* Pass editData to modal */}
      {formData.length > 0 && (
        <div>
          
          <ul>
            {formData.map((data) => (
              <li key={data.id} className="formDataDisplay">
                <p>Title: {data.title}</p>
                <p>Password: {data.password}</p>
                <button type="button" onClick={() => onDeleteHandler(data.id)}>Delete</button>
                <button type="button" onClick={() => onEditHandler(data.id)}>Edit</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
