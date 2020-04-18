const classRoutes = [
	{
      path: '/pages/class/index',
      aliasPath:'/',
      name: 'classIndex',
        meta: {
	        title: '全部商品',
	    },
    },
    {
	    path: '/pages/class/sale',
        name: 'classSale',
        meta: {
	        title: '特惠活动',
	    },
	},
	{
	    path: '/pages/other/good-detail',
	    name: 'good-detail',
	    meta: {
	        title: '商品详情',
	    },
	},
	{
	    path: '/pages/other/veh-detail',
	    name: 'veh-detail',
	    meta: {
	        title: '车辆信息',
	    },
	}
]
export default classRoutes