<template>
  <div>
	<section class="board_detail">
		<h1>[ 기존 내용 ]</h1>
		<p>제 목 : {{post.title}}</p>
    	<p>작 성 자 : {{post.writer}}</p>
		<p>작 성 일 : {{post.date}}</p>
   		<p>내 용 : {{post.contents}}</p>
    </section>
  </div>
</template>
 
<script>
export default {
  name: 'details',
  props: {
	  post : Object,
  },
}
</script>