const host = 'http://rap2api.taobao.org/app/mock/13801'

const url = {
  login: '/api/login',
  getCode: '/api/getCode',
  navList: '/api/navList',
  homePage: '/api/homePage',
  category: '/api/category',
  commodity: '/api/commodityList',
  forRecommend: '/api/forRecommend',
  productView: '/api/productView',
  recommend: '/api/recommend'
}

Object.keys(url).forEach(key => {
  url[key] = host + url[key]
})

export default url
