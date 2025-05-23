[![專案預覽](https://firebasestorage.googleapis.com/v0/b/mobaocoffee.appspot.com/o/Pasted%20image%2020250415172900.png?alt=media&token=08cce3a2-8a5b-4a99-8bd6-9917428faccd)](https://ariel0508.github.io/flavor-trail-react/)
*點擊圖片可連結至網站*

- 後台測試帳號：`flavortrail@gmail.com`
- 後台測試密碼：`20250316`

## 專案簡介：
我們希望創建一個平台，讓商家和個人能夠方便地 <mark>捐贈或領取剩食</mark>，從而促進資源的有效利用，保護環境， 通過合作和參與實現「零食物浪費」的目標，打造更可持續的未來。

專案使用技術與工具：`React`, `React Hooks`, `React Router`, `Router Redux`, `Axios`, `JSON server`, `Bootstrap`, `Git`, `GitHub`

## 主要負責功能

- 使用 JSON Server 搭配 Render 模擬 RESTful API
- 我們網站的內容都是透過 API 渲染，做到模擬實際前後端分離的開發模式。
<img src="https://firebasestorage.googleapis.com/v0/b/mobaocoffee.appspot.com/o/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2%202025-04-15%20192016.png?alt=media&token=bc1c7d21-c56b-4ed0-b3c2-a7765e57ea1e">*使用 Apidog 來測試並產出 API 文件*
- 使用 React Hook Form 處理表單輸入及資料驗證
- 使用 React Router 的巢狀路由打造『我的帳號』分頁切換功能
  <img src="https://firebasestorage.googleapis.com/v0/b/mobaocoffee.appspot.com/o/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2%202025-04-16%20155803.png?alt=media&token=c29f1b44-1ead-4ab2-b72c-dee2fa1a8c62">

- 客製化 Bootstrap 切版與 RWD 設計，適應桌機與手機使用體驗
- 建立客製化變數文件，方便開發時快速的查找

  <img src="https://firebasestorage.googleapis.com/v0/b/mobaocoffee.appspot.com/o/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2%202025-04-25%20154227.png?alt=media&token=9d749d9e-f9d1-4eb9-bb95-8eddd0b8e904" width="400px">
- Git 分支管理規劃：依據 GitHub Flow 規則設計分支結構，使用 `main` 作為發布主幹，並為每個功能頁面與模組建立獨立分支，統一命名規則與協作流程，並以分支對照表清楚追蹤進度與負責人。

  <img src="https://firebasestorage.googleapis.com/v0/b/mobaocoffee.appspot.com/o/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2%202025-04-25%20154607.png?alt=media&token=b550f969-6a2a-4a1c-b060-892ba630fe76" width="400px">
- 協作面參與：使用者故事撰寫、流程圖、線稿圖設計與討論

## 技術挑戰與解決方案
### 🚧 挑戰 1：GitHub 版本控管與團隊協作

> **問題** 初期組員對 Git 僅有基礎觀念，實務操作不熟。PR 習慣尚未建立，常出現如：
> - 忘記切分支直接在 main 開發
> - 解衝突時慌張亂刪程式碼並推送
> - PR 無詳細描述及一次性包含過多代碼新增與改動

**解決問題**
- 由我主動召開 Git 教學會議並製作 Notion Git 手冊，將實務常見問題整理成操作教學
![git 手冊](https://firebasestorage.googleapis.com/v0/b/mobaocoffee.appspot.com/o/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2%202025-04-16%20145917.png?alt=media&token=a0f6bce2-1e55-4c11-b7ed-2c24b57ea690)
- 建立 PR 模板，規範每次發 PR 的格式與內容
![PR Template](https://firebasestorage.googleapis.com/v0/b/mobaocoffee.appspot.com/o/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2%202025-04-16%20152016.png?alt=media&token=6131c35c-d6a5-4b6b-808e-d2b25abbe4e7)
- 規劃切版順序與元件分工，避免多人同時修改同一份檔案

### 🚧 挑戰 2：模擬 API 的資料設計與實務邏輯不符
<img src="https://firebasestorage.googleapis.com/v0/b/mobaocoffee.appspot.com/o/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2%202025-04-16%20154953.png?alt=media&token=84fba8ab-582a-49b8-afdb-db93560dabbe" width="600px">

> **問題** 初期 JSON Server 的資料格式設計偏向靜態展示，缺乏關聯與真實互動情境。

**解決問題**
- 深入研究 RESTful API 的資料設計原則，從「使用者角度」與「開發邏輯」雙重面向重新規劃資料結構
- 使用 `Apidog` 製作 API 文件，清楚標示每一筆資料的流向與欄位意義，讓組員能快速理解整體架構，提升開發效率
- 學習與應用 JSON Server 的進階功能，如 `expand`、`embed` 等語法，模擬資料關聯與串接邏輯

## 團隊協作方式
- 使用 Notion 協作管理專案：排程看板、Git 指令手冊、Git 分支結構、變數表、會議記錄等
- 使用 Figma 設計流程與 wireframe，讓設計與開發同步進行
- 每週進行 stand-up meeting 確認進度與阻礙，並即時調整任務分配

## 學習與收穫
- 實際應用 Git 團隊協作並建立流程規範（分支策略、PR 模板、Code Review）
- 深入了解 React Component 的拆分、Props 傳遞與 Hook 使用
- 熟悉前後端資料串接流程，學會模擬實務 API 整合流程
- 建立「從使用者需求 → 設計 → 實作」的開發流程經驗
- 學會如何在有限時間內分工合作，並完成一個專案

## 專案連結
- 後台測試帳號：`flavortrail@gmail.com`
- 後台測試密碼：`20250316`
- [GitHub](https://github.com/CloveTseng/flavor-trail-react) 
- [Demo](https://ariel0508.github.io/flavor-trail-react/)