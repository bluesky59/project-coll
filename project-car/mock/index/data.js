const baseUrl = 'http://39.108.65.247:8087';

export const typesArr = [
	{
		icon: baseUrl + '/imgs/index/simple/type-00.png',
		text: '全部分类',
		type: '',
		num: '00',
		spe: true
	},
	{
		icon: baseUrl + '/imgs/index/simple/type-01.png',
		text: '油液',
		type: '',
		num: '01',
		children: [
			{
				label: '油液1',
				value: '010'
			},
			{
				label: '油液2',
				value: '011'
			}
		]
	},
	{
		icon: baseUrl + '/imgs/index/simple/type-02.png',
		text: '滤清器',
		type: '',
		num: '02',
		children: [
			{
				label: '滤清器1',
				value: '010'
			},
			{
				label: '滤清器2',
				value: '011'
			}
		]
	},
	{
		icon: baseUrl + '/imgs/index/simple/type-03.png',
		text: '点火系统',
		type: '',
		num: '03',
		children: [
			{
				label: '点火系统1',
				value: '010'
			},
			{
				label: '点火系统2',
				value: '011'
			}
		]
	},
	{
		icon: baseUrl + '/imgs/index/simple/type-04.png',
		text: '照明系统',
		type: '',
		num: '04',
		children: [
			{
				label: '照明系统1',
				value: '010'
			},
			{
				label: '照明系统2',
				value: '011'
			}
		]
	},
	{
		icon: baseUrl + '/imgs/index/simple/type-09.png',
		text: '制动系统',
		type: '',
		num: '05',
		children: [
			{
				label: '制动系统1',
				value: '010'
			},
			{
				label: '制动系统2',
				value: '011'
			}
		]
	},
	{
		icon: baseUrl + '/imgs/index/simple/type-08.png',
		text: '喇叭',
		type: '',
		num: '06',
		children: [
			{
				label: '喇叭1',
				value: '010'
			},
			{
				label: '喇叭2',
				value: '011'
			}
		]
	},
	{
		icon: baseUrl + '/imgs/index/simple/type-07.png',
		text: '蓄电池',
		type: '',
		num: '07',
		children: [
			{
				label: '蓄电池1',
				value: '010'
			},
			{
				label: '蓄电池2',
				value: '011'
			}
		]
	},
	{
		icon: baseUrl + '/imgs/index/simple/type-06.png',
		text: '轮毂轮胎',
		type: '',
		num: '08',
		children: [
			{
				label: '轮毂轮胎1',
				value: '010'
			},
			{
				label: '轮毂轮胎2',
				value: '011'
			}
		]
	},
	{
		icon: baseUrl + '/imgs/index/simple/type-05.png',
		text: '减震器',
		type: '',
		num: '09',
		children: [
			{
				label: '减震器1',
				value: '010'
			},
			{
				label: '减震器2',
				value: '011'
			}
		]
	}
]

export const brandArr = [
	{
		title: '车型品牌查询',
		tagIcon: 'veh',
		dataList: [
			{
				img: baseUrl + '/imgs/index/simple/brand-00.png',
				text: '马自达'
			},
			{
				img: baseUrl + '/imgs/index/simple/brand-01.png',
				text: '奔驰'
			},
			{
				img: baseUrl + '/imgs/index/simple/brand-02.png',
				text: '奥迪'
			},
			{
				img: baseUrl + '/imgs/index/simple/brand-03.png',
				text: '凯迪拉克'
			},
			{
				img: baseUrl + '/imgs/index/simple/brand-04.png',
				text: '法拉利'
			},
			{
				img: baseUrl + '/imgs/index/simple/brand-01.png',
				text: '马自达'
			}
		]
	},
	{
		title: '热销品牌',
		tagIcon: 'brand',
		dataList: [
			{
				img: baseUrl + '/imgs/index/simple/hot-brand-00.png',
				text: '壳牌',
				nameEn: 'qp'
			},
			{
				img: baseUrl + '/imgs/index/simple/hot-brand-01.png',
				text: '欧司朗',
				nameEn: 'osl'
			},
			{
				img: baseUrl + '/imgs/index/simple/hot-brand-02.png',
				text: '龙蟠',
				nameEn: 'lp'
			},
			{
				img: baseUrl + '/imgs/index/simple/hot-brand-03.png',
				text: '曼牌',
				nameEn: 'mp'
			},
			{
				img: baseUrl + '/imgs/index/simple/hot-brand-04.png',
				text: '百适通',
				nameEn: 'bst'
			},
			{
				img: baseUrl + '/imgs/index/simple/hot-brand-01.png',
				text: '欧司朗',
				nameEn: 'osl'
			}
		]
	}
]

