<template>
	<div class="app">
		<div class="head">
		     购物车
		</div>
		<div class="one">
			<!--<p class="zi">空空如也</p>-->
			<p class="zi">购物车是空的</p>
			<p class="gg">
				<router-link to='/home'>去购物 > </router-link>
			</p>
			
		</div>
		<div class="img">
			<img src="../assets/VIP.png"/>
		</div>
		<div class="xiang">
    		<div class="pi">
    			<p class="zz">你&nbsp;可&nbsp;能&nbsp;还&nbsp;喜&nbsp;欢</p>
    		    <p class="ee">Y&nbsp;o&nbsp;u&nbsp;&nbsp;&nbsp;&nbsp; m&nbsp;i&nbsp;g&nbsp;h&nbsp;t&nbsp; &nbsp;&nbsp;&nbsp; l&nbsp; i&nbsp;k&nbsp;e&nbsp; &nbsp;&nbsp;&nbsp;i&nbsp;t</p>
    		</div>
    		<ul>
    			<li>
    				<div class="ii"><img src="../assets/1530173541_40765.jpg"/></div>
    				<p class="title">公主的假日</p>
    				<p class="price">
    					<span class="vip">VIP 9折</span>
    					<span class="xian">￥179.10</span>
    					<span class="yuan">￥199</span>
    				</p>
    			</li>
    			<li>
    				<div class="ii"><img src="../assets/1530171687_96520.jpg"/></div>
    				<p class="title">一见倾心</p>
    				<p class="price">
    					<span class="vip">VIP 9折</span>
    					<span class="xian">￥269.10</span>
    					<span class="yuan">￥299</span>
    				</p>
    			</li>
    			<li>
    				<div class="ii"><img src="../assets/1548657678_42942.jpg"/></div>
    				<p class="title">告白气球</p>
    				<p class="price">
    					<span class="vip">VIP 9折</span>
    					<span class="xian">￥359.10</span>
    					<span class="yuan">￥499</span>
    				</p>
    			</li>
    			<li>
    				<div class="ii"><img src="../assets/1557209698_82289.jpg"/></div>
    				<p class="title">心上人</p>
    				<p class="price">
    					<span class="vip">VIP 9折</span>
    					<span class="xian">￥449.10</span>
    					<span class="yuan">￥599</span>
    				</p>
    			</li>
    			<li>
    				<div class="ii"><img src="../assets/1593309945_32311.jpg"/></div>
    				<p class="title">三生三世</p>
    				<p class="price">
    					<span class="vip">VIP 9折</span>
    					<span class="xian">￥539.10</span>
    					<span class="yuan">￥599</span>
    				</p>
    			</li>
    			<li>
    				<div class="ii"><img src="../assets/1593571506_35681.jpg"/></div>
    				<p class="title">甜蜜的期待</p>
    				<p class="price">
    					<span class="vip">VIP 9折</span>
    					<span class="xian">￥539.10</span>
    					<span class="yuan">￥599</span>
    				</p>
    			</li>
    		</ul>
    	</div>
    	<v-foot></v-foot>
	</div>
</template>

<script>
	import Foot from './foot/Foot.vue';
	export default{
		name:'Gouwuche',
		 components:{
    	'v-foot':Foot
    },
	}
</script>

<style scoped="scoped">

*{
	margin: 0;
	padding: 0;
}
a{
	color: #997334;
	text-decoration: none;
}
.router-link-active{
  color: #997334;
}
ul{
	list-style: none;
}
#app{
	width: 100%;
}
.head{
	width: 100%;
	font-size: 2rem;
	text-align: center;
}
.one{
	width: 100%;
	margin: auto;
	margin-top: 2rem;
}
.zi{
	color: gray;
	width: 100%;
	text-align: center;
	font-size: 2rem;
	margin-top: 2rem;
}
.gg{
	width: 100%;
	text-align: center;
	margin-top: 1rem;
	font-size: 1.6rem;
	color: #997334;
}
.img{
	width: 100%;
	margin-top: 2rem;
}
.img img{
	width: 100%;
}
  .xiang{
  	width: 95%;
  	margin-top: 2rem;
  }
  .pi{
  	width: 100%;
  	text-align: center;
  	font-size: 1.5rem;
  }
   .p p{
  	margin-top: 1rem;
  }
  .ee{
  	color: chocolate;
  }
  .xiang ul{
  	width: 100%;
  	display: flex;
  	flex-flow: wrap;
  	margin-top: 1rem;
  }
  .xiang ul li{
  	width: 50%;
  	margin-bottom: 1rem;
  	/*border: 1px solid black;*/
  }
   .xiang ul li img{
  	width: 100%;
  }
  .title{
  	text-align: center;
  	font-size: 1.5rem;
  	margin-top: 1.4rem;
  }
  .price{
  	display: flex;
  	justify-content:center;
  	margin-top: 1.5rem;
  }
  .vip{
  	width: 4rem;
  	height: 2rem;
  	display: inline-block;
  	background-color: chocolate;
  	color: white;
  	border-radius: 0.5rem;
  	text-align: center;
  	line-height: 2rem;
  	font-size: 0.2rem;
  }
  .yuan{
  	text-decoration: line-through;
  }
</style>