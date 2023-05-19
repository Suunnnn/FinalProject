import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: "/login"
  },
  {
    path: '/login',
    name: 'loginPage',
    component: () => import("../views/LoginPage.vue")
  },
  {
    path: '/mainmenu',
    name: 'mainmenu',
    component: () => import("../views/MainMenu.vue")
  },
  {
    path: '/mainmenu/MainQC/QcPage',
    name: 'QcPage',
    component: () => import("../views/QcPage.vue")
  },
  {
    path: '/mainmenu/MainJig/JigPage',
    name: 'JigPage',
    component: () => import("../views/JigPage.vue")
  },
  {
    path: '/mainmenu/MainPack/PackPage',
    name: 'PackPage',
    component: () => import("../views/PackPage.vue")
  },
  {
    path: '/mainmenu/PlanPage',
    name: 'PlanPage',
    component: () => import("../views/PlanPage.vue")
  },
  {
    path: '/mainmenu/TrackIng',
    name: 'TrackIng',
    component: () => import("../views/TrackIng.vue")
  },
  {
    path: '/mainmenu/JigPage/RecordJigPage',
    name: 'RecordJigPage',
    component: () => import("../views/JigPageFolder/RecordJigPage.vue")
  },
  {
    path: '/mainmenu/JigPage/PicJigPage',
    name: 'PicJigPage',
    component: () => import("../views/JigPageFolder/PicJigPage.vue")
  },
  {
    path: '/mainmenu/QcPage/QCAllRanPage',
    name: 'QCAllRanPage',
    component: () => import("../views/QCPageFolder/QCAllRan.vue")
  },
  {
    path: '/mainmenu/QcPage/IQCPage',
    name: 'IQCPage',
    component: () => import("../views/QCPageFolder/IQCPage.vue")
  },
  {
    path: '/mainmenu/MainChub/ChubMenuPage',
    name: 'ChubMenuPage',
    component: () => import("../views/ChubPageFolder/ChubMenuPage.vue")
  },
  {
    path: '/mainmenu/PackPage/PackMenuPage',
    name: 'PackMenuPage',
    component: () => import("../views/PackingPageFolder/PackMenuPage.vue")
  },
  {
    path: '/mainmenu/MainQC',
    name: 'MainQC',
    component: () => import("../views/MainQC.vue")
  },
  {
    path: '/mainmenu/MainJig',
    name: 'MainJig',
    component: () => import("../views/MainJig.vue")
  },
  {
    path: '/mainmenu/MainPack',
    name: 'MainPack',
    component: () => import("../views/MainPack.vue")
  },
  {
    path: '/mainmenu/MainChub',
    name: 'MainChub',
    component: () => import("../views/MainChub.vue")
  },
  {
    path: '/mainmenu/StockPage',
    name: 'StockPage',
    component: () => import("../views/StockPage.vue")
  },







]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
