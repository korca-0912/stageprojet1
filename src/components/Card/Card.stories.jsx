import React from 'react';
import { Card } from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    onClick: { action: 'clicked' },
    level: {
      control: { type: 'select' },
      options: ['Débutant', 'Intermédiaire', 'Avancé'],
    },
  },
};

const Template = (args) => (
  <div style={{ maxWidth: '320px', margin: '20px' }}>
    <Card {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Introduction à React',
  description: 'Apprenez les bases de React pour créer des applications modernes.',
  imageUrl: 'https://via.placeholder.com/400x200?text=React+Cours',
  duration: '6 heures',
  level: 'Débutant',
};

export const WithProgress = Template.bind({});
WithProgress.args = {
  ...Default.args,
  progress: 65,
  isEnrolled: true,
  badgeText: 'En cours',
};

export const AdvancedCourse = Template.bind({});
AdvancedCourse.args = {
  title: 'React Avancé',
  description: 'Maîtrisez les concepts avancés de React et les bonnes pratiques.',
  imageUrl: 'https://via.placeholder.com/400x200?text=React+Avancé',
  duration: '10 heures',
  level: 'Avancé',
  actionText: 'Commencer',
};

export const CompletedCourse = Template.bind({});
CompletedCourse.args = {
  ...Default.args,
  progress: 100,
  badgeText: 'Terminé',
  isEnrolled: true,
};

export const WithoutImage = Template.bind({});
WithoutImage.args = {
  title: 'JavaScript Fondamentaux',
  description: 'Apprenez les bases du JavaScript moderne.',
  duration: '8 heures',
  level: 'Débutant',
};