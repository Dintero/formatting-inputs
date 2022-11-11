import { useState } from "react";

import "./App.css";
import BlocksRangeInput from "./components/BlocksRangeInput";
import NumberInput from "./components/NumberInput";

function App() {
    const [name, setName] = useState("test");
    return (
        <div className="App">
            <NumberInput
                name="some_number"
                options={{
                    decimals: 2,
                    separator: ",",
                }}
                placeholder="0.00"
            />
            <BlocksRangeInput
                name="some_blocks_range"
                options={{
                    blocks: [4, 4, 4, 4],
                    separators: [",", "-", "="],
                    overflow: false,
                    range: /[a-z0-9]/,
                }}
                placeholder="xxxx,xxxx-xxxx=xxxx"
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    console.log(e);
                    setName(e.target.value);
                }}
            />
        </div>
    );
}

export default App;
