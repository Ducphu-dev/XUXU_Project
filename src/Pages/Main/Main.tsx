import React from 'react';
import TextUnderline from '../../Component/TextUnderline/TextUnderline';

function Main(props: any) {
  const data =
    'Awwards Conference — Amsterdam. Awwards Conference — San Francisco. IngeniUX — Seattle. Digital Design Days 2019 — Milan. Framer Loupe 2018 — Amsterdam';

  return (
    <>
      {data.split('.').map((item, index) => (
        <div>
          <TextUnderline bottom={0} key={index}>
            {item}.
          </TextUnderline>
          <br />
        </div>
      ))}
      {/* <TextUnderline /> */}
    </>
  );
}

export default Main;
