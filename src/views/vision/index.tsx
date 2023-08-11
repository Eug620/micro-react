/*
 * @Author       : eug yyh3531@163.com
 * @Date         : 2023-08-11 15:44:23
 * @LastEditors  : eug yyh3531@163.com
 * @LastEditTime : 2023-08-11 15:50:49
 * @FilePath     : /micro-react/src/views/vision/index.tsx
 * @Description  : filename
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import './index.scss'
export default function index() {

    return (
        <div className='vision-container'>
            <main>
                <div className="t"></div>
                <div className="r"></div>
                <div className="b"></div>
                <div className="l"></div>
            </main>
        </div>
    )
}