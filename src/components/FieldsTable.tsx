import { Accessor, Component, For } from "solid-js";
import { ProjectField } from "../store/ProjectStore";

type Props = {
  data: ProjectField[],
  onEdit?: (idx: number) => void,
  onDelete?: (idx: number) => void,
}

const FieldsTable: Component<Props> = (props) => {
  const onEdit = (idx: number) => {
    if (!props.onEdit) {
      return;
    }

    props.onEdit(idx);
  }

  const onDelete = (idx: number) => {
    if (!props.onEdit) {
      return;
    }

    props.onEdit(idx);
  }

  return (
    <div class="overflow-x-auto">
      <table class="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Type</th>
            <th>Title</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <For each={props.data}>
            {(item: ProjectField, idx: Accessor<number>) => {
              return (
                <tr class="hover">
                  <td>{item.id}</td>
                  <td>{item.type}</td>
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

export default FieldsTable;
