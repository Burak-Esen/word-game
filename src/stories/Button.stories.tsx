import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from '../components/buttons/Button';


export default {
  title: 'Example/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = { children: 'asd' };

export const Rounded = Template.bind({});

Rounded.args = { children: 'asd', rounded: 'base', p: '5', bg: 'cyan.100' };
