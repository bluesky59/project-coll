const scan = [
	{
      path: '/pages/scan/index',
      aliasPath:'/',
      name: 'scanIndex',
        meta: {
	        title: '扫描VIN码',
	    },
    },
    {
	    path: '/pages/scan/his',
        name: 'scanHis',
        meta: {
	        title: 'VIN码查询历史',
	    },
	},
	{
	    path: '/pages/scan/vin-input',
	    name: 'vin-input-scan',
	    meta: {
	        title: 'VIN码输入',
	    },
	},
	{
	    path: '/pages/scan/scan-scan',
	    name: 'scan-scan-scan',
	    meta: {
	        title: '',
	    },
	},
	{
	    path: '/pages/scan/scan-img',
	    name: 'scan-img-scan',
	    meta: {
	        title: '图片识别',
	    },
	}
]
export default scan