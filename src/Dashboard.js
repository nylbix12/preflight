import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import api,{deleteChecklist} from "./api";

const DashboardContainer = styled.div`
  background-color: #f9f9f9;
  min-height: 100vh;
  font-family: Arial, sans-serif;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background-color: #004a91;
  color: white;
`;

const Logo = styled.img`
  height: 40px;
  margin-right: 10px;
`;

const Title = styled.h1`
  font-size: 1.5rem;
`;

const Controls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const ChecklistContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const ChecklistCard = styled.div`
  background-color: #e0e0e0;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

const ChecklistHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const ChecklistTitle = styled.div`
  background-color: #ffd54f;
  padding: 5px 10px;
  font-weight: bold;
  border-radius: 5px;
`;

const StatusBadge = styled.div`
  font-size: 14px;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 12px;
  color: white;
  text-align: center;
  margin-bottom: 10px;

  background-color: ${({ status }) =>
    status === "À FAIRE" ? "#f44336" : status === "EN COURS" ? "#ff9800" : "#4caf50"};
`;

const TaskInfo = styled.div`
  font-size: 14px;
  color: #333;
  margin: 10px 0;
  text-align: center;
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const ActionButton = styled.button`
  background-color: ${({ variant }) => (variant === "delete" ? "#ff4b5c" : "#004a91")};
  color: white;
  border: none;
  padding: 8px 10px;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ variant }) => (variant === "delete" ? "#e63946" : "#003166")};
  }
`;

const Dashboard = () => {
  const navigate = useNavigate();
  const [checklists, setChecklists] = useState([]);

  useEffect(() => {
    // Récupérer toutes les checklists via l'API
    const fetchChecklists = async () => {
      try {
        const response = await api.get("/checklists");
        setChecklists(response.data.response);
      } catch (error) {
        console.error("Error fetching checklists:", error);
      }
    };

    fetchChecklists();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Voulez-vous vraiment supprimer cette checklist ?")) {
      try {
        await deleteChecklist(id); // Appel à l'API
        setChecklists(checklists.filter((checklist) => checklist.id !== id)); // Mise à jour locale
      } catch (error) {
        alert("La suppression a échoué. Veuillez réessayer.");
      }
    }
  };
  

  const handleEdit = (id) => {
    navigate(`/checklist/${id}`);
  };

  return (
    <DashboardContainer>
      <Header>
        <Logo src="preflight.png" alt="Logo" />
        <Title>Dashboard</Title>
      </Header>
      <main>
        <Controls>
          <Link to="/formulaire">
            <ActionButton>➕ New Checklist</ActionButton>
          </Link>
        </Controls>
        <ChecklistContainer>
          {checklists.map((checklist) => (
            <ChecklistCard key={checklist.id}>
              <ChecklistHeader>
                <ChecklistTitle>{checklist.title}</ChecklistTitle>
              </ChecklistHeader>
              <StatusBadge status={checklist.status}>{checklist.status}</StatusBadge>
              <TaskInfo>
                {checklist.tasksCompleted}/{checklist.totalTasks} tasks accomplished
              </TaskInfo>
              <Actions>
                <ActionButton onClick={() => handleEdit(checklist.id)}>EDIT</ActionButton>
                <ActionButton
                  variant="delete"
                  onClick={() => handleDelete(checklist.id)}
                >
                  DELETE
                </ActionButton>
              </Actions>
            </ChecklistCard>
          ))}
        </ChecklistContainer>
      </main>
    </DashboardContainer>
  );
};

export default Dashboard;
