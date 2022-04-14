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
				
				<div class="post" v-for="(post, idx) in boardPosts" :key="idx">
					<ul>
					  <li><p>{{ boardSize*(boardPage-1) + (idx + 1) }}</p></li>
                      <li>
						<input type="checkbox" name="selected" v-model="post.selected" />
						<p class="post_title" @click="detailsOn(boardSize*(boardPage-1) + idx)">{{ post.title }}</p>
					  </li>
                  	  <li><p>{{ post.writer }}</p></li>
                	  <li><p>{{ post.date }}</p></li>
					</ul>
					
					<!--상세 페이지-->
					<div v-if="post.details">
						<Details :post="post" />
						<br/>
						<div class="form_btn">
							<button @click="editOn(boardSize*(boardPage-1) + idx)">수정</button>
							<button @click="delPost(boardSize*(boardPage-1) + idx)">삭제</button>
							<button @click="detailsOff(boardSize*(boardPage-1) + idx)">닫기</button>
						</div>
					</div>
					
					<!-- 수정 페이지-->
					<div v-if="post.edit">
						<EditForm :postIdx="boardSize*(boardPage-1) + idx" @editPost = "editPost"/>
					</div>
				</div>
				
            </div>
			
			<!-- 선택삭제 -->
			<div class="multiDel_btn">
                <button @click="multiDelete">선택삭제</button>
            </div>
			
			<!-- 페이지네이션-->
			<Pagination :totalPages="totalPages" :size="pageSize" :boardPage="boardPage" @pageNow="pageNow" />
			
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
import Pagination from './Pagination.vue'
	
