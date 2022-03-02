# StorybookSortRepro

In production, stories are not sorted according to their export instead, they are sorted alphabetically. [#15574](https://github.com/storybookjs/storybook/issues/15574) describes similar behavior. A fix was released in 6.4.0, but I'm still experiencing this issue in 6.5.0-alpha.45.

## To reproduce

Run `yarn storybook` to start Storybook in dev mode. Stories appear in export order (Story C, Story B, Story A). This is the expected behavior.

Running `yarn build-storybook && npx serve` to start Storybook in production mode. Shows appear in sorted in alphabetical order (Story A, Story B, Story C). This behavior appears to be a bug.