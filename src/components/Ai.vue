<template>
	<div class="app">
		<div class="head">
		<div class="sea">
		   	<router-link to='/fenlei'>
		   		<img src="../assets/arrow_left.png"/>
		   	</router-link>
		   	</div>
		<div class="wen">爱情鲜花</div>
		<div class="im"><img src="../assets/tool_service2.png"/></div>
	</div>
	<div class="shang">
		<ul>
			<li>
				上架时间
			</li>
			<li>
				商品价格
			</li>
			<li>
				人气
			</li>
		</ul>
	</div>
	<div class="xiang">
    		<ul>
    			<li>
    				<router-link to='/aixiang'>
    					<div class="ii"><img src="../assets/1548231320_29458.jpg"/></div>
    				<p class="title">最好的我们</p>
    				<p class="price">
    					<span class="vip">VIP 9折</span>
    					<span class="xian">￥179.10</span>
    					<span class="yuan">￥199</span>
    				</p>
    				</router-link>
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
    				<div class="ii"><img src="../assets/1530173541_40765.jpg"/></div>
    				<p class="title">心上人</p>
    				<p class="price">
    					<span class="vip">VIP 9折</span>
    					<span class="xian">￥449.10</span>
    					<span class="yuan">￥599</span>
    				</p>
    			</li>
    			<li>
    				<div class="ii"><img src="../assets/1557209698_82289.jpg"/></div>
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
    			<li>
    				<div class="ii"><img src="../assets/1548320462_18874.jpg"/></div>
    				<p class="title">永不变心</p>
    				<p class="price">
    					<span class="vip">VIP 9折</span>
    					<span class="xian">￥179.10</span>
    					<span class="yuan">￥199</span>
    				</p>
    			</li>
    			<li>
    				<div class="ii"><img src="../assets/1593571108_81136.jpg"/></div>
    				<p class="title">安娜公主</p>
    				<p class="price">
    					<span class="vip">VIP 9折</span>
    					<span class="xian">￥269.10</span>
    					<span class="yuan">￥299</span>
    				</p>
    			</li>
    			<li>
    				<div class="ii"><img src="../assets/1542610802_24743.jpg"/></div>
    				<p class="title">醉相思</p>
    				<p class="price">
    					<span class="vip">VIP 9折</span>
    					<span class="xian">￥359.10</span>
    					<span class="yuan">￥499</span>
    				</p>
    			</li>
    			<li>
    				<div class="ii"><img src="../assets/index_floor1_right1.jpg"/></div>
    				<p class="title">一生一世</p>
    				<p class="price">
    					<span class="vip">VIP 9折</span>
    					<span class="xian">￥449.10</span>
    					<span class="yuan">￥599</span>
    				</p>
    			</li>
    			<li>
    				<div class="ii"><img src="../assets/1593742218_47280.jpg"/></div>
    				<p class="title">爱你在身边</p>
    				<p class="price">
    					<span class="vip">VIP 9折</span>
    					<span class="xian">￥539.10</span>
    					<span class="yuan">￥599</span>
    				</p>
    			</li>
    			<li>
    				<div class="ii"><img src="../assets/1594001745_78190.jpg"/></div>
    				<p class="title">我如此爱你</p>
    				<p class="price">
    					<span class="vip">VIP 9折</span>
    					<span class="xian">￥539.10</span>
    					<span class="yuan">￥599</span>
    				</p>
    			</li>
    		</ul>
    	</div>
	</div>
</template>

<script>
	export default{
		name:'Ai',
		
	}
</script>

<style scoped="scoped">
*{
	margin: 0;
	padding: 0;
}
a{
	color: black;
	text-decoration: none;
}
ul{
	list-style: none;
}
.app{
	width: 100%;
	margin: auto;
}
.head{
	width: 95%;
	height: 5rem;
	margin: auto;
	display: flex;
	justify-content: space-between ;
	align-items: center;
}
.sea{
	width:25%;
}
.sea img{
	width: 60%;
}
.wen{
	width: 40%;
	font-size: 2rem;
}
.shang{
	width: 100%;
	height:5rem;
	background-color: ghostwhite;
}
.shang ul {
	width: 100%;
	display: flex;
}
.shang ul li{
	flex: 1;
	text-align: center;
	line-height: 5rem;
	font-size: 1.5rem;
	border:1px solid gainsboro ;
}
.shang ul li:nth-child(2){
	color: #D2691E;
}
 .xiang{
  	width: 95%;
  	margin-top: 2rem;
  }
  .xiang ul{
  	width: 100%;
  	display: flex;
  	flex-flow: wrap;
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