import { Component, Show, createEffect } from "solid-js";
import Header from "../components/Header";
import Card from "../components/Card";
import { useParams } from "@solidjs/router";
import TextField from "../components/TextField";
import Checkbox from "../components/Checkbox";
import Select from "../components/Select";
import { ProjectEntity, project, setProject } from "../store/ProjectStore";

const Entity: Component = () => {
  const params = useParams();

  const entity = (): ProjectEntity => {
    const idx = +params.idx;
    return project.data[idx];
  }

  setTimeout(() => {
    setProject('data', 1, 'id', 'test');
  }, 3000);

  const onFieldChange = (key: keyof ProjectEntity, value: string | boolean) => {
    const idx = +params.idx;
    setProject('data', idx, key, value);
  }

  return (
    <>
      <div class="h-screen w-full bg-base-200">
        <Header />
        <Card title="Entity">
          <TextField
            label="Id"
            placeholder="Id"
            value={entity().id}
            onChange={(val: string) => onFieldChange('id', val)} />
          <TextField
            label="Title"
            placeholder="Title"
            value={entity().title}
            onChange={(val: string) => onFieldChange('title', val)} />
          <Checkbox
            toggle
            label="Row level security"
            value={entity().row_level_security ? true : false}
            onChange={(val: boolean) => onFieldChange('row_level_security', val)} />

          <Show when={entity().row_level_security ? true : false}>
            <div class="card bg-neutral shadow-xl w-full w-max-xs">
              <div class="card-body">
                <Select
                  label="Select"
                  items={[]}
                  value="" />
                <Select
                  label="Insert"
                  items={[]}
                  value="" />
                <Select
                  label="Update"
                  items={[]}
                  value="" />
                <Select
                  label="Delete"
                  items={[]}
                  value="" />
              </div>
            </div>
          </Show>
        </Card>
        <Card title="Fields">
        </Card>
      </div>
    </>
  );
}

export default Entity;
