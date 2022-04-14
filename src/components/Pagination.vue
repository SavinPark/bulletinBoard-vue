<template>
  <div>	
	<!-- 페이지네이션 -->
    <div class="number_tab">
		<button class="before_btn" @click="onPageChange(pageNow - 1)">&lt;</button>
		<ul>
			<button v-for="(paging, index) in pages" :key="index" @click="onPageChange(paging)" :class="boardPage === paging ? 'active_color' : ''">
				{{ paging }}
			</button>
		</ul>
		<button class="after_btn" @click="onPageChange(pageNow + 1)">&gt;</button>
	</div>

  </div>
</template>

<script>
export default {
  name: 'board',
  props: [ 'totalPages', 'pageSize', 'boardPage' ],
  data: function() {
	  return {	
		  pageNow: 1,
	  }
  },
  computed: {
	   pages() {
    		const list = [];
		    
		    let now = this.boardPage;
		    let start;
		    let end;
		   
		    if ( now/this.pageSize <=  parseInt(this.totalPages/5)) {
			    start = parseInt(this.totalPages/5);
				end = parseInt(this.totalPages/5)*5;
		    } else {
			    start = parseInt(this.totalPages/5)*5 + 1;
				end = this.totalPages;
		    }
		    //console.log(start);
		    //console.log(end);
		   
		    for (let idx = start; idx <= end; idx++) {
				list.push(idx); 
			}
		    //console.log(list);
            return list;
        },
	  
  },
  methods: {
	onPageChange(val) {
        if (val <= 0) {
            alert('첫 페이지입니다.');
            return;
        }
        else if (val >= this.totalPages + 1) {
            alert('마지막 페이지입니다.');
            return;
        }
		else {
			this.pageNow = val;
		}
		this.$emit("pageNow", this.pageNow);
    }
  }
}
</script>