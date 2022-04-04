# StorybookSortRepro

This is an example of [Storybook issue 17665](https://github.com/storybookjs/storybook/issues/17665).

Stories are not sorted according to their export order. Instead, they are sorted alphabetically. This behavior occurs in both local and production.

[#15574](https://github.com/storybookjs/storybook/issues/15574) describes a similar issue: stories were sorted in export order locally but alphabetical order in production. A fix was released 6.4.0, and now stories are sorted in alphabetical order in both local and production. Expected behavior: stories should be sorted in export order in local and production. I'm still experiencing this issue in 6.5.0-alpha.55.

## To reproduce

Run `yarn storybook` to start Storybook in dev mode, or run `yarn build-storybook && npx serve storybook-static`. In either cases, stories appear in alphabetical order (Story A, Story B, Story C). This behavior appears to be a bug.
