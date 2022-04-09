<template>
  <div>
	
	<!-- Board -->
    <section class="bulletin_bord">
        <div class="container">
            <h2>게시판</h2>
            <div class="bord">
                <ul class="bord_title">
                    <li>No</li>
                    <li>제목</li>
                    <li>작성자</li>
                    <li>날짜</li>
                </ul>
                <ul v-for="(post, idx) in board" :key="idx">
					<li><p>{{ idx + 1 }}</p></li>
                    <li>
						<input type="checkbox" name="selected" v-model="post.selected" />
						<p>{{ post.title }}</p>
					</li>
                    <li><p>{{ post.writer }}</p></li>
                    <li><p>{{ post.date }}</p></li>
				</ul>
            </div>
			
			<!-- multiDelete -->
			<div class="multiDel_btn">
                <button @click="multiDelete">선택삭제</button>
            </div>
			
			<!-- Paging -->
            <div class="number_tab">
                <button class="before_btn">&lt;</button>
                <ul>
                    <button class="active_color">1</button>
                    <button>2</button>
                    <button>3</button>
                </ul>
                <button class="after_btn">&gt;</button>
            </div>
        </div>
    </section> 
	
	<!-- Form -->
	<Form @addPost = "addPost"/>

  </div>
</template>

<script>
import Form from './Form.vue'
	
export default {
  name: 'board',
  components: {
	  Form,
  },
  data: function() {
	  return {
		  board : [
			  {selected: false, title: '안녕!!', contents: '신짱구가 작성한 글', writer: '신짱구', date: '2022.03.19'},
			  {selected: false, title: '반갑습니다! 김철수 입니다.', contents: '김철수가 작성한 글', writer: '김철수', date: '2022.03.16'},
			  {selected: false, title: '안녕하세요~! 유리에요~', contents: '한유리가 작성한 글', writer: '한유리', date: '2022.03.16'},
			  {selected: false, title: '반갑습니다..이훈이훈이훈', contents: '이훈이 작성한 글', writer: '이훈', date: '2022.03.16'},
			  {selected: false, title: '안녕하세요. 반가워요 "한수지"에요.', contents: '한수지가 작성한 글', writer: '한수지', date: '2022.03.16'},
		  ],
	  }
  },
	methods: {
		addPost(post) {
			console.log(post);
			this.board.unshift(post);
		},
		multiDelete() {
			this.board = this.board.filter(post => post.selected === false);
		}
	}
}
</script>