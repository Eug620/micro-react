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
import React, { useEffect, useRef, useState } from 'react'
import { Excalidraw, loadLibraryFromBlob, mergeLibraryItems } from "@excalidraw/excalidraw";
import { ExcalidrawImperativeAPI, LibraryItem } from '@excalidraw/excalidraw/types/types';

// https://docs.excalidraw.com/docs/@excalidraw/excalidraw/installation
export default function excalidraw() {
    // const [excalidrawAPI, setExcalidrawAPI] = useState<ExcalidrawImperativeAPI | null>(null);
    const excalidrawAPIRef = useRef<ExcalidrawImperativeAPI | null>(null);
    const list:LibraryItem[] = []
    const _libraryItems = [
        // 'https://libraries.excalidraw.com/libraries/youritjang/software-architecture.excalidrawlib',
        // 'https://libraries.excalidraw.com/libraries/rohanp/system-design.excalidrawlib',
        // 'https://libraries.excalidraw.com/libraries/anna-pastushko/architecture-diagram-components.excalidrawlib',
        // 'https://libraries.excalidraw.com/libraries/drwnio/drwnio.excalidrawlib',
        // 'https://libraries.excalidraw.com/libraries/youritjang/stick-figures.excalidrawlib',
        // 'https://libraries.excalidraw.com/libraries/childishgirl/aws-architecture-icons.excalidrawlib',
        // 'https://libraries.excalidraw.com/libraries/BjoernKW/UML-ER-library.excalidrawlib',
        'https://libraries.excalidraw.com/libraries/g-script/forms.excalidrawlib',
        // 'https://libraries.excalidraw.com/libraries/dbssticky/data-viz.excalidrawlib',
        // 'https://libraries.excalidraw.com/libraries/ferminrp/awesome-icons.excalidrawlib',
        // 'https://libraries.excalidraw.com/libraries/cloud/cloud.excalidrawlib',
        // 'https://libraries.excalidraw.com/libraries/gabrielamacakova/basic-ux-wireframing-elements.excalidrawlib',
        // 'https://libraries.excalidraw.com/libraries/aretecode/decision-flow-control.excalidrawlib',
        // 'https://libraries.excalidraw.com/libraries/aretecode/system-design-template.excalidrawlib',
        'https://libraries.excalidraw.com/libraries/mguidoti/google-icons.excalidrawlib',
        // 'https://libraries.excalidraw.com/libraries/xxxdeveloper/icons.excalidrawlib'
    ]
    Promise.all(_libraryItems.map(item =>{
        return fetch(item).then(res => {
            return res.blob()
        }).then(async blob => {
            return await loadLibraryFromBlob(blob)
        })
    })).then(res => {
        console.log(res, 'res','excalidrawAPI',excalidrawAPIRef)
        excalidrawAPIRef.current?.updateLibrary({
            libraryItems: res.flat(),
        });
    })

    return (
        <div style={{ height: "100vh" }} >
            <Excalidraw
                ref={excalidrawAPIRef}
                langCode='zh-CN'
            />
        </div>
    )
}

