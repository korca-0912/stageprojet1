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
  { id: 1, title: 'Introduction à React', instructor: 'Jean Dupont', duration: '6h', completed: true },
  { id: 2, title: 'JavaScript Avancé', instructor: 'Marie Martin', duration: '8h', completed: false },
  { id: 3, title: 'CSS Moderne', instructor: 'Pierre Durand', duration: '4h', completed: true },
  { id: 4, title: 'Node.js Fondamentaux', instructor: 'Sophie Lambert', duration: '10h', completed: false },
  { id: 5, title: 'Base de données SQL', instructor: 'Thomas Leroy', duration: '7h', completed: false },
];

const studentProgress = [
  { id: 1, student: 'Alice Dupont', progress: 75, lastAccess: '2023-05-15' },
  { id: 2, student: 'Bob Martin', progress: 42, lastAccess: '2023-05-10' },
  { id: 3, student: 'Charlie Durand', progress: 90, lastAccess: '2023-05-18' },
  { id: 4, student: 'Diana Lambert', progress: 100, lastAccess: '2023-05-20' },
  { id: 5, student: 'Eve Leroy', progress: 30, lastAccess: '2023-05-05' },
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
    { key: 'instructor', header: 'Instructeur' },
    { 
      key: 'duration', 
      header: 'Durée',
      render: (value) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <FiClock /> {value}
        </div>
      )
    },
    { 
      key: 'completed', 
      header: 'Terminé',
      render: (value) => (
        value ? <FiCheckCircle color="#38a169" /> : 'En cours'
      )
    },
  ],
  data: courses,
  onRowClick: (row) => console.log('Cours sélectionné:', row.title),
};

export const StudentProgress = Template.bind({});
StudentProgress.args = {
  columns: [
    { key: 'student', header: 'Étudiant' },
    { 
      key: 'progress', 
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
    { key: 'lastAccess', header: 'Dernier accès' },
  ],
  data: studentProgress,
  selectable: true,
  pageSize: 3,
};

export const SortableTable = Template.bind({});
SortableTable.args = {
  columns: [
    { key: 'title', header: 'Cours', sortable: true },
    { key: 'instructor', header: 'Instructeur', sortable: true },
    { key: 'duration', header: 'Durée', sortable: true },
  ],
  data: [...courses, 
    { id: 6, title: 'Algorithmes', instructor: 'Paul Bernard', duration: '12h' },
    { id: 7, title: 'UI/UX Design', instructor: 'Laura Petit', duration: '5h' },
  ],
  sortable: true,
};

export const CompactTable = Template.bind({});
CompactTable.args = {
  columns: [
    { key: 'title', header: 'Cours' },
    { key: 'instructor', header: 'Instructeur' },
  ],
  data: courses,
  pageSize: 5,
  className: 'compact-table',
};