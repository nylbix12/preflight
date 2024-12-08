import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "./api"; 
import "./Checklist.css";

const Checklist = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const [checklist, setChecklist] = useState({
    title: "",
    description: "",
    tasks: [],
  });

  useEffect(() => {
    const fetchChecklist = async () => {
      try {
        const response = await api.get(`/checklist/${id}`);
        setChecklist(response.data.response); 
      } catch (error) {
        console.error("Error fetching checklist:", error);
      }
    };

    fetchChecklist();
  }, [id]);

  const handleBackToDashboard = () => {
    navigate("/"); // Redirige vers le Dashboard
  };

  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <img src="pre-flight.png" alt="Logo" />
        </div>
        <h1 className="title">MY CHECKLISTS</h1>
      </header>

      <div className="toolbar">
        <button className="back-btn" onClick={handleBackToDashboard}>
          ←
        </button>
        <button className="dashboard-btn" onClick={handleBackToDashboard}>
          BACK TO DASHBOARD
        </button>
      </div>

      <div className="checklist-card">
        <div className="checklist-header">
          <input
            className="checklist-title"
            type="text"
            value={checklist.title}
            onChange={(e) => setChecklist({ ...checklist, title: e.target.value })}
            placeholder="Enter Title"
          />
          <textarea
            className="checklist-description"
            value={checklist.description}
            onChange={(e) => setChecklist({ ...checklist, description: e.target.value })}
            placeholder="Enter Description"
          />
        </div>

        <div className="checklist-items">
          {checklist.tasks.map((task, index) => (
            <div key={index} className="checklist-item">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => {} /*  */}
              />
              <input
                className="task-input"
                type="text"
                value={task.text}
                onChange={(e) => {} /*  */}
                placeholder="Enter Task"
              />
            </div>
          ))}
        </div>

        <div className="checklist-remember">
          <textarea
            className="remember-notes"
            rows="3"
            placeholder="Write notes here..."
          ></textarea>
        </div>

        <div className="actions">
          <button className="save-btn">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default Checklist;
