import React from 'react';
import { Navbar } from './Navbar';

export default {
  title: 'Components/Navbar',
  component: Navbar,
  argTypes: {
    onMenuItemClick: { action: 'clicked' },
  },
};

const Template = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  logo: '', // Remplacez par le chemin de votre logo
  title: 'E-Learning Pro',
  menuItems: [
    { label: 'Cours', path: '/courses' },
    { label: 'Progression', path: '/progress' },
    { label: 'Messagerie', path: '/messages' },
    { label: 'Calendrier', path: '/calendar' },
  ],
  userProfile: {
    name: 'Jean Dupont',
    avatar: '', // Remplacez par le chemin de l'avatar
  },
};

export const WithoutProfile = Template.bind({});
WithoutProfile.args = {
  ...Default.args,
  userProfile: null,
};

export const MobileView = Template.bind({});
MobileView.args = {
  ...Default.args,
  className: 'mobile-navbar',
};
MobileView.parameters = {
  viewport: {
    defaultViewport: 'mobile',
  },
};