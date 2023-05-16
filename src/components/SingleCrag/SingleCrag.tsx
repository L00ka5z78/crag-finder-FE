import React, { useEffect, useState } from 'react';
import { getSingleCragResponse } from 'src/utils';
import { GetOneCragResponse } from 'types';

interface Props {
  id: string;
}

export const SingleCrag = (props: Props) => {
  const [crag, setCrag] = useState<GetOneCragResponse | null>(null);

  useEffect(() => {
    (async () => {
      const result = await getSingleCragResponse(props.id);

      if (result.ok && result.data) {
        setCrag(result.data);
      } else {
        console.log(result.error ? result.error : 'Unknown error...');
      }
    })();
  }, []);

  if (crag === null) {
    return <p>Loading crags...</p>;
  }

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
