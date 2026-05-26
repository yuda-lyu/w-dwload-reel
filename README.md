# w-dwload-reel
A download tool for fb reel.

![language](https://img.shields.io/badge/language-JavaScript-orange.svg) 
[![npm version](http://img.shields.io/npm/v/w-dwload-reel.svg?style=flat)](https://npmjs.org/package/w-dwload-reel) 
[![license](https://img.shields.io/npm/l/w-dwload-reel.svg?style=flat)](https://npmjs.org/package/w-dwload-reel) 
[![npm download](https://img.shields.io/npm/dt/w-dwload-reel.svg)](https://npmjs.org/package/w-dwload-reel) 
[![npm download](https://img.shields.io/npm/dm/w-dwload-reel.svg)](https://npmjs.org/package/w-dwload-reel) 
[![jsdelivr download](https://img.shields.io/jsdelivr/npm/hm/w-dwload-reel.svg)](https://www.jsdelivr.com/package/npm/w-dwload-reel)

## Documentation
To view documentation or get support, visit [docs](https://yuda-lyu.github.io/w-dwload-reel/global.html).

## Installation

### Using npm(ES6 module):
```alias
npm i w-dwload-reel
```

#### Example:
> **Link:** [[dev source code](https://github.com/yuda-lyu/w-dwload-reel/blob/master/g.mjs)]
```alias
import fs from 'fs'
import WDwloadReel from './src/WDwloadReel.mjs'

async function test() {

    //url
    let url = `https://www.facebook.com/reel/3403300299820247`

    //fp
    let fp = './abc.mp4'

    //funProg
    let funProg = (prog, nn, na) => {
        console.log('prog', `${prog.toFixed(2)}%`, nn, na)
    }

    //WDwloadReel
    await WDwloadReel(url, fp, {
        clean: true, //單一程序執行時, 事先清除之前暫存檔, 減少浪費硬碟空間
        funProg,
    })

    //len
    let len = fs.statSync(fp).size
    console.log('len', len)

    console.log('done:', fp)
}
test()
    .catch((err) => {
        console.log('catch', err)
    })
// prog 0.49% 1 99
// prog 5.05% 4 99
// ...
// prog 99.00% 98 99
// prog 100.00% 99 99
// len 8468825
// done: ./abc.mp4
```
