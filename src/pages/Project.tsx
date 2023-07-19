import { Component } from "solid-js";
import Header from "../components/Header";
import Card from "../components/Card";
import Select, { SelectItem } from "../components/Select";
import { Project, project, setProject } from "../store/ProjectStore";
import EntitiesTale from "../components/EntitiesTable";
import { useNavigate } from "@solidjs/router";

const ProjectPage: Component = () => {
  const navigate = useNavigate();

  const backendItems: SelectItem[] = [
    {
      id: '',
      title: 'None',
    },
    {
      id: 'supabase',
      title: 'Supabase',
    },
  ];

  const frontendItems: SelectItem[] = [
    {
      id: '',
      title: 'None',
    },
    {
      id: 'solidjs_daisyui',
      title: 'SolidJS + daisyUI',
    },
  ];

  const onProjectChange = (key: keyof Project, value: string) => {
    setProject(key, value);
  }

  const onNew = () => {
    navigate('/project/entity');
  }

  const onEdit = (id: string) => {
    navigate(`/project/entity/${id}`);
  }

  const onDelete = (id: string) => {
  }

  return (
    <div class="h-screen w-full bg-base-200">
      <Header />
      <Card title="Project">
        <Select
          label="Backend:"
          items={backendItems}
          value={project.backend}
          onChange={(val) => onProjectChange('backend', val)} />
        <Select
          label="Frontend:"
          items={frontendItems}
          value={project.frontend}
          onChange={(val) => onProjectChange('frontend', val)} />
      </Card>
      <Card title="Entities">
        <button class="btn btn-accent" onClick={onNew}>New Entity</button>
        <EntitiesTale
          data={project.data}
          onEdit={onEdit}
          onDelete={onDelete} />
      </Card>
    </div>
  );
}

export default ProjectPage;
