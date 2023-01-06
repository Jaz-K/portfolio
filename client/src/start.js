import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector("main"));
root.render(<HelloWorld />);

function HelloWorld() {
    return <div>HelloWorld!</div>;
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
