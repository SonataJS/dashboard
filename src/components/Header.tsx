import { useNavigate } from "@solidjs/router";
import { Component } from "solid-js";
import { project } from "../store/ProjectStore";

const Header: Component = () => {
  const navigate = useNavigate();

  const exportJson = () => {
    const json = JSON.stringify(project, undefined, 2);
    if (!json) {
      return;
    }

    const blob = new Blob([json], { type: 'application/jsojn' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'sonata.json';
    document.body.append(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  return (
    <div class="navbar bg-base-100">
      <div class="flex-none">
        <button class="btn btn-square btn-ghost" onClick={() => navigate(-1)}>
          <svg class="w-6 h-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13" />
          </svg>
        </button>
      </div>
      <div class="flex-1">
        <button class="btn btn-ghost normal-case text-xl" onClick={() => navigate('/')}>SonataJS</button>
      </div>
      <div class="flex-none">
        <button class="btn btn-ghost" onClick={exportJson}>
          <svg class="w-6 h-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
            <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Header;
