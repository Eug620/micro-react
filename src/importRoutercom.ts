/*
 * @Author       : eug yyh3531@163.com
 * @Date         : 2022-08-31 15:08:14
 * @LastEditors  : eug yyh3531@163.com
 * @LastEditTime : 2023-03-09 10:52:36
 * @FilePath     : /micro-react/src/importRoutercom.ts
 * @Description  : filename
 * 
 * Copyright (c) 2022 by eug yyh3531@163.com, All Rights Reserved. 
 */
const pages = import.meta.glob('./views/**/*.tsx', { eager: true });
// 以 `./` 开头）或绝对路径（以 `/` 开头
const icons = import.meta.glob('../node_modules/@arco-design/web-react/icon/react-icon/**/index.js', { eager: true });


export const resolveComponent = (name: any) => {
    const importPage:any = pages[`./views/${name}.tsx`];

    if (!importPage) {
        throw new Error(`Unknown page ${name}. Is it located under Pages with a .tsx extension?`);
    }

    // console.log(importPage);
    return importPage.default
}


export const resolveIconComponent = (name: any) => {
    const importIcon:any = icons[`../node_modules/@arco-design/web-react/icon/react-icon/${name}/index.js`];

    if (!importIcon) {
        throw new Error(`Unknown page ${name}. Is it located under Pages with a .js extension?`);
    }

    return importIcon.default
}


