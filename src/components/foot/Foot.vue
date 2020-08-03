<template>
	<div id="app">
		 <div class="bottom-tab">
    <div class="tab-item" @click="switchTo('/')">
            <img :src="'/' === $route.path ? tabBarImgArr[0].selected : tabBarImgArr[0].src" alt="首页">
            <span :class="{on: '/' === $route.path}">首页</span>
        </div>
    <div class="tab-item" @click="switchTo('/fenlei')">
            <img :src="'/fenlei' === $route.path ? tabBarImgArr[1].selected : tabBarImgArr[1].src" alt="推荐">
            <span :class="{on: '/fenlei' === $route.path}">分类</span>
        </div>
    <div class="tab-item" @click="switchTo('/gou')">
            <img :src="'/gou' === $route.path ? tabBarImgArr[2].selected : tabBarImgArr[2].src" alt="搜索">
            <span :class="{on: '/gou' === $route.path}">购物车</span>
        </div>
    <div class="tab-item" @click="switchTo('/chat')">
            <img :src="'/chat' === $route.path ? tabBarImgArr[3].selected : tabBarImgArr[3].src" alt="聊天">
            <span :class="{on: '/chat' === $route.path}">我的</span>
    </div>
  </div>
	</div>
</template>

<script>
	export default{
		name:'Foot',
		data(){
			return{
				tabBarImgArr:[   //图片切换
		        {
		        	src:require('../../assets/首页-选中.png'),
		        	selected: require('../../assets/首页-选中 (1).png')
		        },
		        {
		        	src:require('../../assets/类目 品类 分类 类别.2.png'),
		            selected: require('../../assets/类目 品类 分类 类别.2 (1).png')},
		        {
		        	src:require('../../assets/购物车 (1).png'),
		            selected: require('../../assets/购物车 (2).png')
		        },
		        {
		        	src:require('../../assets/我的.png'),
		        	selected: require('../../assets/我的 (1).png')
		        },
		      ]
			}
		},
		methods:{
	    switchTo(path){
	      // console.log(this.$router)
	      this.$router.replace(path)
	    }
}
	}
	
</script>

<style scoped>
 *{
 	margin: 0;
 	padding: 0;
 }
 a{
 	text-decoration: none;
 	
 }
 .router-link-active{
  color: white;
}
 #app{
 	width: 100%;
 }

  .bottom-tab{
	width: 100%;
    height: 50px;
    background-color: #000000;
    position: fixed;
    left: 0px;
    bottom: 0px;
    display: flex;
    z-index: 999;
}
    
    .tab-item{
    	 display: flex;
      flex: 1;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      color: #997334;
    }
     
      img{
      	 width: 20%;
         margin-bottom:2px;
      }
        
      .on{
      	color:white;
      }      
  /*.ding{
  	width: 5rem !important;
  	height: 5rem !important;
  	background-color: #997334;
  	border-radius: 50%;
  	color: white !important;
  	text-align: center;
  	line-height: 5rem;
  	font-size: 1.5rem;
  }*/
</style>