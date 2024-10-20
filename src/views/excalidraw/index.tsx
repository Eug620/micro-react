/*
 * @Author       : eug yyh3531@163.com
 * @Date         : 2023-05-25 10:29:10
 * @LastEditors  : eug yyh3531@163.com
 * @LastEditTime : 2023-05-25 10:37:33
 * @FilePath     : /micro-react/src/views/excalidraw/index.tsx
 * @Description  : filename
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
// import { BaseCard } from '@/components'
import React from 'react'
import { Excalidraw } from "@excalidraw/excalidraw";

// https://docs.excalidraw.com/docs/@excalidraw/excalidraw/installation
export default function excalidraw() {
    return (
        <div style={{ height: "100vh" }} >
            <Excalidraw langCode='zh-CN' />
        </div>
    )
}

