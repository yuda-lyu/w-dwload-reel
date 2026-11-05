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

        //len, boxType(mp4 檔首之 box 型別在位元組 4~7)
        let len = fs.statSync(fp).size
        let boxType = fs.readFileSync(fp).subarray(4, 8).toString('latin1')

        //unlinkSync
        fs.unlinkSync(fp)

        return { len, boxType }
    }
    // test()
    //     .catch((err) => {
    //         console.log('catch', err)
    //     })

    //外部影片之編碼與位元組數由對方決定,會隨對方改版而變,故只驗下載到完整之 mp4,不比對確切大小
    it('download', async function() {
        let { len, boxType } = await test()
        assert.strict.equal(boxType, 'ftyp')
        assert.ok(len > 1024 * 1024, `下載檔過小: ${len}`)
    })

})
