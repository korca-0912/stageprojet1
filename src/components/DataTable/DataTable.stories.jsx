import React from 'react';
import DataTable from './DataTable';
import { FiBook, FiUser, FiClock, FiCheckCircle } from 'react-icons/fi';

export default {
  title: 'Components/DataTable',
  component: DataTable,
  parameters: {
    layout: 'centered',
  },
};

const courses = [
  { id: 1, title: 'Introduction à React', instructeur: 'Mr diop', durée : '6h', terminé: true },
  { id: 2, title: 'JavaScript Avancé', instructeur: 'Mr diop', durée : '8h', terminé: false },
  { id: 3, title: 'CSS Moderne', instructeur: 'Mr diop', durée : '4h', terminé: true },
  { id: 4, title: 'Node.js Fondamentaux', instructeur: 'Mr diop', durée : '10h', terminé: false },
  { id: 5, title: 'Base de données SQL', instructeur: 'Mr diop', durée : '7h', terminé: false },
];

const studentProgress = [
  { id: 1, étudiant: 'Alice Dupont', progression: 75, dernieraccès: '2023-05-15' },
  { id: 2, étudiant: 'Bob Martin', progression: 42, dernieraccès: '2023-05-10' },
  { id: 3, étudiant: 'Charlie Durand', progression: 90, dernieraccès: '2023-05-18' },
  { id: 4, étudiant: 'Diana Lambert', progression: 100, dernieraccès: '2023-05-20' },
  { id: 5, étudiant: 'Eve Leroy', progression: 30, dernieraccès: '2023-05-05' },
];

const Template = (args) => <DataTable {...args} />;

export const CourseList = Template.bind({});
CourseList.args = {
  columns: [
    { 
      key: 'title', 
      header: 'Cours',
      render: (value) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <FiBook /> {value}
        </div>
      )
    },
    { key: 'instructeur', header: 'Instructeur' },
    { 
      key: 'duree', 
      header: 'Durée',
      render: (value) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <FiClock /> {value}
        </div>
      )
    },
    { 
      key: 'complet', 
      header: 'Terminé',
      render: (value) => (
        value ? <FiCheckCircle color="#38a169" /> : 'En cours'
      )
    },
  ],
  data: courses,
  onRowClick: (row) => console.log('Cours sélectionné:', row.title),
};

export const EtudiantProgression = Template.bind({});
EtudiantProgression.args = {
  columns: [
    { key: 'etudiant', header: 'Étudiant' },
    { 
      key: 'progression', 
      header: 'Progression',
      render: (value) => (
        <div style={{ 
          width: '100%',
          backgroundColor: '#edf2f7',
          borderRadius: '4px'
        }}>
          <div 
            style={{ 
              width: `${value}%`,
              height: '8px',
              backgroundColor: '#4a6bdf',
              borderRadius: '4px'
            }}
          />
          <span style={{ fontSize: '0.8rem', marginLeft: '8px' }}>{value}%</span>
        </div>
      )
    },
    { key: 'dernierAccess', header: 'Dernier accès' },
  ],
  data: EtudiantProgression,
  selectable: true,
  pageSize: 3,
};

export const SortableTable = Template.bind({});
SortableTable.args = {
  columns: [
    { key: 'titre', header: 'Cours', sortable: true },
    { key: 'instructeur', header: 'Instructeur', sortable: true },
    { key: 'duree', header: 'Durée', sortable: true },
  ],
  data: [...courses, 
    { id: 6, titre: 'Algorithmes', instructeur: 'Mr ba', duration: '12h' },
    { id: 7, titre: 'UI/UX Design', instructeur: 'Mr sall', duration: '5h' },
  ],
  sortable: true,
};

export const CompactTable = Template.bind({});
CompactTable.args = {
  columns: [
    { key: 'titre', header: 'Cours' },
    { key: 'instructeur', header: 'Instructeur' },
  ],
  data: courses,
  pageSize: 5,
  className: 'compact-table',
};