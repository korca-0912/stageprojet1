import React from 'react';
import ProgressBar from './ProgressBar';

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    progress: {
      control: { 
        type: 'range',
        min: 0,
        max: 100,
        step: 1
      }
    },
    color: {
      control: 'color',
      description: 'Couleur de la barre de progression'
    },
    height: {
      control: { 
        type: 'range',
        min: 4,
        max: 24,
        step: 2
      }
    },
    label: {
      control: 'text'
    },
    showPercentage: {
      control: 'boolean'
    }
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px', padding: '20px' }}>
        <Story />
      </div>
    )
  ]
};

const Template = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  progress: 65,
  label: 'Progression du cours',
  color: '#4a6bdf',
  height: 12,
  showPercentage: true
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  progress: 30,
  showPercentage: true,
  color: '#38a169'
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  progress: 80,
  label: 'Avancement du projet',
  color: '#805ad5',  // Couleur violette
  height: 16
};

export const ThinBar = Template.bind({});
ThinBar.args = {
  progress: 45,
  label: 'Barre fine',
  height: 4
};

export const ThickBar = Template.bind({});
ThickBar.args = {
  progress: 90,
  label: 'Barre épaisse',
  height: 24
};