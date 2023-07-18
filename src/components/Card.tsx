import { Component, JSXElement, ParentProps } from "solid-js";

type Props = {
  title: string,
  children: JSXElement,
};

const Card: Component<Props> = (props) => {
  return (
    <div class="card bg-base-100 shadow-xl m-5">
      <div class="card-body w-full">
        <h2 class="card-title">{props.title}</h2>
        {props.children}
      </div>
    </div>
  );
}

export default Card;
