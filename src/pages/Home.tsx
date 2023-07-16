import { Component } from "solid-js";
import logo from '../logo.svg';

const Home: Component = () => {
  return (
    <div class="grid h-screen place-items-center items-center">
      <div class="flex flex-col w-full lg:flex-row place-content-center">
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure><img src={logo} alt="Shoes" /></figure>
          <div class="card-body">
            <h2 class="card-title">Create Project!</h2>
            <p>Create new SonataJS project?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Create Project</button>
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
              <button class="btn btn-primary">Open Project</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
