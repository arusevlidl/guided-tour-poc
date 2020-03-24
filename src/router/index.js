import Main from "../components/Main";
import Todo from "../components/Todo";

export const routes = [
  { path: "/", component: Main, name: "home" },
  { path: "/todo/:id", component: Todo, name: "todo" }
];
