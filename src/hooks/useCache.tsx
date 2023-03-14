/*
 * @Author       : eug yyh3531@163.com
 * @Date         : 2023-03-14 11:33:55
 * @LastEditors  : eug yyh3531@163.com
 * @LastEditTime : 2023-03-14 11:34:01
 * @FilePath     : /micro-react/src/hooks/useCache.tsx
 * @Description  : filename
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
interface Cb {
    (...arg: unknown[]): unknown
}
const cacheMap = new Map();

export default (key: string, callback: Cb) => {
    return async (cache = true) => {
        const result = cacheMap.get(key)

        if (cache && result) {
            return result
        }

        const res = await callback()
        cacheMap.set(key, res)

        return res
    }
}