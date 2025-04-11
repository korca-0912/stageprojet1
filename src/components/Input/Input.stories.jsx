import React from 'react';
import { Input } from './Input';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
    },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    success: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    required: { control: 'boolean' },
  },
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Nom d\'utilisateur',
  placeholder: 'Entrez votre nom',
};

export const EmailInput = Template.bind({});
EmailInput.args = {
  label: 'Adresse email',
  placeholder: 'exemple@email.com',
  type: 'email',
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  label: 'Mot de passe',
  type: 'password',
  placeholder: 'Entrez votre mot de passe',
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  label: 'Champ avec erreur',
  error: true,
  errorMessage: 'Ce champ est obligatoire',
};

export const SuccessState = Template.bind({});
SuccessState.args = {
  label: 'Champ validé',
  success: true,
  value: 'Valeur correcte',
};