<template>
    <div>
<div v-for="list in items" :key="list">
  <b-card no-body class="overflow-hidden" style="max-width: 540px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img :src="item.image" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body title="Horizontal Card">
          <b-card-text>
            This is a wider card with supporting text as a natural lead-in to additional content.
            This content is a little bit longer.
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'DetailPage',
    props: ["id"],
    data() {
    return {
      items: undefined,
    };
  },
  async mounted() {
    let result = await axios.get("https://fakestoreapi.com/products/"+this.id);
    this.items = result.data;
  },
}
</script>


