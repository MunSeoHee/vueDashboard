<template>
  <div>
    <table class="table tablesorter mb-0" :class="tableClass" style="font-size: 15px;">
      <thead :class="theadClasses">
        <tr>
          <slot name="columns">
        <th v-for="column in columns" :key="column">{{column}}</th>
      </slot>
        </tr>
      </thead>
      <tr v-for="p in paginatedData" :key="p.num">
        <td>{{ p.num }}</td>
        <td>{{ p.date }}</td>
        <td>{{ p.type }}</td>
        <td>{{ p.info }} <button class="btn btn-sm btn-dark ml-2" @click="moreinfo()">{{log}}</button></td>
      </tr>
    </table>

    <div class="mt-4">
            <ul class="pagination justify-content-center">
                <li class="page-item"> <button class="btn btn-sm btn-outline-dark bg-white" :disabled="pageNum === 0" @click="prevPage">←</button> </li>
                <!-- <li v-for="i in pageCount" :key="i"> <button class="btn btn-sm btn-outline-primary bg-white">{{i}}</button> </li> -->
                <li class="page-item"> <button class="btn btn-sm btn-outline-dark bg-white" :disabled="pageNum >= pageCount - 1" @click="nextPage">→</button> </li>
            </ul>
        </div>
        <div class="alert alert-primary fade show" v-show="check" role="alert">{{log}}</div>
  </div>
</template>

<script>
export default {
  name: 'paginated-table',
  data () {
    return {
      pageNum: 0,
      prevDisabled: false,
      nextDisabled: false,
      log: 'log',
      check: false,
      more:'more'
    }
  },
  props: {
    columns: {
      type: Array,
      default: () => [],
      description: "Table columns"
    },
    data: {
      type: Array,
      required: true
    },
    type: {
        type: String, // striped | hover
        default: "",
        description: "table 클래스 striped / hover 지정"
      },
      theadClasses: {
        type: String,
        default: '',
        description: "<thead> css 클래스 지정"
      },
      tbodyClasses: {
        type: String,
        default: '',
        description: "<tbody> css 클래스 지정"
      },
    pageSize: {
      type: Number,
      required: false,
      default: 3
    }
  },
  methods: {
    hasValue(item, column) {
        return item[column.toLowerCase()] !== "undefined";
      },
      itemValue(item, column) {
        return item[column.toLowerCase()];
      },
    nextPage () {
      this.pageNum += 1;
    },
    prevPage () {
      this.pageNum -= 1;
    },
    moreinfo() {
      if(this.check===true) {
        this.check=!this.check
        this.more='more'
      } else {
        this.check=!this.check
        this.more='close'
      }
    }
  },
  computed: {
    tableClass() {
        return this.type && `table-${this.type}`;
      },
    pageCount () {
      let listLeng = this.data.length,
          listSize = this.pageSize,
          page = Math.floor(listLeng / listSize);
      page = Math.floor((listLeng - 1) / listSize) + 1;
      return page;
    },
    paginatedData () {
      const start = this.pageNum * this.pageSize,
            end = start + this.pageSize;
      return this.data.slice(start, end);
    }
  }
}
</script>