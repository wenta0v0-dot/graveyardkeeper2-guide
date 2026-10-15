# Graveyard Keeper 2 指导站 — 项目简报(HANDOFF)

> 状态:**已过双源验证 + 竞争检查,待拍板**(按 2 天规则,拍板截止 10-13)。
> 本文件与 breakstealegg-site/HANDOFF.md 同构;拍板后照此直接开工。

## 0. 一句话结论

大词已成 + 在线增长 + codes/卡点空位,但 Fextralife 正面占着 wiki——**打法必须切角:不做「大而全 wiki」,做「控制台命令/作弊真答案 + 卡点解决页 + 效率指南」**。

## 1. 选品依据(2026-10-05 ~ 10-12 采集)

| 证据 | 数据 | 日期 |
|---|---|---|
| Google Trends | 峰值 63 vs roblox codes 基准 63/55——**贴平大词基准** | 10-05 |
| Steam 同时在线 | 12,317(10-05)→ **18,704(10-12,+52%,增长期)** | 10-12 |
| YouTube 需求 | 「10 Advanced Tips」53.2K 播放/1 周;Born 2 Game 地牢流程视频 | 10-11 |
| 发售信息 | **2026-09-22 发售**,Steam $24.99(appid 4358690) | 10-12 |
| 社区热度 | Reddit 数据挖掘帖 180+ 评论(4 天) | 10-11 |
| 打分(第 6 课) | 内容 25 + 人气 20 + 会搜 20 + 缺口 10-15 ≈ **75-80,过线** | 10-11 |

双源规矩:Trends ✓ + 平台在线 ✓,均已过线。

## 2. 竞争检查结论(2026-10-11)

### wiki 词(`graveyard keeper 2 wiki`)——挤,正面拼不过
| 对手 | 成色 |
|---|---|
| **Fextralife 专站** | 厚:128 个导航条目(炼金 29 配方/尸体质量/教堂/城镇/工厂/钓鱼/成就/已知问题),launch 窗口运营中 |
| graveyardkeeper.org | 薄:约 15-20 篇,但精确匹配域名已抢到第一页 |
| graveyardkeeper2.fandom.com | 空壳:全站 20 页 |
| Wikily / Wikipedia / GK1 Fandom | 聚合/百科/上一代,答别的题 |

### codes 词(`graveyard keeper 2 codes`)——真空位
第一页全是拼凑:比价站(AllKeyShop、GG.deals 在答「哪买便宜」)、作弊器站 PLITCH、Reddit 讨论、Facebook 问答页——**没有一个认真做这个意图的页面**。注意:GK2 无 Roblox 式兑换码,真实意图是「控制台命令/作弊/调试」。

## 3. 打法(第 5 课姿势)

Fextralife 是「百科式厚」,薄弱面在**具体卡点长尾**:

1. **控制台命令/作弊页**(codes 意图的真答案;若游戏无命令系统,则如实写「无 + 替代方案」,吃下空位)
2. **卡点 troubleshooting 页**:Steel & Royal Foundry 做不出、Orders/Jack/仓库、僵尸矿工自动化、尸体质量优化——对手只有那个 15 篇的小站在勉强答
3. **效率/经济指南**:工厂产线、教堂/讲道收益、埋葬流程最优解
4. 正文第一段直答,每页带「Last checked」日期——与 AI 生成的假码站做差异化

## 4. 已验证事实(写内容只用这些)

- 机制清单(来自 Fextralife 导航,10-11):crafting、technologies/tech tree、graveyard work、town building、corpse quality、church & sermons、energy/insanity、burial、combat、world map、quests、characters、farming、fishing、factory/alcohol、zombie workers
- 玩家卡点话题(graveyardkeeper.org 在答的,10-11):Steel & Royal Foundry、Polished Bronze、Orders/Jack/warehouse、Faith 获取、Zombie mining、demo 存档转移、Multiplayer、Steam Deck、PC 配置
- 版本:Update 1.008 已上 PC(1.007 changelog 可考)
- **红线**:不编造配方、数值、命令;未核实的标 unverified 或不写;作弊/命令类内容发布前必须在游戏内核实

## 5. 信息架构提案(v1)

- `index.html` — hub:定位「the troubleshooter's guide」+ 卡点直答入口
- `commands.html` — 控制台命令/作弊真答案页(吃 codes 意图)
- `guide.html` — 新手指南:开局七天怎么走(坟场+教堂+城镇三线)
- `troubleshooting.html` — 卡点索引页(每条卡点一个锚点,后续拆独立页)
- 后续:`efficiency/`(工厂、经济)、`zombies.html`(自动化)、逐卡点独立页

## 6. 设计方向(与 BreakEgg 区分)

中世纪账房/墓园风:羊皮纸底 `#EFE6D0`、深墨 `#2A2620`、蜡封红 `#8E3B2F`、铜金 `#B08D4F`;衬线标题(如 Alegreya SC)+ 无衬线正文;分隔线用墓碑/铁艺纹样。其余规范(移动优先、零 JS、第一段直答、日期戳)沿用 BreakEgg 模式。

## 7. 启动清单(拍板后)

1. 建仓 `graveyardkeeper2-guide`(同 GitHub Pages 流程,约 10 分钟上线)
2. v1 四页(commands 页需先核实游戏内命令系统——查游戏文件/社区,不臆造)
3. Search Console 提交
4. 内容节奏:跟随官方 Update(1.008 之后)24h 内复更
5. 与 BreakEgg 的时间分配:BreakEgg 吃「更新事件流量」,GK2 吃「稳定大词流量」——两边不冲突

## 8. 决策记录

- 10-05 入表(Steam 新品);10-05 趋势=大词;10-11 竞争=可打;**拍板截止 10-13**
- 若放弃,写一句原因:例「Fextralife 占位 + 单站精力优先 BreakEgg」——半年后这些原因最值钱
