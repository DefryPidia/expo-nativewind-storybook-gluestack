// Replace your-framework with the framework you are using, e.g. react-vite, nextjs, nextjs-vite, etc.
import type { Meta, StoryObj } from '@storybook/react-native-web-vite';

import NativeWind from "@/app/index";

const meta = {
  component: NativeWind,
} satisfies Meta<typeof NativeWind>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};