import React from 'react'
import { useEffect } from 'react';

export default function Pagination(props) {
    useEffect(() => {
        console.log(props);
        props.listenToPage(props.pageCount);
      }, [props]);
    
    return (
        <div>
            
        </div>
    )
}
