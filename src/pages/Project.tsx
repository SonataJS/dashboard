import { Component } from "solid-js";
import Header from "../components/Header";
import Card from "../components/Card";
import Select, { SelectItem } from "../components/Select";
import { Project, project, setProject } from "../store/ProjectStore";

const ProjectPage: Component = () => {
  const backendItems: SelectItem[] = [
    {
      id: 'supabase',
      title: 'Supabase',
    },
  ];

  const frontendItems: SelectItem[] = [
    {
      id: 'solidjs',
      title: 'SolidJS',
    },
  ];

  const uiItems: SelectItem[] = [
    {
      id: 'daisyui',
      title: 'daisyUI',
    },
  ]

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
          <Select
            label="UI:"
            items={uiItems}
            value={project.ui}
            onChange={(val) => onProjectChange('ui', val)} />
        </form>
      </Card>
      <Card title="Entries">
      </Card>
    </div>
  );
}

export default ProjectPage;
