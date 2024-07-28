// docs: https://moonofweisheng.github.io/uni-mini-router/
import { createRouter } from 'uni-mini-router';
// 导入pages.json
import pagesJson from '../pages.json';
// 引入uni-parse-pages
import pagesJsonToRoutes from 'uni-parse-pages';
// 生成路由表
const routes = pagesJsonToRoutes(pagesJson);
const router = createRouter({
  routes: [...routes], // 路由表信息
});

/**
 * 全局导航守卫
 * @param {object} to: 即将要进入的目标
 * @param {object} from: 当前导航正要离开的路由
 * @param {function} next: 用于reslove beforeEach钩子，需要确保 next 在导航守卫中都被严格调用一次
 */
router.beforeEach((to, from, next) => {
  // 逻辑编写
  next();
});

export default router;
