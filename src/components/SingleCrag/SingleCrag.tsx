import React, { useEffect, useState } from 'react';
import { CragEntity } from 'types';

interface Props {
  id: string | undefined;
}

export const SingleCrag = (props: Props) => {
  const [crag, setCrag] = useState<CragEntity | null>(null);

  useEffect(() => {
    (async () => {
      const res = await fetch(`http://localhost:3001/crag/${props.id}`);
      const data = await res.json();

      setCrag(data);
    })();
  }, []);

  if (crag === null) {
    return <p>Loading crags...</p>;
  }

  //   return <h4>{crag.name}</h4>;

  return (
    <>
      <h2>{crag.name}</h2>
      <p>{crag.description}</p>
      {!!crag.routes && <p>{crag.routes} routes</p>}
      <hr />
      <a href={crag.url} target="blank" rel="noreferrer">
        Open link
      </a>
    </>
  );
};
