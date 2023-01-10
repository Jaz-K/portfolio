import { createRoot } from "react-dom/client";
import App from "./App/app";

const root = createRoot(document.querySelector("main"));
root.render(<Portfolio />);

function Portfolio() {
    return <App />;
}
// fetch("/api/user/me")
//     .then((response) => response.json())
//     .then((data) => {
//         if (!data) {
//             console.log("Data", data);
//             root.render(<Welcome />);
//         } else {
//             connect();
//             root.render(<App />);
//         }
//     });
//     {/* <div>HelloWorld!</div> */};
