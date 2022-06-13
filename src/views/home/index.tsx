/*
 * @Author       : Eug
 * @Date         : 2022-04-11 14:33:18
 * @LastEditTime : 2022-04-11 15:25:35
 * @LastEditors  : Eug
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

  const refreshNum = useCallback(() =>{
    setNum(num => num+1)
  },[])

  return (
    <BaseCard>
      <h2 style={{'textAlign': 'center'}} >Home:{num} <Button onClick={() => setNum(num+1)}>click</Button></h2>
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
      </HomeContext.Provider>
    </BaseCard>
  );
};

export default Home;
