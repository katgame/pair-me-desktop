import { dev } from "./environment.dev";

export const environment = {
  // Pull in repo-level environment variables
  ...dev,
};