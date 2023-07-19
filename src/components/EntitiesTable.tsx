import { Component, For } from "solid-js";
import { ProjectEntity } from "../store/ProjectStore";

type Props = {
  data: ProjectEntity[],
  onEdit?: (id: string) => void,
  onDelete?: (id: string) => void,
}

const EntitiesTale: Component<Props> = (props) => {
  const onEdit = (id: string) => {
    if (!props.onEdit) {
      return;
    }

    props.onEdit(id);
  }

  const onDelete = (id: string) => {
    if (!props.onEdit) {
      return;
    }

    props.onEdit(id);
  }

  return (
    <div class="overflow-x-auto">
      <table class="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <For each={props.data}>
            {(item: ProjectEntity) => {
              return (
                <tr class="hover">
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>
                    <button class="btn btn-outline btn-accent" onClick={() => onEdit(item.id)}>Edit</button>
                    &nbsp;
                    &nbsp;
                    <button class="btn btn-outline btn-error" onClick={() => onDelete(item.id)}>Delete</button>
                  </td>
                </tr>
              );
            }}
          </For>
        </tbody>
      </table>
    </div>
  );
}

export default EntitiesTale;
