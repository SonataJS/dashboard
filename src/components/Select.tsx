import { Component, For, JSX } from "solid-js"

export type SelectItem = {
  id: string,
  title: string,
}

type Props = {
  label: string,
  items: SelectItem[],
  value: string,
  onChange?: (value: string) => void,
}

const Select: Component<Props> = (props) => {
  const onChange: JSX.EventHandler<HTMLSelectElement, Event> = (event) => {
    if (!props.onChange) {
      return;
    }

    props.onChange(event.currentTarget.value);
  }

  return (
    <div class="form-control w-full max-w-xs">
      <label for="backend" class="label">
        <span class="label-text">{props.label}</span>
      </label>
      <select id="backend" class="select select-bordered w-full max-w-xs" value={props.value} onChange={onChange}>
        <For each={props.items}>
          {(item) => {
            return <option value={item.id}>{item.title}</option>
          }}
        </For>
      </select>
    </div>
  );
}

export default Select;
