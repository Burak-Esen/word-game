import { ComponentMeta, ComponentStory } from '@storybook/react';

import { LoginForm } from '../views/LoginForm';


export default {
  title: 'Example/LoginForm',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = () => <LoginForm />;

export const Primary = Template.bind({});

