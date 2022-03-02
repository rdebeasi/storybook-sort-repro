// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import Button from './button.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<Button> = (args: Button) => ({
  props: args,
});

export const StoryC = Template.bind({});
StoryC.args = {
  size: 'large',
  label: 'Button',
};

export const StoryB = Template.bind({});
StoryB.args = {
  label: 'Button',
};

export const StoryA = Template.bind({});
StoryA.args = {
  primary: true,
  label: 'Button',
};

