import React from 'react';
import { useRouter } from 'next/router';

function LinkPage() {
  const router = useRouter();
  const { id } = router.query;



  return (
    <div>
        <h1></h1>
    </div>
  );
}

export default LinkPage;