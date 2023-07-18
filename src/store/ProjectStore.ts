import { createStore } from 'solid-js/store';

export type ProjectSecurity = {
  select: string,
  insert: string,
  update: string,
  delete: string,
}

export type ProjectCascade = {
  update: boolean,
  delete: boolean,
}

export type ProjectField = {
  id: string,
  type: string,
  primary_key?: boolean,
  not_null?: boolean,
  default_value: string,
  title: string,
  relation?: string,
  cascade?: ProjectCascade,
  read_only?: boolean,
  hidden?: boolean,
}

export type ProjectEntity = {
  id: string,
  title: string,
  row_level_security?: boolean,
  security?: ProjectSecurity,
  fields: ProjectField[],
}

export type Project = {
  backend: string,
  frontend: string,
  ui: string,
  data: ProjectEntity[],
}

export const createNewProject = (): Project => {
  return {
    backend: 'supabase',
    frontend: 'solidjs',
    ui: 'daisyui',
    data: [],
  }
}

export const parseProject = (data: string): Project => {
  const json = JSON.parse(data);
  const project = json as Project;
  return project;
}

export const [project, setProject] = createStore<Project>(createNewProject());
