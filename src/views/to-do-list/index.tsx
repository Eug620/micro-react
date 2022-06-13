import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { BaseCard } from "@/components";
const Todolist = () => {
  // params参数
  const params = useParams();
  // 类似于响应式数据定义，这里来获取query参数
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(params);
  console.log(searchParams, setSearchParams);

  return (
    <BaseCard>
      <h1>Todolist</h1>
      <h4>params:{params.id}</h4>
      <h4>query:{searchParams.getAll("name")}</h4>
    </BaseCard>
  );
};

export default Todolist;
