# 狀態

- 下載 Facebook Reel 影片:`src/WDwloadReel.mjs`.
- 測試 `test/WDwloadReel.test.mjs` 連外實跑(`facebook.com/reel/…`),需網路.驗下載檔為 mp4(檔首 box 型別 `ftyp`)且大於 1 MB;不比對確切位元組數,因外部影片之編碼與大小由對方決定(2026-11-05 起,原寫死之 8468825 於對方改版後每次皆紅).
- 已知限制:對方下架該影片或調整頁面時,測試會失敗,屬外部因素,須先確認再判定是否為本套件問題.
