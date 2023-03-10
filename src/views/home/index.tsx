/*
 * @Author       : Eug
 * @Date         : 2022-04-11 14:33:18
 * @LastEditTime : 2023-03-10 09:55:02
 * @LastEditors  : eug yyh3531@163.com
 * @Descripttion : Descripttion
 * @FilePath     : /micro-react/src/views/home/index.tsx
 */
import React, { useState, useEffect, createContext, useCallback } from "react";
import { Card, Button, Tabs, Typography } from "@arco-design/web-react";
import { BaseCard } from "@/components";
import ChildA from "./ChildA";
import ChildB from "./ChildB";

import ControlledComponent from "./ControlledComponent";
import UnControlledComponent from "./UnControlledComponent";

import Memo from "./Memo";
export interface HomeContextInterface {
  [propName: string]: any;
}


export const HomeContext = createContext({});

const TabPane = Tabs.TabPane;
const Home: React.FC = () => {
  const [num, setNum] = useState(0);

  // 检测所有变量更新，第二个参数可以不填写--useEffect(fn,[num1,num2...])
  useEffect(() => {
    console.log("模拟updated");
  });
  // 空数组模拟mounted生命周期
  useEffect(() => {
    console.log("模拟mounted,挂载完成...");
    // 再返回的一个函数来模拟销毁前，此函数会在销毁前调用
    return () => {
      console.log("模拟beforeDestory");
    };
  }, []);

  const refreshNum = useCallback(() => {
    setNum(num => num + 1)
  }, [])





  useEffect(() => {
    console.log("测试D3 - mounted,挂载完成...");

    console.log(d3, 'd3')
    // d3.select('.dashboard-container').text('Hello World!')


    const svg1 = d3.select('#svg1');
    const svgMove = svg1
      .append('g')
      .attr('transform', `translate(${100}, ${100})`);
    // 再返回的一个函数来模拟销毁前，此函数会在销毁前调用

    const cricle = svgMove
      .append('circle')
      .attr('stroke', 'black')
      .attr('r', '66')
      .attr('fill', 'blue');

    const svg2 = d3.select('#svg2');


    const rect = svg2.append('rect');

    rect
      .attr('width', '100')
      .attr('height', '100')
      .attr('transform', 'translate(100, 80)')
      .attr('fill', 'yellow');



    // 柱图
    interface BarChartType {
      name: string;
      value: number;
    }
    const data: BarChartType[] = [
      { name: 'ShaoKei1', value: 6 },
      { name: 'ShaoKei2', value: 6 },
      { name: 'ShaoKei3', value: 13 },
      { name: 'ShaoKei4', value: 8 },
      { name: 'ShaoKei5', value: 20 },
    ]


    const svg = d3.select('#mainsvg');

    // 需要获取到画布的宽高
    const width = +svg.attr('width');
    const height = +svg.attr('height');

    // 设置实际可绘画区域
    const margin = { top: 60, right: 30, bottom: 60, left: 150 };

    // 实际内容宽高
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const g = svg.append('g').attr('id', 'maingroup')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    const xScale = d3.scaleLinear()
      .domain([0, d3.max(data, (datum: any) => datum.value)])
      .range([0, innerWidth]);

    const yScale = d3.scaleBand()
      .domain(data.map(datum => datum.name))
      .range([0, innerHeight])
      .padding(0.1);

    data.forEach(datum => {
      g.append('rect')
        .attr('width', xScale(datum.value))
        .attr('height', yScale.bandwidth())
        .attr('y', yScale(datum.name))
        .attr('fill', 'green')
        .attr('opacity', '0.8')
    });

    // the following four lines of code is the simplest pattern of adding axis; 
    const yAxis = d3.axisLeft(yScale);
    const xAxis = d3.axisBottom(xScale);
    g.append('g').call(yAxis);
    g.append('g').call(xAxis).attr('transform', `translate(0, ${innerHeight})`);

    d3.selectAll('.tick text').attr('font-size', '2em');

    g.append('text')
      .text('Members of CSCG')
      .attr('font-size', '3em')
      .attr('x', innerWidth / 2 - 200)
      .attr('y', -10)
    return () => {
      console.log("测试D3 - beforeDestory");
    };
  }, []);

  return (
    <BaseCard>
      {/* <h2 style={{'textAlign': 'center'}} >Home:{num} <Button onClick={() => setNum(num+1)}>click</Button></h2>
      <HomeContext.Provider value={{ num, setNum }}>
        <Tabs defaultActiveTab="Memo">
          <TabPane key="childA" title="父子通信A">
            <Typography.Paragraph>
              <ChildA />
            </Typography.Paragraph>
          </TabPane>
          <TabPane key="childB" title="父子通信B">
            <Typography.Paragraph>
              <ChildB />
            </Typography.Paragraph>
          </TabPane>
          <TabPane key="ControlledComponent" title="受控组件">
            <Typography.Paragraph>
              <ControlledComponent />
            </Typography.Paragraph>
          </TabPane>
          <TabPane key="UnControlledComponent" title="非受控组件">
            <Typography.Paragraph>
              <UnControlledComponent />
            </Typography.Paragraph>
          </TabPane>
          <TabPane key="Memo" title="组件缓存">
            <Typography.Paragraph>
              <Memo refreshNum={refreshNum}/>
            </Typography.Paragraph>
          </TabPane>
        </Tabs>
      </HomeContext.Provider> */}
      <div className="dashboard-container">
        {/* <svg width="600" height="500" id="svg1"></svg>
        <svg width="600" height="500" id="svg2"></svg> */}

        <svg width="800" height="400" id="mainsvg" className="svgs"></svg>
      </div>
    </BaseCard>
  );
};

export default Home;
