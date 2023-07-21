import { Accessor, Component, For } from "solid-js";
import { ProjectEntity } from "../store/ProjectStore";

type Props = {
  data: ProjectEntity[],
  onEdit?: (idx: number) => void,
  onDelete?: (idx: number) => void,
}

const EntitiesTable: Component<Props> = (props) => {
  const onEdit = (idx: number) => {
    if (!props.onEdit) {
      return;
    }

    props.onEdit(idx);
  }

  const onDelete = (idx: number) => {
    if (!props.onDelete) {
      return;
    }

    props.onDelete(idx);
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
            {(item: ProjectEntity, idx: Accessor<number>) => {
              return (
                <tr class="hover">
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>
                    <button class="btn btn-outline btn-accent" onClick={() => onEdit(idx())}>Edit</button>
                    &nbsp;
                    &nbsp;
                    <button class="btn btn-outline btn-error" onClick={() => onDelete(idx())}>Delete</button>
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

export default EntitiesTable;
