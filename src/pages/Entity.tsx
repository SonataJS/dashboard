import { Component, Show, createEffect } from "solid-js";
import Header from "../components/Header";
import Card from "../components/Card";
import { useParams } from "@solidjs/router";
import TextField from "../components/TextField";
import Checkbox from "../components/Checkbox";
import Select from "../components/Select";
import { project } from "../store/ProjectStore";

const Entity: Component = () => {
  const params = useParams();

  createEffect(() => {
    console.log(params.id);
  });

  return (
    <>
      <div class="h-screen w-full bg-base-200">
        <Header />
        <Card title="Entity">
          <TextField
            label="Id"
            placeholder="Id"
            value="" />
          <TextField
            label="Title"
            placeholder="Title"
            value="" />
          <Checkbox
            toggle
            label="Row level security"
            value={false} />

          <Show when={true}>
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
      </div>
    </>
  );
}

export default Entity;
