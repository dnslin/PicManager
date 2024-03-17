## 许可证

### 图床后台功能

#### 一、网站信息配置

- 域名配置（更换域名，后系统仍旧可以使用）
  - 解决思路（分享链接 不整个存数据库而且是说拼接存储）
    - 域名/相册/文件名
    - 域名/自定义路径/文件名
- 网站标题，logo，Seo 关键字,网站描述

#### 二、界面设置

- 功能配置
  - 随机API
  - 暗黑模式
  - 调整页面 例如切换配色，切换导航栏 ，切换 卡片样式
  - 修改 主页 背景图
  - 历史记录（最近上传的图片）（需要进行鉴权）

#### 三、上传设置

- 存储目录（自定义）（根据时间进行分类）
- 可允许的文件格式 （后端使用魔数+文件后缀）（前端做成多选框）
- 文件格式转换，例如 PNG >>> JPG
- 配置项
  - 单次上传数量限制（考虑异步上传）
  - 上传的最大高度 和 最大宽度 （后端 进行校验）
  - 上传的最小高度 和 最小宽度 （后端 进行校验）

#### 四、水印配置

- 水印功能开启
- 水印样式 （文字样式，图片样式）
- 水印位置
- 水印颜色
- 水印大小

#### 五、API 配置

- 外部API

  - 鉴黄API
  - 压缩图片API
  - 信息提取API

- 内部API
  - 提供鉴权接口
  - 提供 图片的CRUD接口
  - 提供时效控制
  - 提供API的token功能限制

#### 六、压缩设置

- 前端压缩

  - 自动裁剪 宽高
  - 压缩大小
  - 缩率图

- 后端压缩

#### 七、 图片回收

- 系统设置开启此功能
- 删除的图片会暂时存到这样

#### 八、可疑图片

- 开启剑皇
- 有问题的图片将会移交到这里

#### 九、网站安全

- 日志记录
  - 上传日志
  - 登录日志
- 缩略图
  - 生成方式
    - timthumb
    - 后端生成
  - 尺寸设置
- 黑名单/白名单
- 功能开启
  - 登录上传
  - 验证码
  - API上传
  - 统计
  - 公告
  - 文件回收
  - 鉴黄开启
  - 时区设置

#### 十、账号信息

- 用户名
- 密码
- 个人简介
- 头像
- token
- 加密key

#### 十一、各种统计

- 容量
- 上传现状图
- 图片类型图
- ....

[MIT © 2024+present,PicManager](./LICENSE)
