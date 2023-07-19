import { Component, JSX } from "solid-js"

type Props = {
  label: string,
  value: boolean,
  onChange?: (value: boolean) => void,
  toggle?: boolean,
}

const Checkbox: Component<Props> = (props) => {
  const onChange: JSX.EventHandler<HTMLInputElement, Event> = (event) => {
    if (!props.onChange) {
      return;
    }

    props.onChange(event.currentTarget.checked);
  }

  return (
    <div class="form-control w-full max-w-xs">
      <label class="label cursor-pointer">
        <span class="label-text">{props.label}</span>
        <input
          type="checkbox"
          checked={props.value}
          class={props.toggle ? "toggle" : "checkbox"}
          onChange={onChange} />
      </label>
    </div>
  );
}

export default Checkbox;
