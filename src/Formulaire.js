import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from './api';  // Importation de l'API
import './Formulaire.css';

const Formulaire = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [checklistTitle, setChecklistTitle] = useState('');
  const [tasks, setTasks] = useState(['', '', '']);
  const [workflow, setWorkflow] = useState(['', '', '']);

  const handleNextStep = async () => {
    if (step === 3) {
      const newChecklist = {
        title: checklistTitle,
        description: workflow.join(', '),
        todo: tasks.map((task) => ({ title: task, description: '' })),
      };

      try {
        await api.post('/checklist/add', newChecklist); // Envoie la checklist via l'API
        alert('Checklist saved!');
        navigate('/'); // Redirige vers le Dashboard
      } catch (error) {
        console.error('Error adding checklist:', error);
        alert('Error saving checklist');
      }
    } else {
      setStep(step + 1);
    }
  };

  const handleChange = (index, value) => {
    if (step === 1) {
      setChecklistTitle(value);
    } else if (step === 2) {
      const newTasks = [...tasks];
      newTasks[index] = value;
      setTasks(newTasks);
    } else if (step === 3) {
      const newWorkflow = [...workflow];
      newWorkflow[index] = value;
      setWorkflow(newWorkflow);
    }
  };

  return (
    <div className="form-container">
      <header className="header">
        <div className="logo">✈️</div>
        <h1>FORMS</h1>
      </header>

      <div className="back-section">
        <button className="back-btn" onClick={() => navigate('/')}>⬅ Back to Dashboard</button>
      </div>

      <div className="progress-bar">
        <div className="progress" style={{ width: `${(step - 1) * 33}%` }}></div>
      </div>

      <form className="form-steps">
        {step === 1 && (
          <div className="form-step active">
            <h2>Create your first checklist</h2>
            <p>What task do you want to accomplish?</p>
            <input
              type="text"
              placeholder="EX: NEW PROJECT"
              value={checklistTitle}
              onChange={(e) => handleChange(0, e.target.value)}
            />
            <button type="button" className="btn" onClick={handleNextStep}>Next</button>
          </div>
        )}

        {step === 2 && (
          <div className="form-step">
            <h2>The tasks to be carried out as part of the project</h2>
            <p>Add tasks below:</p>
            {tasks.map((task, index) => (
              <input
                key={index}
                type="text"
                placeholder={`EX: TASK ${index + 1}`}
                value={task}
                onChange={(e) => handleChange(index, e.target.value)}
              />
            ))}
            <button type="button" className="btn" onClick={handleNextStep}>Next</button>
          </div>
        )}

        {step === 3 && (
          <div className="form-step">
            <h2>What steps do you want to use to group tasks?</h2>
            <p>Define your workflow:</p>
            {workflow.map((step, index) => (
              <input
                key={index}
                type="text"
                placeholder={['TO DO', 'IN PROGRESS', 'FINISHED'][index]}
                value={step}
                onChange={(e) => handleChange(index, e.target.value)}
              />
            ))}
            <button type="button" className="btn save-btn" onClick={handleNextStep}>Sauvegarder</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Formulaire;
