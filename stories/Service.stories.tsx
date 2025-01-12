import type { Meta, StoryObj } from '@storybook/react';
import Service from '../components/Service';

const meta: Meta<typeof Service> = {
  title: 'Components/Service',
  component: Service,
};

export default meta;
type Story = StoryObj<typeof Service>;

export const Default: Story = {};

