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

//node g.mjs