export const merchantsList = [
	{
		merchantName: '成都奥迪汽车用品专卖店1',
		merchantData: [
			{
				icon: baseUrl + '/imgs/index/simple/merchant-icon.png',
				des: '轮胎名称',
				price: '379'
			},
			{
				icon: baseUrl + '/imgs/index/simple/merchant-icon.png',
				des: '轮胎名称',
				price: '379'
			},
			{
				icon: baseUrl + '/imgs/index/simple/merchant-icon.png',
				des: '轮胎名称',
				price: '379'
			},
			{
				icon: baseUrl + '/imgs/index/simple/merchant-icon.png',
				des: '轮胎名称',
				price: '379'
			}
		]
	},
	{
		merchantName: '成都奥迪汽车用品专卖店2',
		merchantData: [
			{
				icon: baseUrl + '/imgs/index/simple/merchant-icon.png',
				des: '轮胎名称',
				price: '379'
			},
			{
				icon: baseUrl + '/imgs/index/simple/merchant-icon.png',
				des: '轮胎名称',
				price: '379'
			},
			{
				icon: baseUrl + '/imgs/index/simple/merchant-icon.png',
				des: '轮胎名称',
				price: '379'
			},
			{
				icon: baseUrl + '/imgs/index/simple/merchant-icon.png',
				des: '轮胎名称',
				price: '379'
			}
		]
	},
	{
		merchantName: '成都奥迪汽车用品专卖店3',
		merchantData: [
			{
				icon: baseUrl + '/imgs/index/simple/merchant-icon.png',
				des: '轮胎名称',
				price: '379'
			},
			{
				icon: baseUrl + '/imgs/index/simple/merchant-icon.png',
				des: '轮胎名称',
				price: '379'
			},
			{
				icon: baseUrl + '/imgs/index/simple/merchant-icon.png',
				des: '轮胎名称',
				price: '379'
			},
			{
				icon: baseUrl + '/imgs/index/simple/merchant-icon.png',
				des: '轮胎名称',
				price: '379'
			}
		]
	}
]

export const goodsData = {
	title: '便宜好货',
	advertisingImg: baseUrl + '/imgs/index/simple/goods-bg.png',
	dataList: [
		{
			img: baseUrl + '/imgs/index/simple/goods-img.png',
			price: '299',
			discount: '5.8',
			des: '意奔马 机油滤清器 YBM521032',
			spec: '[规格：18.8x8.8x9.2]',
			name: '火花塞'
		},
		{
			img: baseUrl + '/imgs/index/simple/goods-img.png',
			price: '399',
			discount: '5.8',
			des: '意奔马 机油滤清器 YBM521032',
			spec: '[规格：18.8x8.8x9.2]',
			name: '火花塞'
		},
		{
			img: baseUrl + '/imgs/index/simple/goods-img.png',
			price: '499',
			discount: '5.8',
			des: '意奔马 机油滤清器 YBM521032',
			spec: '[规格：18.8x8.8x9.2]',
			name: '火花塞'
		},
		{
			img: baseUrl + '/imgs/index/simple/goods-img.png',
			price: '499',
			discount: '5.8',
			des: '意奔马 机油滤清器 YBM521032',
			spec: '[规格：18.8x8.8x9.2]',
			name: '火花塞'
		}
	]
}

export const recommendsData = {
	title: '热门推荐',
	advertisingImg: baseUrl + '/imgs/index/simple/recommend-bg.png',
	dataList: [
		{
			img: baseUrl + '/imgs/index/simple/recommend-img.png',
			price: '299',
			des: '意奔马 机油滤清器 YBM5 21032'
		},
		{
			img: baseUrl + '/imgs/index/simple/recommend-img.png',
			price: '399',
			des: '意奔马 机油滤清器 YBM5 21032'
		},
		{
			img: baseUrl + '/imgs/index/simple/recommend-img.png',
			price: '499',
			des: '意奔马 机油滤清器 YBM5 21032'
		},
		{
			img: baseUrl + '/imgs/index/simple/recommend-img.png',
			price: '599',
			des: '意奔马 机油滤清器 YBM5 21032'
		}
	]
}