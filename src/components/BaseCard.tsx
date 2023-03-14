/*
 * @Author       : eug yyh3531@163.com
 * @Date         : 2022-07-03 16:31:45
 * @LastEditors  : eug yyh3531@163.com
 * @LastEditTime : 2023-03-14 10:27:47
 * @FilePath     : /micro-react/src/components/BaseCard.tsx
 * @Description  : filename
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import React from 'react'
import { Card } from '@arco-design/web-react';

export default function BaseCard(props:any) {
    // console.log(props);
  return (
    <Card style={{height: '100%'}}>
        {props.children}
    </Card>
  )
}
