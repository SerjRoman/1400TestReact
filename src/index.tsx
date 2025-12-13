import { createRoot } from "react-dom/client";
import { App } from "./app/App";
// 1. Находим корневой HTML-элемент на странице.
// В стандартном файле public/index.html обычно есть пустой <div> с id="root".
// Именно в этот div React будет "встраивать" всё наше приложение.
// Мы используем Type Assertion (as HTMLElement), чтобы подсказать TypeScript,
// что мы уверены, что элемент с id="root" существует и является HTML-элементом.
const rootContainer = document.getElementById("root") as HTMLElement;

// 2. Создаем "корень" React-приложения.
// С помощью createRoot() мы говорим React, что rootContainer
// будет контейнером для нашего приложения.
const root = createRoot(rootContainer);

// root.render(App())
root.render(<App></App>);
