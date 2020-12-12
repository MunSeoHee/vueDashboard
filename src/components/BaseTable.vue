<template>
<div>
  <table class="table tablesorter mb-0" :class="tableClass">
    <thead :class="theadClasses">
    <tr>
      <slot name="columns">
        <th v-for="column in columns" :key="column">{{column}}</th>
      </slot>
    </tr>
    </thead>
    <tbody :class="tbodyClasses">
    <tr v-for="(item, index) in data" :key="index">
      <slot :row="item">
        <td v-for="(column, index) in columns"
            :key="index">
          {{itemValue(item, column)}}
        </td>
      </slot>
    </tr>
    </tbody>
  </table>
  </div>
</template>
<script>
  export default {
    name: 'base-table',
    props: {
      columns: {
        type: Array,
        default: () => [],
        description: "Table columns"
      },
      data: {
        type: Array,
        default: () => [],
        description: "Table data"
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
      }
    },
    data() {
      return {
        pageNum:2
      }
    },
    computed: {
      tableClass() {
        return this.type && `table-${this.type}`;
      }
    },
    methods: {
      hasValue(item, column) {
        return item[column.toLowerCase()] !== "undefined";
      },
      itemValue(item, column) {
        return item[column.toLowerCase()];
      }
    }
  };
</script>