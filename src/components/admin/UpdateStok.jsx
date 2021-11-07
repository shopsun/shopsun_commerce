import React, { useEffect, useState } from "react";
import {useHistory} from 'react-router-dom';

export default function UpdateStock () {
    const history = useHistory();
    const [admin, setAdmin] = useState(false);
    const ADMIN_TOKEN = '452146856344562'
    useEffect(() => {
        (async () => {
          const token = localStorage.getItem('token');
            
          if (token !== ADMIN_TOKEN) {
            await history.push('/login'); // push to update products
          }
    
         setAdmin(true)
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
      /* #endregion */
    return (
        <div>
            <h1>Halaman Update Stok</h1>
        </div>
    )
    
}
