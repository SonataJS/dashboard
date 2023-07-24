import { Component, Show, createEffect, createSignal } from "solid-js";
import Header from "../components/Header";
import Card from "../components/Card";
import { useNavigate, useParams } from "@solidjs/router";
import TextField from "../components/TextField";
import Checkbox from "../components/Checkbox";
import Select, { SelectItem } from "../components/Select";
import { ProjectEntity, ProjectSecurity, createProjectField, project, setProject } from "../store/ProjectStore";
import FieldsTable from "../components/FieldsTable";

const Entity: Component = () => {
  const navigate = useNavigate();

  const params = useParams();

  const [deleteIdx, setDeleteIdx] = createSignal<number>(-1);

  let deleteModal: HTMLDialogElement | undefined;

  const entity = (): ProjectEntity => {
    const idx = +params.idx;
    return project.data[idx];
  }

  const security = (): SelectItem[] => {
    return [
      {
        id: 'none',
        title: 'None',
      },
      {
        id: '!authenticated',
        title: 'Authenticated',
      },
      ...project.data[+params.idx].fields.map(f => {
        return {
          id: `auth.users-id;public.${project.data[+params.idx].id}-${f.id}`,
          title: `${project.data[+params.idx].id}.${f.id}`,
        };
      }),
    ];
  }

  const onFieldChange = (key: keyof ProjectEntity, value: string | boolean) => {
    const idx = +params.idx;
    setProject('data', idx, key, value);
  }

  const onSecurityChange = (key: keyof ProjectSecurity, value: string) => {
    const idx = +params.idx;
    setProject('data', idx, 'security', key, value);
  }

  const onNew = () => {
    const idx = +params.idx;
    const fIdx = project.data[idx].fields.length;
    setProject('data', idx, 'fields', [...project.data[idx].fields, createProjectField()]);
    navigate(`/project/entity/${idx}/field/${fIdx}`);
  }

  const onEdit = (fIdx: number) => {
    const idx = +params.idx;
    navigate(`/project/entity/${idx}/field/${fIdx}`);
  }

  const onDelete = (fIdx: number) => {
    if (!deleteModal) {
      return;
    }

    setDeleteIdx(fIdx);
    deleteModal.show();
  }

  const deleteField = () => {
    const idx = +params.idx;
    setProject('data', idx, 'fields', project.data[idx].fields.filter((_, idx) => idx !== deleteIdx()));
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
                  items={security()}
                  value={entity().security ? entity().security?.select as string : 'none'}
                  onChange={(val: string) => onSecurityChange('select', val)} />
                <Select
                  label="Insert"
                  items={security()}
                  value={entity().security ? entity().security?.insert as string : 'none'}
                  onChange={(val: string) => onSecurityChange('insert', val)} />
                <Select
                  label="Update"
                  items={security()}
                  value={entity().security ? entity().security?.update as string : 'none'}
                  onChange={(val: string) => onSecurityChange('update', val)} />
                <Select
                  label="Delete"
                  items={security()}
                  value={entity().security ? entity().security?.delete as string : 'none'}
                  onChange={(val: string) => onSecurityChange('delete', val)} />
              </div>
            </div>
          </Show>
        </Card>
        <Card title="Fields">
          <button class="btn btn-accent" onClick={onNew}>New Field</button>
          <FieldsTable
            data={entity().fields}
            onEdit={onEdit}
            onDelete={onDelete} />
        </Card>

        <dialog ref={deleteModal} class="modal">
          <form method="dialog" class="modal-box">
            <h3 class="font-bold text-lg">Delete!</h3>
            <p class="py-4">Are you sure you want to delete entity?</p>
            <div class="modal-action">
              <button class="btn btn-outline btn-error" onClick={deleteField}>Yes</button>
              <button class="btn btn-outline btn-success">No</button>
            </div>
          </form>
        </dialog>
      </div>
    </>
  );
}

export default Entity;
