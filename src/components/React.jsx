import { useState } from "react";
function React() {
 const [tasbhi, setCount] = useState(0);
 return (
 <div>
    <h1>phar tasbhi allah ho allah </h1>
 <h1>Counter</h1>
 <h2>{tasbhi}</h2>
 <button onClick={() => setCount(tasbhi + 1)}>
 Increase
 </button>
 <button onClick={() => setCount(tasbhi - 1)}>
 Decrease
 </button>
 </div>
 )
}
export default React;