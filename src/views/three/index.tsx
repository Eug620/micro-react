/*
 * @Author       : eug yyh3531@163.com
 * @Date         : 2023-05-30 16:04:51
 * @LastEditors  : eug yyh3531@163.com
 * @LastEditTime : 2023-05-30 16:37:03
 * @FilePath     : /micro-react/src/views/three/index.tsx
 * @Description  : filename
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import * as THREE from 'three';

export default function index() {


    const refThreeContainer: MutableRefObject<any> = useRef(null)

    // 初始化画布
    const initContainer = () => {
        // init
        const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
        camera.position.z = 1;

        const scene = new THREE.Scene();

        const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
        const material = new THREE.MeshNormalMaterial();

        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        const renderer = new THREE.WebGLRenderer({ antialias: true });

        renderer.setSize(refThreeContainer.current.parentElement.clientWidth - 20, refThreeContainer.current.parentElement.clientHeight - 20);
        renderer.setAnimationLoop(animation);

        // animation
        function animation(time: number) {

            mesh.rotation.x = time / 2000;
            mesh.rotation.y = time / 1000;

            renderer.render(scene, camera);
        }

        return renderer.domElement
    }


    // 渲染
    useEffect(() => {
        refThreeContainer.current.appendChild(initContainer())
    }, [])

    return (
        <div ref={refThreeContainer} className='three-container'>
        </div>
    )
}
