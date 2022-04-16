# Bulletin Board 

* 프레임워크 : Vue.js
* 기간 : 2022.04.09 ~ 2022.04.14

아래의 이미지는 Bulletin Board 의 최종 완성 모습입니다.

![Uploading {image file name}](https://velog.velcdn.com/images/savin/post/ed81b6c0-1bb4-4c09-bb0b-157d565e8799/image.png)

## Component 소개
* **Header**
* **Board**
  * 각 게시글에는 [상세보기]와 [수정 양식] 페이지가 존재합니다.
    * **Details** : 상세보기
    * **EditForm** : 게시글 수정 양식
  * **Pagination** : 페이지네이션
  * **Form** : 게시글 등록 양식
* **Footer**

![Uploading {image file name}](https://velog.velcdn.com/images/savin/post/7905eec1-2ea5-4a58-a866-77115ca9169c/image.png)

![Uploading {image file name}](https://velog.velcdn.com/images/savin/post/16b28e91-25b5-43d3-b687-ea41d9fbb770/image.png)

### App.vue
* Header, Board, Footer 컴포넌트를 렌더링한다.

### main.js
* App.vue를 렌더링
* 필요한 CSS 스타일 파일을 import하여 적용

### Header.vue
* 웹페이지 가장 상단에 렌더링되는 메뉴바 컴포넌트

### Footer.vue
* 웹페이지 가장 하단에 렌더링되는 페이지 기타 정보

### Board.vue
* **data**
  * **board** : 게시글들의 데이터가 담긴 리스트<br/>
    각 게시글은 {selected: (boolean), details: (boolean), edit: (boolean), title: (string), contents: (string), writer: (string), date: (string | 단, YYYY-MM-DD 형식)} 형태의 객체이다.
  * **boardSize** : 게시판 한 페이지에 보여질 게시글의 수 ( 이 프로젝트에서는 5로 지정하였다. )
  * **pageSize** : 페이지네이션 구현 시 "&lt"과 "&gt" 버튼 사이에 보여질 페이지의 개수 ( 이 프로젝트에서는 5로 지정하였다. )
  * **boardPage** : 현재 게시판 페이지를 나타내는 변수<br/>
    (기본값은 1이며, 페이지 변동시 Pagination 컴포넌트에서 변경된 페이지 값을 전달받아 새로 저장된다.)
* **computed**
  * **totalPages()** : board 리스트 안의 post 개수에 따라 존재해야하는 페이지 수를 계산하는 함수, Pagination 컴포넌트에 전달된다.
  * **boardPosts()** : 현재 페이지(boardPage)에 따라 게시글(post)을 board 리스트 안에서 꺼내 담은 리스트
    * 조건 : (현재 페이지-1)*5 <= board 리스트 안에서의 인덱스 < (현재 페이지)*5
    * 1페이지 : 0 ~ 4
    * 2페이지 : 5 ~ 9
    * 3페이지 : 10 ~ 14
    * . . .
* **methods**
  * **addPost(post)** : 전달받은 게시글 데이터를 board 리스트의 가장 처음에 추가하는 함수
  * **multiDelete()** : board 리스트 안에서 selected 속성값이 true인 게시글을 삭제하는 함수<br/>
    ( 사실상 board 리스트에서 selected 속성값이 false인 객체들만 모아서 다시 board에 할당하는 방식이다. )
  * **detailsOn(idx)** : idx를 전달받아 board 리스트에서 해당 idx를 가진 객체의 details 속성값을 true로 변경하는 함수<br/>
    ( details 속성값이 true로 변경되면 게시글 상세페이지가 나타난다. )
  * **detailsOff(idx)** : idx를 전달받아 board 리스트에서 해당 idx를 가진 객체의 details 속성값을 false로, edit 속성값을 false로 변경하는 함수<br/>
    ( details 속성값이 false로 변경되면 게시글 상세페이지가 사라지고, edit 속성값이 false로 변경되면 수정페이지가 사라진다. )
  * **editOn(idx)** : idx를 전달받아 board 리스트에서 해당 idx를 가진 객체의 edit 속성값을 true로 변경한다.<br/>
    ( edit 속성값이 true로 변경되면 게시글 수정양식 페이지가 나타난다. )
  * **editPost(postInfo)** : EditForm 컴포넌트에서 전달받은 게시글 수정 정보를 해당
  * **pageNow(page)** : Pagination 컴포넌트에서 전달받은 이동 완료 후의 페이지 데이터를 받아 this.boardPage에 할당하는 함수

#### Form.vue
* **data**
  * **addTitle** : 등록할 제목 ( 기본값 : '' )
  * **addWriter** : 등록할 작성자 ( 기본값 : '' )
  * **addContents** : 등록할 내용 ( 기본값 : '' )
  * **addDate** : 등록할 작성일 ( 기본값 : '' )
* **methods**
  * **addPost()** : 상위 컴포넌트(Board.vue)에 등록할 게시글 데이터 전달하고 게시글 등록 양식을 초기화하는 함수 ( $emit 사용 )
  * **cancel()** : 게시글 등록 양식을 초기화하는 함수

#### Details.vue
* **props**
  * **post** : 상위 컴포넌트(Board.vue)에서 전달받은 상세보기 페이지에 나타날 게시글 객체

#### EditForm.vue
* **props**
  * **postIdx** : 상위 컴포넌트(Board.vue)에서 전달받은 수정할 게시글의 board 리스트에서의 인덱스
* **data**
  * **editTitle** : 수정 제목 ( 기본값 : '' )
  * **editWriter** : 수정 작성자 ( 기본값 : '' )
  * **editDate** : 수정 작성일 ( 기본값 : '' )
  * **editContents** : 수정 내용 ( 기본값 : '' )
* **methods**
  * **editPost()** : 상위 컴포넌트(Board.vue)에 수정할 게시글 인덱스와 수정된 게시글 데이터를 전달하고 게시글 수정 양식을 초기화하는 함수 ( $emit 사용 )<br/>
    이때 전달되는 데이터 형식은 길이가 2인 리스트이고 첫 번째 자리에는 게시글 인덱스, 두 번째 자리에는 수정될 게시글 객체를 포함한다.<br/>
    [this.postIdx, { selected: false, details: false, edit:false, title: this.editTitle, contents: this.editContents, writer: this.editWriter, date: this.editDate }]
  * **cancel()** : 게시글 수정 양식을 초기화하는 함수

#### Pagination.vue
* **props** ( 상위 컴포넌트(Board.vue)에서 전달받은... )
  * **totalPages** : 존재해야 하는 전체 페이지수 ( 게시글 개수에 따라 달라짐 )
  * **pageSize** : "&lt"과 "&gt" 버튼 사이에 보여질 페이지의 개수
  * **boardPage** : 현재 페이지
* **data**
  * **pageNow** : 현재 페이지를 저장하는 변수
* **computed**
  * **pages()** : 현재 페이지 번호에 따라 페이지네이션 컴포넌트의 "&lt"과 "&gt" 버튼 사이에 보여질 페이지 번호 5가지를 계산하여 리스트에 담아 리턴한다.
* **methods**
  * **onPageChage(val)** : 페이지 번호 변화에 따라 그에 맞는 작업을 수행하는 함수
    * 현재 페이지 <= 0 이면 "첫 번째 페이지입니다." 라는 alert을 띄우고,
    * 현재 페이지 > this.totalPages (현재 페이지 번호가 마지막 페이지 번호보다 크면) "마지막 페이지입니다."라는 alert을 띄운다.
    * 위의 두 가지 경우에 해당되지 않으면, this.pageNow 변수에 현재 페이지 번호(val)를 업데이트한다.
    * 상위 컴포넌트(Board.vue)에 현재 페이지 변수 (this.pageNow)값을 전달한다. ( $emit 사용 )
