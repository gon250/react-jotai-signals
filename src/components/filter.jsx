import {$} from "jotai-signal";

import {filterAtom} from "../atoms/index.js";

function Filter() {
    return <div>Filter: {$(filterAtom)}</div>;
}

export default Filter;
