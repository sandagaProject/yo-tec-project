import type { Meta, StoryObj } from '@storybook/react';
import Works from '../components/Works';

const meta: Meta<typeof Works> = {
  title: 'Components/Works',
  component: Works,
};

export default meta;
type Story = StoryObj<typeof Works>;

export const Default: Story = {};

