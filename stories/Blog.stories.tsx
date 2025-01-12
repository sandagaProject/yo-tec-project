import type { Meta, StoryObj } from '@storybook/react';
import Blog from '../components/Blog';

const meta: Meta<typeof Blog> = {
  title: 'Components/Blog',
  component: Blog,
};

export default meta;
type Story = StoryObj<typeof Blog>;

export const Default: Story = {};

