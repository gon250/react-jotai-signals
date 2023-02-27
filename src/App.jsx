/** @jsxImportSource jotai-signal */

import { Suspense } from "react";
import { useSetAtom } from "jotai";
import { $ } from "jotai-signal";

import UserDisplay from "./components/user-display.jsx";
import Filter from "./components/filter.jsx";
import {filterAtom} from "./atoms/index.js";

import "./App.css";

function App() {
    const setFilter = useSetAtom(filterAtom);

    return (
        <div className="App">
            <h1>React + Jotai Signals</h1>
            <div className="card">
                <input
                    type="text"
                    value={$(filterAtom)}
                    onChange={(e) => setFilter(e.target.value)}
                />

                <Filter />

                <Suspense fallback={<div>Loading...</div>}>
                    <UserDisplay />
                </Suspense>
            </div>
        </div>
    );
}

export default App;
