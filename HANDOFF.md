# Graveyard Keeper 2 指导站 — 项目简报(HANDOFF)

> 状态:**已拍板(2026-10-16)并上线**。本文件与 breakstealegg-site/HANDOFF.md 同构。

## 0. 已上线(2026-10-16)

- **线上地址**:https://wenta0v0-dot.github.io/graveyardkeeper2-guide/
- **GitHub 仓库**:https://github.com/wenta0v0-dot/graveyardkeeper2-guide(公开仓,GitHub Pages「deploy from branch」,主分支根目录)
- **技术栈**:AnvilWiki 模板(Astro 7 + MDX + Pagefind + Tailwind),与 breakstealegg-site 同管线;`pnpm apply-template --answers gk2-answers.json` 完成的基础适配
- **更新发布流程**:`node scripts/ship.mjs`(构建 + 把 dist/ 镜像到仓库根)→ `git add -A && git commit && git push` → 约 1 分钟生效
  - ⚠️ 注意必须跑完整 ship(不带 `--build-only`):`--build-only` 只产 dist/ 不镜像,仓库根会残留旧构建
- **v1 内容**:codes/all-codes(作弊与控制台命令真相,核验至 1.008)、guides/beginner-guide(三引擎新手指南)、guides/troubleshooting(Steel/Foundry/Polished Bronze/订单仓库等卡点索引,部分条目标注「in-game verification in progress」)
- **v1.1 内容(2026-10-17)**:同行事实提取批——guides/ 下新增 zombie-workers-guide、factory-automation-guide、money-guide、faith-guide 四篇(从竞品站提取游戏机制事实+全原创重写,每篇带 Verification log,未在游戏内核实的数字一律标 Pending);gen-covers 生成 7 张封面(含老三篇补齐);老三篇「延伸阅读」互链接通;顺修 check-links 的 %20 tag 自链误报(上次发版已存在的 bug,非内容批引入)
- **v1.2 内容(2026-10-17)**:参考数据批——新增 items/quests/achievements/updates 四个分类(navigation.ts + en.json nav/overview 同步,导航 2→6);四篇数据页:items/alchemy-runes-cheat-sheet(29 配方 RGB 全表+30 材料符文值+实验台规则,约 32 行材料与第 29 配方标 Pending 转录,不编数)、quests/main-quest-walkthrough(序章越狱/Larry/下水道+7 幕 41 任务+声望阶梯+星期锁表,前置剧透警告,Act 6 Red Eye 卡结局警告)、achievements/all-achievements(38 成就全表:33 条公开条件逐条+5 隐藏成就明确标「游戏数据无条件文本」,GK2DB 报告标 unofficial,1.006 demo 存档成就回溯)、updates/patch-notes(9/22 热修→1.008 逐版纪要+1.009 主机推送+官方路线图,承诺每补丁后复检);数据源:Wikily.gg/Keepers Ledger/GameBrief/graveyardkeeper2.cc,事实提取+全重写
- **成就页更正(2026-10-17)**:PSNProfiles 奖杯全文(10/9 发布)比对发现首版从 GameBrief 转引的条件多处不符(Words of Faith 实为首次布道、Warmaker 实为打造 50 件战争装备、Merchants' Best Friend 实为 25 笔商人订单、Alcohol Baron 是 100 瓶非 50、Supplier 是「制造」非「运送」等),且该来源有 7 个名字不在游戏数据名单(真实名单来自 graveyardkeeper2.cc 直读构建数据);全部 38 行改用平台奖杯文本+游戏数据名单重写,5 个 Steam 隐藏成就改用 PS 公开条件(替换 GK2DB 传闻——其中 An Unlikely Pair=Agatha+Herbert、Two Broken Souls=Jack+Gunter,传闻原指向 Davy/Red Eye 为错),验证日志加更正条目;补丁页每日自动化(10:00)已建,首日核验 1.010 为最新无动作
- **炼金表补全(2026-10-24)**:两源交叉(结构化材料数据集 63 条 + 独立社区指南 66 行)**同名材料 RGB 零冲突**;补齐全部 63 条材料(44 原料/身体部件含「哪里获取」列 + 19 种炼金粉末),把「66 vs 63」口径写清(差 3 = Heart/Brain/Guts 品质变体),Cacao 标注 F0 不入配方;第 29 配方之谜解开=Organ Improver 红/白骷髅两变体算 2 条(28 条记录=29 公式);页面「Honest gap / Pending」全部清零,验证日志记交叉核验结论
- **主题色**:蜡封红 #8E3B2F;favicon/hero 图仍是模板默认,待换 GK2 主题素材

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
