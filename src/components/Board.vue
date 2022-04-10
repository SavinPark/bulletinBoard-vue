<template>
  <div>
	
	<!-- 게시판 -->
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
				<div class="post" v-for="(post, idx) in board" :key="idx">
					<ul>
					  <li><p>{{ idx + 1 }}</p></li>
                      <li>
						<input type="checkbox" name="selected" v-model="post.selected" />
						<p class="post_title" @click="detailsOn(idx)">{{ post.title }}</p>
					  </li>
                  	  <li><p>{{ post.writer }}</p></li>
                	  <li><p>{{ post.date }}</p></li>
					</ul>
					
					<!--상세 페이지-->
					<div v-if="post.details">
						<Details :post="post" />
						<br/>
						<div class="form_btn">
							<button @click="editOn(idx)">수정</button>
							<button @click="delPost(idx)">삭제</button>
							<button @click="detailsOff(idx)">닫기</button>
						</div>
					</div>
					
					<!-- 수정 페이지-->
					<div v-if="post.edit">
						<EditForm :postIdx="idx" @editPost = "editPost"/>
					</div>
				</div>
				
            </div>
			
			<!-- 선택삭제 -->
			<div class="multiDel_btn">
                <button @click="multiDelete">선택삭제</button>
            </div>
			
			<!-- 페이지네이션 -->
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
	
	<!-- 등록 양식 -->
	<Form @addPost = "addPost"/>

  </div>
</template>

<script>
import Form from './Form.vue'
import Details from './Details.vue'
import EditForm from './EditForm.vue'
	
export default {
  name: 'board',
  components: {
	  Form,
	  Details,
	  EditForm
  },
  data: function() {
	  return {
		  board : [
			  {selected: false, details: false, edit: false, title: '안녕!!', contents: '신짱구가 작성한 글', writer: '신짱구', date: '2022-03-19'},
			  {selected: false, details: false, edit: false, title: '반갑습니다! 김철수 입니다.', contents: '김철수가 작성한 글', writer: '김철수', date: '2022-03-16'},
			  {selected: false, details: false, edit: false, title: '안녕하세요~! 유리에요~', contents: '한유리가 작성한 글', writer: '한유리', date: '2022-03-16'},
			  {selected: false, details: false, edit: false, title: '반갑습니다..이훈이훈이훈', contents: '이훈이 작성한 글', writer: '이훈', date: '2022-03-16'},
			  {selected: false, details: false, edit: false, title: '안녕하세요. 반가워요 "한수지"에요.', contents: '한수지가 작성한 글', writer: '한수지', date: '2022-03-16'},
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
	},
	detailsOn(idx) {
	  //this.board[idx].details = !this.board[idx].details;
	  this.board[idx].details = true;
	  console.log("상세보기 On : details = " + this.board[idx].details);
	},
	detailsOff(idx) {
	  this.board[idx].details = false;
	  console.log("상세보기 Off : details = " + this.board[idx].details);
	},
	delPost(idx) {
	   this.board.splice(idx, 1);
	},
	editOn(idx) {
	  this.board[idx].edit = !this.board[idx].edit;
	},
	editPost(postInfo) {
		const postIdx = postInfo[0];
		const updatePost = postInfo[1];
		
		let updateBoard = [];
		for(let post of this.board) {
			if(this.board.indexOf(post) === postIdx) {
				updateBoard.push(updatePost);
			} else {
				updateBoard.push(post);
			}
		}
		this.board = updateBoard;
	}
  }
}
</script>