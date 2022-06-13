import { Button } from "@arco-design/web-react";
import React, { memo, useContext } from "react";
import { HomeContext, HomeContextInterface } from "./index";
interface MenoProps {
  [propName: string]: any;
}
// memo 包裹组件，避免数据更新之后组件强制重新渲染
// 父组件使用useCallback配合子组件的memo使用
// 可以实现子组件无需重新渲染
// ！！！ 前提：子组件内无响应式数据
const Memo = memo((props: MenoProps) => {
  console.log("memo render...");
//   const { num }: HomeContextInterface = useContext(HomeContext);
  return (
    <div>
      Memo
      {/* {num} */}
      <Button onClick={() =>props.refreshNum()}>click</Button>
    </div>
  );
});
export default Memo;
