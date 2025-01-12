import type { Meta, StoryObj } from '@storybook/react';
import Contact from '../components/Contact';

const meta: Meta<typeof Contact> = {
  title: 'Components/Contact',
  component: Contact,
};

export default meta;
type Story = StoryObj<typeof Contact>;

export const Default: Story = {};

