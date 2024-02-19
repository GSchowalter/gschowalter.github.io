import React, { useState, useEffect } from "react";

function Chess() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://lichess.org/@/CoatBoat")
      .then((response) => setData(response))
      .catch((error) => console.error(error));
  }, []);

  return (
    <section id="chess">
      <p>
        Checkout my most recent chess game pulled from lichess using their
        public api! (My username is CoatBoat)
      </p>
      <p>{data ? <pre>{JSON.stringify(data, null, 2)}</pre> : "Loading..."}</p>
      <iframe
        src="https://lichess.org/embed/game/9a5hGF8c?theme=auto&bg=auto#4"
        width={600}
        height={397}
        frameborder={0}
      ></iframe>
    </section>
  );
}
export default Chess;
