import { Component } from "solid-js";
import Header from "../components/Header";
import Card from "../components/Card";
import Select, { SelectItem } from "../components/Select";
import { Project, project, setProject } from "../store/ProjectStore";

const ProjectPage: Component = () => {
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

  return (
    <div class="h-screen w-full bg-base-200">
      <Header />
      <Card title="Project">
        <form>
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
        </form>
      </Card>
      <Card title="Entries">
      </Card>
    </div>
  );
}

export default ProjectPage;
