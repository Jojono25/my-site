import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

const config = defineConfig({
  projectId: "ud6kok3q",
  dataset: "production",
  title: "My Personal Website",
  apiVersion: "2023-07-07",
  basePath: "/admin",
  plugins: [deskTool()]
})


export default config;