import * as React from "react";
import { BaseCard } from "@/components";
import { connect } from 'react-redux'
import { Button } from "@arco-design/web-react";
import { useNavigate } from "react-router-dom";
const About: React.FC = (props:any) => {
  const naviate = useNavigate()
  const handleToList = () => {
    naviate('/base/developer/todolist/123?name=zhangsan')
  }
  return (
    <BaseCard>
      <p>redux</p>
      <p>About:{props.num}</p>
      <Button type="primary" onClick={props.handleAdd1}>累加1</Button>
      <Button type="primary" onClick={props.handleAdd2}>累加2</Button>
      <br />
      <Button onClick={handleToList}>to list</Button>
    </BaseCard>
  )
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    handleAdd1() {
      const action = {type:'add1'}
      dispatch(action)
    },
    handleAdd2() {
      const action = {type:'add2',value:2}
      dispatch(action)
    }
  }
}
const mapStateToProps = (state: any) => {
  return {
    num: state.num
  }
}
// connect(两个映射)(当前组件名)
export default connect(mapStateToProps, mapDispatchToProps)(About);
