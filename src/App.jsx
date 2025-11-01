import Counter from "./components/Counter";
import FormData from "./components/FormData";
import TodoList from "./components/TodoList";
import WeatherApp from "./components/WeatherApp";
import ThemeSwitcherApp from "./components/ThemeSwitcherApp";
import QrCodeApp from "./components/QrCodeApp";

export default function App() {
  return (
    <div>
      <header>
      <h1 className="text-center text-4xl text-gray-800 font-bold my-5">React Components Basic useState</h1>
      </header>
      <div className="grid grid-cols-4 gap-4 mx-10">
        <Counter />
        <FormData />
        <TodoList />
        <ThemeSwitcherApp />
        <WeatherApp />
        <QrCodeApp />
      </div>
    </div>
  );
}
