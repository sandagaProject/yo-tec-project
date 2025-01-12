import type { Meta, StoryObj } from '@storybook/react';
import AboutUs from '../components/AboutUs';

const meta: Meta<typeof AboutUs> = {
  title: 'Components/AboutUs',
  component: AboutUs,
};

export default meta;
type Story = StoryObj<typeof AboutUs>;

export const Default: Story = {};

