import React from "react";
import Header from "../component/Header";
import Latest from "./Latest";
import Navbar from "./Navbar";
import Leftaside from "../component/Homelayout/Leftaside";
import { Outlet } from "react-router";
import Rightaside from "../component/Homelayout/Rightaside";

const HomeLayout = () => {
  return (
    <div className="py-5 px-10">
      <header>
        <Header></Header>
      </header>

      <section className="mt-3">
        <Latest></Latest>
      </section>

      <section className="mt-5">
        <Navbar></Navbar>
      </section>

      <main className="grid grid-cols-12 mt-5 gap-5">
        <aside className="col-span-3 sticky h-fit top-2">
          <Leftaside />
        </aside>
        <section className="col-span-6 ">
          <Outlet />
        </section>
        <aside className="col-span-3 sticky top-2 h-screen overflow-y-auto scrollbar-none">
          <Rightaside />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;