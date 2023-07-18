import { Component } from "solid-js";
import logo from '../logo.svg';
import { useNavigate } from "@solidjs/router";
import { project, setProject, createNewProject, Project, parseProject } from "../store/ProjectStore";

const Home: Component = () => {
  const navigate = useNavigate();

  let fileInputRef: HTMLInputElement | undefined;

  const createProject = () => {
    setProject(createNewProject());
    navigate('/project');
  }

  const openProject = () => {
    if (!fileInputRef || !fileInputRef.files || !fileInputRef.files.length) {
      return;
    }

    const fileReader = new FileReader();
    fileReader.addEventListener('load', (event: ProgressEvent<FileReader>) => {
      if (!event.target) {
        return;
      }

      const data = event.target.result as string;
      const project = parseProject(data);
      setProject(project);
      navigate('/project');
    });
    fileReader.readAsText(fileInputRef.files[0]);

  }

  const openProjectFile = () => {
    if (!fileInputRef) {
      return;
    }

    fileInputRef.click();
  }

  return (
    <div class="grid h-screen place-items-center items-center bg-base-200">
      <input type="file" hidden ref={fileInputRef} accept="application/json" onChange={openProject} />

      <div class="flex flex-col w-full lg:flex-row place-content-center">
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure><img src={logo} alt="Shoes" /></figure>
          <div class="card-body">
            <h2 class="card-title">Create Project!</h2>
            <p>Create new SonataJS project?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary" onClick={createProject}>Create Project</button>
            </div>
          </div>
        </div>

        <div class="divider lg:divider-horizontal">OR</div>

        <div class="card w-96 bg-base-100 shadow-xl">
          <figure><img src={logo} alt="Shoes" /></figure>
          <div class="card-body">
            <h2 class="card-title">Open Project!</h2>
            <p>Open existing SonataJS project?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary" onClick={openProjectFile}>Open Project</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
