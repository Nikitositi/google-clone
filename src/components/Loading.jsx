import React from 'react';
import { Audio, MagnifyingGlass } from 'react-loader-spinner';

export const Loading = ({ darkTheme }) => {
  return (
    <div className='flex justify-center items-center'>
      {darkTheme ? (
        <MagnifyingGlass
          visible={true}
          height='80'
          width='80'
          ariaLabel='MagnifyingGlass-loading'
          wrapperStyle={{}}
          wrapperClass='MagnifyingGlass-wrapper'
          glassColor='#c0efff'
          color='#e15b64'
        />
      ) : (
        <Audio type='Puff' color='rgb(59 130 246)' height={550} width={80} />
      )}
    </div>
  );
};
