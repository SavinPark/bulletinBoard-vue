<template>
  <div>
    <section class="bord_form">
        <div class="container">
            <h2>등록하기</h2>
            <div class="formbox">
                <form>
                    <p><span>제 목</span><input class="form_element" type="text" name="title" v-model="addTitle"></p>
                    <p><span>작 성 자</span><input class="form_element" type="text" name="user_name" v-model="addWriter"></p>
					<p><span>작 성 일</span><input class="form_element" type="text" name="date" v-model="addDate"></p>
                    <p class="text_area"><span>내 용</span><textarea class="form_element" name="user_content" v-model="addContents"></textarea></p>
                </form>
            </div>
			<div class="form_btn">
                <button>삭제</button>
                <button @click="addPost">등록</button>
                <button>수정</button>
                <button>취소</button>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'form',
  data : function() {
	return {
		addTitle: '',
		addWriter: '',
		addContents: '',
		addDate: '',
	}
  },
  methods : {
	addPost() {
	  this.$emit("addPost", {selected: false, title: this.addTitle, contents:  this.addContents, writer: this.addWriter, date: this.addDate});
	  this.addTitle = '';
	  this.addContents = '';
	  this.addWriter = '';
	  this.addDate = '';
	}
  }
}
</script>