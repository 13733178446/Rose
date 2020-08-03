<template>
	<div id="app">
		<div class="head">
		     分类
		</div>
		<div class="fen">
			<ul>
	                <li class="addd">		
							用途
				    </li>
				 <li>
							花材
				    </li>
			</ul>
		</div>
		
		<div class="tu">
		<ul class="one-ul">
			<li>
				<router-link to='/ai'>
				   <img src="../assets/one.png"/>
				</router-link>
			</li>
			<li>
				<router-link to='/index'>
				   <img src="../assets/one1.png"/>
				</router-link>
			</li>
			<li>
				<router-link to='/index'>
				   <img src="../assets/one2.png"/>
				</router-link>
			</li>
			<li>
				<router-link to='/index'>
				   <img src="../assets/one3.png"/>
				</router-link>
			</li>
			<li>
				<router-link to='/index'>
				   <img src="../assets/one4.png"/>
				</router-link>
			</li>
			<li>
				<router-link to='/index'>
				   <img src="../assets/one5.png"/>
				</router-link>
			</li>
			<li>
				<router-link to='/index'>
				   <img src="../assets/one6.png"/>
				</router-link>
			</li>
			<li>
				<router-link to='/index'>
				   <img src="../assets/one7.png"/>
				</router-link>
			</li>
		</ul>
		<ul class="two-ul">
			<li>
				<router-link to='/index'>
				   <img src="../assets/one8.png"/>
				</router-link>
			</li>
			<li>
				<router-link to='/index'>
				   <img src="../assets/one9.png"/>
				</router-link>
			</li>
			<li>
				<router-link to='/index'>
				   <img src="../assets/one10.png"/>
				</router-link>
			</li>
			<li>
				<router-link to='/index'>
				   <img src="../assets/one11.png"/>
				</router-link>
			</li>
			<li>
				<router-link to='/index'>
				   <img src="../assets/one12.png"/>
				</router-link>
			</li>
			
		</ul>
		</div>
		<v-foot></v-foot>
	</div>
</template>

<script>
	 import Foot from './foot/Foot.vue';
	export default{
		name:'Fenlei',
		components:{
    	'v-foot':Foot
    }, 
    mounted(){
		$(function(){
			$(".fen ul li").click(function(){
				var index=$(this).index()
				console.log(index)
				$(this).addClass('addd').siblings().removeClass('addd');
				$(".tu ul").eq(index).show().siblings().hide()
			});
			
})
	}
	}
	
	
	

</script>

<style scoped>
*{
	margin: 0;
	padding: 0;
}
a{
	color:#997334;
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
.fen{
	width: 100%;
	border-top:1px solid gainsboro ;
	margin-top: 1rem;
}
.fen ul{
	width: 96%;
	height: 4rem;
	margin: auto;
	display: flex;
	margin-top: 1rem;
}
.fen ul li{
	flex: 1;
	font-size: 1.8rem;
	text-align: center;
    line-height: 4rem;  
    color: #000000;
}
.fen ul li:nth-child(1){
	border:1px solid black ;
	border-top-left-radius:1rem;
	border-bottom-left-radius:1rem;
}
.fen ul li:nth-child(2){
	border:1px solid black ;
	border-top-right-radius:1rem;
	border-bottom-right-radius:1rem;
}
.addd{
	background-color: #000000;
	color: #997334 !important;
}
.tu{
	width: 99%;
	margin: auto;
	margin-top: 1rem;
	margin-bottom: 5rem;
}
.tu .one-ul{
	width: 100%;
	list-style: none;
}
.tu .one-ul li{
	width: 100%;
	margin-top: 1rem;
}
.tu .one-ul li img{
	width: 100%;
}
.tu .two-ul{
		width: 100%;
		list-style: none;
		display: none;
}
.tu .two-ul li{
		width: 100%;
		margin-top: 1rem;
}
.tu .two-ul li img{
		width: 100%;
}
	
</style>