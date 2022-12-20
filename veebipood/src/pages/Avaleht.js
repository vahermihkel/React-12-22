import { useState } from "react";

function Avaleht() {
  // HTMLi muutmiseks: 1) URLi vahetus    2) useState

  // Vead on kahes kohas:
  // 1. npm start ---> kompileerimise vead (compiling errors)
  // kokkupakkimise errorid (brauserisse saatmisel)
  // leht on halli taustaga koos punase kirjaga

  // 2. lehel parem klõps hiirega -> "inspect" -> "console"
  // runtime errors (brauseris töötamisel errorid)
  // leht läheb üleni valgeks ja midagi pole näha
  const [kogus, muudaKogus] = useState(8); // numbriline
  const [sonum, muudaSonum] = useState(""); // sõnaline
  const [laigitud, muudaLaigitud] = useState(true); // kahendväärtus

  function nulli() {
    muudaKogus(0);
    muudaSonum("Panid tagasi nulli");
  }

  function v2henda() {
    muudaKogus(kogus - 1);
    muudaSonum("Vähendasid kogust");
  }

  function suurenda() {
    muudaKogus(kogus + 1);
    muudaSonum("Suurendasid kogust");
  }

  // 17.30-19.00   19.15-20.45
  // 19.45 <----    45 minutit jään võlgu

  return (
    <div>
      { laigitud === true && <img onClick={() => muudaLaigitud(false)} src="/laigitud.svg" alt="" />}
      { laigitud === false && <img onClick={() => muudaLaigitud(true)} src="/mittelaigitud.svg" alt="" />}
      <button onClick={() => muudaLaigitud(!laigitud)}>Muuda like'i</button>
      <div>{sonum}</div>
      {kogus > 0 && <button onClick={nulli}>Tagasi nulli</button>}
      <br />
      <button disabled={kogus === 0} onClick={v2henda}>-</button>
      <div>{kogus}</div>
      <button onClick={suurenda}>+</button>
    </div>
  )
}

export default Avaleht