import { useRef, useState } from "react";

function LisaToode() {
  const [sonum, muudaSonum] = useState("Lisa uus toode!");
  const toodeViide = useRef(); // toodeRef  ---> läheb inputide külge

  function lisa() {
    if (toodeViide.current.value === "") {
      muudaSonum("Sa ei saa tühja nimega uut toodet sisestada!")
    } else {
      muudaSonum("Toode ilusti lisatud!")
    }
  }

  return (
    <div>
      <div>{sonum}</div>
      <label>Toote nimi</label> <br />
      <input ref={toodeViide} type="text" /> <br />
      <button onClick={lisa}>Lisa</button> <br />
    </div>
  )
}

export default LisaToode