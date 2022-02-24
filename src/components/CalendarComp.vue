<template>
  <div id="app">
    <calendar-view
      :items="items"
      class="theme-default holiday-us-traditional holiday-us-official"
    >
      <template #header="{ headerProps }">
        <calendar-view-header
          :header-props="headerProps"
          @input="setShowDate"
        />
      </template>
    </calendar-view>
  </div>
</template>
<script>
import { CalendarView, CalendarViewHeader } from "vue-simple-calendar";

import "../../node_modules/vue-simple-calendar/dist/style.css";
// The next two lines are optional themes
import "../../node_modules/vue-simple-calendar/static/css/default.css";
import "../../node_modules/vue-simple-calendar/static/css/holidays-us.css";
import jsonData from "@/data/events.json";
import * as moment from "moment";
export default {
  name: "app",
  data: function () {
    return {
      showDate: new Date(),
      jsonData: [],
      items: [],
    };
  },
  components: {
    CalendarView,
    CalendarViewHeader,
  },
  beforeMount() {
    this.jsonData = jsonData;
    this.jsonData.map((item) => {
      this.items.push({
        id: "" + item.id,
        title: item.summary,
        startDate: moment(item.dtstart).toISOString(),
        endDate: moment(item.dtend).toISOString(),
        classes: "purple",
      });
    });
    console.log(this.items);
  },
  methods: {
    setShowDate(d) {
      this.showDate = d;
    },
  },
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
  height: 67vh;
  width: 90vw;
  margin-left: auto;
  margin-right: auto;
}
</style>
