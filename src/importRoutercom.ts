/*
 * @Author       : eug yyh3531@163.com
 * @Date         : 2022-08-31 15:08:14
 * @LastEditors  : eug yyh3531@163.com
 * @LastEditTime : 2023-03-08 18:50:14
 * @FilePath     : /micro-react/src/importRoutercom.ts
 * @Description  : filename
 * 
 * Copyright (c) 2022 by eug yyh3531@163.com, All Rights Reserved. 
 */
const pages = import.meta.glob('./views/**/*.tsx', { eager: true });
// 以 `./` 开头）或绝对路径（以 `/` 开头

export const resolveComponent = (name: any) => {
    const importPage:any = pages[`./views/${name}.tsx`];

    if (!importPage) {
        throw new Error(`Unknown page ${name}. Is it located under Pages with a .vue extension?`);
    }

    // console.log(importPage);
    return importPage.default
}


