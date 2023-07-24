import { Component } from "solid-js";
import Header from "../components/Header";
import Card from "../components/Card";
import TextField from "../components/TextField";
import { ProjectField, project, setProject } from "../store/ProjectStore";
import { useParams } from "@solidjs/router";
import Checkbox from "../components/Checkbox";
import Select from "../components/Select";

const Field: Component = () => {
  const params = useParams();

  const field = (): ProjectField => {
    const idx = +params.idx;
    const fIdx = +params.fidx;
    return project.data[idx].fields[fIdx];
  }

  const onFieldChange = (field: keyof ProjectField, value: string | boolean) => {
    const idx = +params.idx;
    const fIdx = +params.fidx;
    setProject('data', idx, 'fields', fIdx, field, value);
  }

  return (
    <div class="h-screen w-full bg-base-200">
      <Header />
      <Card title="Field">
        <TextField
          label="Id"
          placeholder="Id"
          value={field().id}
          onChange={(val: string) => onFieldChange('id', val)} />
        <TextField
          label="Title"
          placeholder="Title"
          value={field().title}
          onChange={(val: string) => onFieldChange('title', val)} />
        <Select
          label="Type"
          items={[]}
          value="" />
        <Checkbox
          toggle
          label="Primary Key"
          value={field().primary_key ? true : false}
          onChange={(val: boolean) => onFieldChange('primary_key', val)} />
        <Checkbox
          toggle
          label="Not Null"
          value={field().not_null ? true : false}
          onChange={(val: boolean) => onFieldChange('not_null', val)} />
        <TextField
          label="Default Value"
          placeholder="Default Value"
          value={field().default_value}
          onChange={(val: string) => onFieldChange('default_value', val)} />
        <Select
          label="Relation"
          items={[]}
          value="" />
        <Checkbox
          toggle
          label="Read Only"
          value={field().read_only ? true : false}
          onChange={(val: boolean) => onFieldChange('read_only', val)} />
        <Checkbox
          toggle
          label="Hidden"
          value={field().hidden ? true : false}
          onChange={(val: boolean) => onFieldChange('hidden', val)} />
      </Card>
    </div>
  );
}

export default Field;
