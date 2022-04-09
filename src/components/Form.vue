<template>
  <div>
    <section class="bord_form">
        <div class="container">
            <h2>등록하기</h2>
            <div class="formbox">
                <form>
                    <p><span>제 목</span><input class="form_element" type="text" name="title"></p>
                    <p><span>작 성 자</span><input class="form_element" type="text" name="user_name"></p>
                    <p class="text_area"><span>내 용</span><textarea class="form_element" name="user_content"></textarea></p>
                </form>
            </div>
            <div class="form_btn">
                <button>삭제</button>
                <button>등록</button>
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
}
</script>