import { useRouter } from 'next/router';
import React from 'react';

const Doc = () => {
  const router =  useRouter()
  const {params = []} = router.query;
  console.log(params);
  if (params.length === 2) {
      return (
          <h1>Viewing docs for features {params[0]}and concept {params[1]}</h1>
      )
  }
  else if (params.length === 1) {
      return <h1>Viewing docs for features {params[0]}</h1>
  }
    return (
        <div>
           <h1>Doc Home Page</h1> 
        </div>
    );
};

export default Doc;