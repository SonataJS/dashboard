import { Component, JSX } from "solid-js"

type Props = {
  label: string,
  placeholder: string,
  value: string,
  onChange?: (value: string) => void,
}

const TextField: Component<Props> = (props) => {
  const onChange: JSX.EventHandler<HTMLInputElement, Event> = (event) => {
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
      <input
        type="text"
        class="input input-bordered w-full"
        placeholder={props.placeholder}
        value={props.value}
        onInput={onChange} />
    </div>
  );
}

export default TextField;
