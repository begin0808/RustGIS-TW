# GIS 術語對照表

RustGIS 的繁體中文介面依國家教育研究院樂詞網的「地理資訊系統名詞」翻譯。如果你看過簡體中文的 QGIS、ArcGIS 教學，同一個東西可能有不同的名稱。這張表列出常見的對照。

- **臺灣用語**：RustGIS 繁體中文（臺灣）介面的用詞。
- **中國大陸用語**：RustGIS 簡體中文介面的用詞，取自官方翻譯檔 `zh.tsv`。介面上沒有用到的詞標「—」。

<div class="rgtw-filter" markdown>
<input type="search" id="glossary-filter" placeholder="輸入中文或英文篩選，例如：環域、buffer、要素" aria-label="篩選術語">
</div>

<div id="glossary" markdown>

| 臺灣用語 | 英文 | 中國大陸用語 |
|---|---|---|
| 圖徵 | Feature | 要素 |
| 圖徵圖層 | Feature Layer | 要素图层 |
| 向量圖層 | Vector Layer | 矢量图层 |
| 網格 | Raster | 栅格 |
| 網格圖層 | Raster Layer | 栅格图层 |
| 多邊形 | Polygon | 多边形 |
| 聚合線 | Polyline | 折线 |
| 環域 | Buffer | 缓冲区 |
| 套疊 | Overlay | 叠加 |
| 融合 | Dissolve | 融合 |
| 裁切 | Clip | 裁剪 |
| 交集 | Intersect | 相交 |
| 連結 | Join | 连接 |
| 空間連接 | Spatial Join | 空间连接 |
| 依屬性選取 | Select By Attributes | 按属性选择 |
| 依位置選取圖層 | Select Layer By Location | 按位置选择图层 |
| 分帶統計 | Zonal Statistics | 分区统计 |
| 範圍內彙總 | Summarize Within | 范围内汇总 |
| XY 表轉點 | XY Table To Point | XY 表转点 |
| 內插 | Interpolation | 插值 |
| 位相 | Topology | 拓扑 |
| 高程 | Elevation | 高程 |
| 網格函式 | Raster Functions | 栅格函数 |
| 拉伸 | Stretch | 拉伸 |
| 暈渲 | Hillshade | 山体阴影 |
| 暈渲地貌 | Shaded Relief | 晕渲地貌 |
| 坡度 | Slope | 坡度 |
| 坡向 | Aspect | — |
| 坐標 | Coordinate | 坐标 |
| 坐標系統 | Coordinate system | 坐标系 |
| 投影 | Projection | 投影 |
| 地理網格 | Graticule | 经纬网 |
| 地理坐標參考 | Georeference | 地理配准 |
| 屬性表 | Attribute Table | 属性表 |
| 欄位 | Field | 字段 |
| 計算欄位 | Calculate Field | 计算字段 |
| 連結欄位 | Join Field | 连接字段 |
| 獨立表 | Standalone Table | 独立表 |
| 列（表格橫的一行） | Row | 行 |
| 欄（表格直的一行） | Column | 列 |
| 圖層 | Layer | 图层 |
| 底圖 | Basemap | 底图 |
| 符號系統 | Symbology | 符号系统 |
| 單一符號 | Single Symbol | 单一符号 |
| 唯一值 | Unique Values | 唯一值 |
| 分級設色 | Graduated Colors | 分级色彩 |
| 自然分級法 | Natural Breaks (Jenks) | 自然间断点分级法 |
| 分位數 | Quantile | 分位数 |
| 等間隔 | Equal Interval | 相等间隔 |
| 面量圖 | Choropleth Map | — |
| 標註 | Label | 标注 |
| 暈圈 | Halo | 晕圈 |
| 圖面配置 | Layout | 布局 |
| 地圖框 | Map Frame | 地图框 |
| 地圖整飾要素 | Map Surrounds | 地图整饰要素 |
| 指北標 | North Arrow | 指北针 |
| 比例尺 | Scale Bar | 比例尺 |
| 圖例 | Legend | 图例 |
| 匯入 | Import | 导入 |
| 匯出 | Export | 导出 |

<p id="glossary-empty" class="rgtw-filter-empty" hidden></p>

</div>

!!! warning "「欄」和「列」剛好相反"
    在臺灣，表格中**直的**叫「欄」、**橫的**叫「列」；中國大陸剛好相反，直的叫「列」、橫的叫「行」。看簡體教學時，「添加一列」指的是新增一個**欄位**。

## 常見的異體寫法 { #variants }

搜尋本站或資料時，下面這些寫法要注意：

| 本站與 RustGIS 的寫法 | 常見的其他寫法 | 說明 |
|---|---|---|
| 臺北、臺中、臺南、臺東 | 台北、台中、台南、台東 | 內政部資料一律寫「臺」，用「台」會篩選不到 |
| 坐標 | 座標 | 樂詞網用「坐標」 |
| 環域 | 緩衝區 | 臺灣 GIS 教科書與考試用「環域」 |
| 圖徵 | 要素、特徵 | 「要素」是中國大陸用語 |
| 網格 | 柵格、網格資料 | 「柵格」是中國大陸用語 |
| 指北標 | 指北針 | 「指北針」是一般口語 |
