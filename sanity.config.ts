import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import project from './sanity/schemas/project-schemas';
import schemas from './sanity/schemas';

const config = defineConfig({
  projectId: "ud6kok3q",
  dataset: "production",
  title: "My Personal Website",
  apiVersion: "2023-07-07",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas }
})


export default config;