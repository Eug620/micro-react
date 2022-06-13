import React from 'react'
import { Card } from '@arco-design/web-react';

export default function BaseCard(props:any) {
    console.log(props);
    
  return (
    <Card style={{height: '100%'}}>
        {props.children}
    </Card>
  )
}
