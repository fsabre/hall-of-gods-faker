import "./app.css";

import baseImg from "./img/base.jpg";
import radiantPin from "./img/radiant-pin.png";

const STARTING_POINT: [number, number] = [132, 329];
const X_GAP = 565;
const Y_GAP = 82;
const N_COLS = 4;
const N_ROWS = 11;
const pinCoords: [number, number][] = [];
for (let x = 0; x < N_COLS; x++) {
    for (let y = 0; y < N_ROWS; y++) {
        pinCoords.push([STARTING_POINT[0] + x * X_GAP, STARTING_POINT[1] + y * Y_GAP]);
    }
}


export function App() {
    return (
        <>
            {pinCoords.map((coords, i) =>
                <img
                    key={i}
                    class="pin"
                    src={radiantPin}
                    alt={`pin${i}`}
                    style={{left: coords[0], top: coords[1]}}
                />
            )}
            <img src={baseImg} alt={"Base image"}/>
        </>
    );
}
