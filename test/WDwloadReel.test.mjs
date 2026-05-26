import fs from 'fs'
import assert from 'assert'
import WDwloadReel from '../src/WDwloadReel.mjs'


describe('WDwloadReel', function() {

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
        // console.log('len', len)

        //unlinkSync
        fs.unlinkSync(fp)

        return len
    }
    // test()
    //     .catch((err) => {
    //         console.log('catch', err)
    //     })

    it('download', async function() {
        let r = 8468825
        let rr = await test()
        assert.strict.deepEqual(r, rr)
    })

})
