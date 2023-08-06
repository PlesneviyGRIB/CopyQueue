import React from "react";
import {createRoot} from "react-dom/client";
import {CopyQueue} from "./pages/CopyQueue";

const root = createRoot(document.getElementById('root'))
root.render(<CopyQueue/>)