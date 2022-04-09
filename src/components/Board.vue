<template>
  <div>
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
					<li><p>{{ post.no }}</p></li>
                    <li><p>{{ post.title }}</p></li>
                    <li><p>{{ post.writer }}</p></li>
                    <li><p>{{ post.date }}</p></li>
				</ul>
            </div>
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
  </div>
</template>

<script>
export default {
  name: 'board',
  data: function() {
	  return {
		  board : [
			  {no: 1, title: '안녕!!', contents: '신짱구가 작성한 글', writer: '신짱구', date: '2022.03.19'},
			  {no: 2, title: '반갑습니다! 김철수 입니다.', contents: '김철수가 작성한 글', writer: '김철수', date: '2022.03.16'},
			  {no: 3, title: '안녕하세요~! 유리에요~', contents: '한유리가 작성한 글', writer: '한유리', date: '2022.03.16'},
			  {no: 4, title: '반갑습니다..이훈이훈이훈', contents: '이훈이 작성한 글', writer: '이훈', date: '2022.03.16'},
			  {no: 5, title: '안녕하세요. 반가워요 "한수지"에요.', contents: '한수지가 작성한 글', writer: '한수지', date: '2022.03.16'},
		  ],
	  }
  },
}
</script>