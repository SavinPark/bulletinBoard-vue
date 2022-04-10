<template>
  <div>
	  <section class="bord_form">
        <div class="container">
			<h1>게시글 IDX : {{ postIdx }}</h1>
			<h1>[ 수정 내용 ]</h1>
			<div class="board_detail">
				<p>제 목 : {{ editTitle }}</p>
    			<p>작 성 자 : {{ editWriter }}</p>
				<p>작 성 일 : {{ editDate }}</p>
   				<p>내 용 : {{ editContents }}</p>
   			</div>
        	<div class="formbox">
                <form>
                    <p><span>제 목</span><input class="form_element" type="text" name="title" placeholder="제목" v-model="editTitle"></p>
                    <p><span>작 성 자</span><input class="form_element" type="text" name="user_name" placeholder="작성자" v-model="editWriter"></p>
					<p><span>작 성 일</span><input class="form_element" type="date" name="date" v-model="editDate"></p>
                    <p class="text_area"><span>내 용</span><textarea class="form_element" name="user_content" placeholder="내용" v-model="editContents"></textarea></p>
                </form>
            </div>
			<div class="form_btn">
                <button @click="editPost">저장</button>
                <button @click="cancel">취소</button>
            </div>
        </div>
    </section>
  </div>
</template>
 
<script>
export default {
  name: 'details',
  props: {
	  postIdx : Number,
  },
  data: function() {
	  return {
		  editTitle: '',
		  editWriter: '',
		  editDate: '',
		  editContents: '',
	  }
  },
  methods: {
	  editPost() {
		this.$emit("editPost", [this.postIdx, { selected: false, details: false, edit:false, title: this.editTitle, contents:  this.editContents, writer: this.editWriter, date: this.editDate }]);
	  	this.editTitle = '';
	  	this.editContents = '';
	  	this.editWriter = '';
	  	this.editDate = '';
	  },
	  cancel() {
		  
	  }
  },
}
</script>