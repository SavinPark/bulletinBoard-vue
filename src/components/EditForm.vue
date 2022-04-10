<template>
  <div>
	  <section class="bord_form">
        <div class="container">
        	<div class="formbox">
                <form>
                    <p><span>제 목</span><input class="form_element" type="text" name="title" placeholder="제목" v-model="editTitle">{{post.title}}</p>
                    <p><span>작 성 자</span><input class="form_element" type="text" name="user_name" placeholder="작성자" v-model="editWriter"></p>
					<p><span>작 성 일</span><input class="form_element" type="date" name="date" v-model="editDate"></p>
                    <p class="text_area"><span>내 용</span><textarea class="form_element" name="user_content" placeholder="내용" v-model="editContents"></textarea></p>
                </form>
            </div>
			<div class="form_btn">
                <button @click="delPost">삭제</button>
                <button @click="editPost">수정</button>
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
	  post : Object,
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
	  delPost() {
		  
	  },
	  editPost() {
		  console.log(this.editTitle);
		/*
		this.$emit("editPost", {selected: false, edit:false, title: this.title, contents:  this.contents, writer: this.writer, date: this.date});
	  	this.title = '';
	  	this.contents = '';
	  	this.writer = '';
	  	this.date = '';
		*/
	  },
	  cancel() {
		  
	  }
  },
}
</script>