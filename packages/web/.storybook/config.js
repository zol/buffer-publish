import { configure } from '@storybook/react';

// automatically import all story.js files, excluding buffer components
const req = require.context('../', true, /^(?!.*@bufferapp\/*).*(story\.jsx)$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
