import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'main',
    component: () => import(/* webpackChunkName: "main" */ '../views/home/index.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/certificate',
    name: 'certificate',
    component: () => import(/* webpackChunkName: "certificate" */ '../views/certificate/index.vue')
  },
  {
    path: '/certificate/project',
    name: 'certificateP',
    component: () => import(/* webpackChunkName: "certificateP" */ '../views/certificate/certificate-p.vue')
  },
  {
    path: '/certificate/manager',
    name: 'certificateM',
    component: () => import(/* webpackChunkName: "certificateM" */ '../views/certificate/certificate-m.vue')
  },
  {
    path: '/certificate/tips',
    name: 'certificateTips',
    component: () => import(/* webpackChunkName: "certificateTips" */ '../views/certificate/certificate-tips.vue')
  },
  {
    path: '/project',
    name: 'project',
    component: () => import(/* webpackChunkName: "project" */ '../views/project/index.vue')
  },
  {
    path: '/project/add',
    name: 'projectAdd',
    component: () => import(/* webpackChunkName: "projectAdd" */ '../views/project/project-add.vue')
  },
  {
    path: '/project/step/1',
    name: 'projectStep1',
    component: () => import(/* webpackChunkName: "projectStep1" */ '../views/project/project-step-1.vue')
  },
  {
    path: '/project/step/2',
    name: 'projectStep2',
    component: () => import(/* webpackChunkName: "projectStep2" */ '../views/project/project-step-2.vue')
  },
  {
    path: '/project/step/3',
    name: 'projectStep3',
    component: () => import(/* webpackChunkName: "projectStep3" */ '../views/project/project-step-3.vue')
  },
  {
    path: '/project/detail/1',
    name: 'projectDetail1',
    component: () => import(/* webpackChunkName: "projectDetail1" */ '../views/project/detail-step-1.vue')
  },
  {
    path: '/project/detail/2',
    name: 'projectDetail2',
    component: () => import(/* webpackChunkName: "projectDetail2" */ '../views/project/detail-step-2.vue')
  },
  {
    path: '/project/detail/3',
    name: 'projectDetail3',
    component: () => import(/* webpackChunkName: "projectDetail3" */ '../views/project/detail-step-3.vue')
  },
  {
    path: '/project/detail/4',
    name: 'projectDetail4',
    component: () => import(/* webpackChunkName: "projectDetail4" */ '../views/project/detail-step-4.vue')
  },
  {
    path: '/project/detail/5',
    name: 'projectDetail2',
    component: () => import(/* webpackChunkName: "projectDetail5" */ '../views/project/detail-step-5.vue')
  },
  {
    path: '/project/detail/6',
    name: 'projectDetail6',
    component: () => import(/* webpackChunkName: "projectDetail6" */ '../views/project/detail-step-6.vue')
  },
  {
    path: '/service',
    name: 'service',
    component: () => import(/* webpackChunkName: "service" */ '../views/service/index.vue')
  },
  {
    path: '/report',
    name: 'report',
    component: () => import(/* webpackChunkName: "report" */ '../views/report/index.vue')
  },
  {
    path: '/report/detail',
    name: 'reportDetail',
    component: () => import(/* webpackChunkName: "reportDetail" */ '../views/report/detail.vue')
  },
  {
    path: '/report/add',
    name: 'reportAdd',
    component: () => import(/* webpackChunkName: "reportAdd" */ '../views/report/report-add.vue')
  },
  {
    path: '/report/step/1',
    name: 'reportStep1',
    component: () => import(/* webpackChunkName: "reportStep1" */ '../views/report/report-step-1.vue')
  },
  {
    path: '/report/step/2',
    name: 'reportStep2',
    component: () => import(/* webpackChunkName: "reportStep2" */ '../views/report/report-step-2.vue')
  },
  {
    path: '/track',
    name: 'track',
    component: () => import(/* webpackChunkName: "track" */ '../views/track/index.vue')
  },
  {
    path: '/track/detail',
    name: 'trackDetail',
    component: () => import(/* webpackChunkName: "trackDetail" */ '../views/track/detail.vue')
  },
  {
    path: '/review',
    name: 'review',
    component: () => import(/* webpackChunkName: "review" */ '../views/review/index.vue')
  },
  {
    path: '/review/add',
    name: 'reviewAdd',
    component: () => import(/* webpackChunkName: "reviewAdd" */ '../views/review/review-add.vue')
  },
  {
    path: '/review/invite',
    name: 'reviewInvite',
    component: () => import(/* webpackChunkName: "reviewInvite" */ '../views/review/review-invite.vue')
  },
  {
    path: '/library',
    name: 'library',
    component: () => import(/* webpackChunkName: "library" */ '../views/library/index.vue')
  },
  {
    path: '/library/spe',
    name: 'librarySpe',
    component: () => import(/* webpackChunkName: "librarySpe" */ '../views/library/index-spe.vue')
  },
  {
    path: '/library/backend',
    name: 'libraryBackend',
    component: () => import(/* webpackChunkName: "libraryBackend" */ '../views/library/backend.vue')
  },
  {
    path: '/experts',
    name: 'mainExperts',
    component: () => import(/* webpackChunkName: "mainExperts" */ '../views/experts/index.vue')
  },
  {
    path: '/experts/project',
    name: 'expertsProject',
    component: () => import(/* webpackChunkName: "expertsProject" */ '../views/experts/project.vue')
  },
  {
    path: '/experts/project/detail',
    name: 'expertsProjectDetail',
    component: () => import(/* webpackChunkName: "expertsProjectDetail" */ '../views/experts/project-detail.vue')
  },
  {
    path: '/experts/review',
    name: 'expertsReview',
    component: () => import(/* webpackChunkName: "expertsReview" */ '../views/experts/review.vue')
  },
  {
    path: '/experts/certificate',
    name: 'expertsCertificate',
    component: () => import(/* webpackChunkName: "expertsCertificate" */ '../views/experts/certificate.vue')
  },
  {
    path: '/manager',
    name: 'mainManager',
    component: () => import(/* webpackChunkName: "mainManager" */ '../views/manager/index.vue')
  },
  {
    path: '/manager/project',
    name: 'managerProject',
    component: () => import(/* webpackChunkName: "managerProject" */ '../views/manager/project.vue')
  },
  {
    path: '/manager/project/backend',
    name: 'managerProjectBackend',
    component: () => import(/* webpackChunkName: "managerProjectBackend" */ '../views/manager/project-backend.vue')
  },
  {
    path: '/manager/project/detail',
    name: 'managerProjectDetail',
    component: () => import(/* webpackChunkName: "managerProjectDetail" */ '../views/manager/project-detail.vue')
  },
  {
    path: '/manager/project/detail/1',
    name: 'managerProjectDetail1',
    component: () => import(/* webpackChunkName: "managerProjectDetail1" */ '../views/manager/project-detail1.vue')
  },
  {
    path: '/manager/home',
    name: 'managerHome',
    component: () => import(/* webpackChunkName: "managerHome" */ '../views/manager/home.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