export default {
  name: 'board',
  components: {
	  Form,
	  Details,
	  EditForm,
	  Pagination
  },
  data: function() {
	  return {
		  board : [
			  {selected: false, details: false, edit: false, title: '안녕!!', contents: '신짱구가 작성한 글', writer: '신짱구', date: '2022-03-19'},
			  {selected: false, details: false, edit: false, title: '반갑습니다! 김철수 입니다.', contents: '김철수가 작성한 글', writer: '김철수', date: '2022-03-16'},
			  {selected: false, details: false, edit: false, title: '안녕하세요~! 유리에요~', contents: '한유리가 작성한 글', writer: '한유리', date: '2022-03-16'},
			  {selected: false, details: false, edit: false, title: '반갑습니다..이훈이훈이훈', contents: '이훈이 작성한 글', writer: '이훈', date: '2022-03-16'},
			  {selected: false, details: false, edit: false, title: '안녕하세요. 반가워요 "한수지"에요.', contents: '한수지가 작성한 글', writer: '한수지', date: '2022-03-16'},
			  {selected: false, details: false, edit: false, title: '안녕하세요!', contents: '나는 16살 앵무새. 이름은 앵두', writer: '앵두', date: '2022-03-15'},
			  {selected: false, details: false, edit: false, title: '안녕안녕! 안녕하세요!', contents: '나는 12살 앵무새. 이름은 소미', writer: '소미', date: '2022-03-02'},
			  {selected: false, details: false, edit: false, title: '짱아 안녕!', contents: '짱아는 짱구 동생', writer: '짱아', date: '2022-02-17'},
			  
			  {selected: false, details: false, edit: false, title: '안녕!!', contents: '신짱구가 작성한 글', writer: '신짱구', date: '2022-03-19'},
			  {selected: false, details: false, edit: false, title: '반갑습니다! 김철수 입니다.', contents: '김철수가 작성한 글', writer: '김철수', date: '2022-03-16'},
			  {selected: false, details: false, edit: false, title: '안녕하세요~! 유리에요~', contents: '한유리가 작성한 글', writer: '한유리', date: '2022-03-16'},
			  {selected: false, details: false, edit: false, title: '반갑습니다..이훈이훈이훈', contents: '이훈이 작성한 글', writer: '이훈', date: '2022-03-16'},
			  {selected: false, details: false, edit: false, title: '안녕하세요. 반가워요 "한수지"에요.', contents: '한수지가 작성한 글', writer: '한수지', date: '2022-03-16'},
			  {selected: false, details: false, edit: false, title: '안녕하세요!', contents: '나는 16살 앵무새. 이름은 앵두', writer: '앵두', date: '2022-03-15'},
			  {selected: false, details: false, edit: false, title: '안녕안녕! 안녕하세요!', contents: '나는 12살 앵무새. 이름은 소미', writer: '소미', date: '2022-03-02'},
			  {selected: false, details: false, edit: false, title: '짱아 안녕!', contents: '짱아는 짱구 동생', writer: '짱아', date: '2022-02-17'},
			  
			  {selected: false, details: false, edit: false, title: '안녕!!', contents: '신짱구가 작성한 글', writer: '신짱구', date: '2022-03-19'},
			  {selected: false, details: false, edit: false, title: '반갑습니다! 김철수 입니다.', contents: '김철수가 작성한 글', writer: '김철수', date: '2022-03-16'},
			  {selected: false, details: false, edit: false, title: '안녕하세요~! 유리에요~', contents: '한유리가 작성한 글', writer: '한유리', date: '2022-03-16'},
			  {selected: false, details: false, edit: false, title: '반갑습니다..이훈이훈이훈', contents: '이훈이 작성한 글', writer: '이훈', date: '2022-03-16'},
			  {selected: false, details: false, edit: false, title: '안녕하세요. 반가워요 "한수지"에요.', contents: '한수지가 작성한 글', writer: '한수지', date: '2022-03-16'},
			  {selected: false, details: false, edit: false, title: '안녕하세요!', contents: '나는 16살 앵무새. 이름은 앵두', writer: '앵두', date: '2022-03-15'},
			  {selected: false, details: false, edit: false, title: '안녕안녕! 안녕하세요!', contents: '나는 12살 앵무새. 이름은 소미', writer: '소미', date: '2022-03-02'},
			  {selected: false, details: false, edit: false, title: '짱아 안녕!', contents: '짱아는 짱구 동생', writer: '짱아', date: '2022-02-17'},
			  
			  {selected: false, details: false, edit: false, title: '안녕!!', contents: '신짱구가 작성한 글', writer: '신짱구', date: '2022-03-19'},
			  {selected: false, details: false, edit: false, title: '반갑습니다! 김철수 입니다.', contents: '김철수가 작성한 글', writer: '김철수', date: '2022-03-16'},
			  {selected: false, details: false, edit: false, title: '안녕하세요~! 유리에요~', contents: '한유리가 작성한 글', writer: '한유리', date: '2022-03-16'},
			  {selected: false, details: false, edit: false, title: '반갑습니다..이훈이훈이훈', contents: '이훈이 작성한 글', writer: '이훈', date: '2022-03-16'},
			  {selected: false, details: false, edit: false, title: '안녕하세요. 반가워요 "한수지"에요.', contents: '한수지가 작성한 글', writer: '한수지', date: '2022-03-16'},
			  {selected: false, details: false, edit: false, title: '안녕하세요!', contents: '나는 16살 앵무새. 이름은 앵두', writer: '앵두', date: '2022-03-15'},
			  {selected: false, details: false, edit: false, title: '안녕안녕! 안녕하세요!', contents: '나는 12살 앵무새. 이름은 소미', writer: '소미', date: '2022-03-02'},
			  {selected: false, details: false, edit: false, title: '짱아 안녕!', contents: '짱아는 짱구 동생', writer: '짱아', date: '2022-02-17'},
		  ],
		  boardSize: 5,
		  pageSize: 5,
		  boardPage: 1,
	  }
  },
  computed: {
	    totalPages() {
		   const postNum = this.board.length;
		   let pageNum;
		   if (postNum % 5 === 0) {
			   pageNum = postNum / 5;
		   } else {
			   pageNum = Math.ceil(postNum / 5);
		   }
		   return pageNum;
	    },
	    boardPosts() {
		  let list = [];
		  let pNow = this.boardPage;
		  for (let idx in this.board) {
			  if( idx >= (pNow-1)*this.boardSize && idx < pNow*this.boardSize ) {
				  list.push(this.board[idx]);
			  }
		  }
		  return list;
	   }
  },
  methods: {
	addPost(post) {
	    this.board.unshift(post);
	},
	multiDelete() {
		this.board = this.board.filter(post => post.selected === false);
		if (this.boardPosts.length === 0) {
			this.boardPage = this.boardPage - 1;
		}
	},
	detailsOn(idx) {
	    this.board[idx].details = true;
	},
	detailsOff(idx) {
	    this.board[idx].details = false;
	    this.board[idx].edit = false;
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
	},
	/*
	onPageChange(val) {
        if (val < 0) {
            alert('첫 페이지입니다.');
            return;
        }
        if (val >= this.totalPages) {
            alert('마지막 페이지입니다.');
            return;
        }
    },*/
	pageNow(page) {
		this.boardPage = page;
	}
  }
}
</script>