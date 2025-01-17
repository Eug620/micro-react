/*
 * @Author       : eug yyh3531@163.com
 * @Date         : 2023-03-14 10:25:27
 * @LastEditors  : eug yyh3531@163.com
 * @LastEditTime : 2023-06-26 18:14:17
 * @FilePath     : /micro-react/src/views/dashboard/index.tsx
 * @Description  : filename
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import { BaseCard } from '@/components'
import { Button } from '@arco-design/web-react';
import React, { useEffect, useState } from 'react'
import * as d3 from "d3";
import './index.scss'



const Dashboard = () => {
    useEffect(() => {
        console.log('start...');
        /**
         * 数据
         */
        const data = Array.from({ length: 10 }).map((v, i) => i * 100 + 10)
        console.log(data);

        const datasets = [
            { name: 'cat', value: 100 },
            { name: 'dog', value: 100 },
            { name: 'pig', value: 100 },
            { name: 'cow', value: 100 },
            { name: 'bird', value: 100 },
            { name: 'fish', value: 100 },
            { name: 'snake', value: 100 },
            { name: 'mouse', value: 100 },
            { name: 'monkey', value: 100 },
            { name: 'elephant', value: 100 },
        ]


        /**
         * 容器
         */
        const svg = d3.select('#pie')
            .append('svg')
            .attr('width', 600)
            .attr('height', 600)
            .attr('class', 'svg')
            // 使得视图居中
            .attr('viewBox', '-300 -300 600 600')



        /**
         * 饼图
         */
        const arcs = d3.pie().padAngle(10)(datasets.map(v => v.value))

        const arc = d3.arc()
            .outerRadius(100)
            .innerRadius(50)
            .padRadius(10)
            .cornerRadius(10)







        svg.selectAll('path')
            .data(arcs)
            .enter()
            .append('path')
            .attr('d', arc as any)
            .attr('fill', (d: any, i: number) => {
                // arc.centroid(d,i)
                return d3.schemePaired[i] // 填充颜色
            })
            .transition() // 过渡
            .duration(2000)
            // .delay(500)
            // .ease(d3.easeBounce)
            .attrTween('d', test as any)


        function test(d: any) {
            // d.cornerRadius(50)
            // return d

            return function (t: any) {
                // let arc = d3.arc().outerRadius(100)
                // .innerRadius(50)
                // .padRadius(10)
                // .cornerRadius(50)

                arc.cornerRadius(50)

                let fn = d3.interpolate(
                    {
                        endAngle: d.startAngle,
                        startAngle: d.startAngle,
                        padAngle: d.padAngle
                    },
                    d
                )
                return arc(fn(t))
            }
        }
        // .attr('d',() => arc.cornerRadius(30))



        // svg.selectAll('path')
        // .data(arcs)
        // .enter()
        // .append('path')
        // .attr('d', arc)


    }, [2])

    const [count, setCount] = useState(2)

    return (
        <BaseCard className="dashboard-container">
            {/* <div>Dashboard</div> */}
            {/* <div>{count}</div> */}
            {/* <Button onClick={() => setCount(count+1)}>click</Button> */}
            <div id="pie"></div>
        </BaseCard>
    )
}

export default Dashboard