import {useState} from "preact/hooks";

import "./app.css";
import baseImg from "./img/base.jpg";
import nonePin from "./img/none-pin.png";
import attunedPin from "./img/attuned-pin.png";
import ascendedPin from "./img/ascended-pin.png";
import radiantPin from "./img/radiant-pin.png";

enum PinType {
    NONE,
    ATT,
    ASC,
    RAD,
}

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

interface PinProps {
    pinNumber: number;
    coords: [number, number];
}

function Pin(props: PinProps) {
    const [symbol, setSymbol] = useState(PinType.RAD);

    const {pinNumber, coords} = props;
    const alias = `pin${pinNumber}`;

    function rotate() {
        setSymbol((symbol + 1) % 4);
    }

    return (
        <img
            key={alias}
            className="pin"
            src={symbol == PinType.RAD ? radiantPin : symbol == PinType.ASC ? ascendedPin : symbol == PinType.ATT ? attunedPin : nonePin}
            alt={alias}
            style={{left: coords[0], top: coords[1]}}
            onClick={rotate}
        />
    );
}

export function App() {
    return (
        <>
            {pinCoords.map((coords, i) =>
                <Pin pinNumber={i} coords={coords}/>
            )}
            <img src={baseImg} alt={"Base image"}/>
        </>
    );
}
