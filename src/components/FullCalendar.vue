<script>
import "@fullcalendar/core/vdom"; // solves problem with Vite
import FullCalendar from "@fullcalendar/vue3";
import bootstrap5Plugin from "@fullcalendar/bootstrap5";
// import the third-party stylesheets directly from your JS
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css"; // needs additional webpack config!
import timeGridPlugin from "@fullcalendar/timegrid";
import itLocale from "@fullcalendar/core/locales/it";
import iCalendarPlugin from "@fullcalendar/icalendar";

export default {
  components: {
    FullCalendar, // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        hiddenDays: [7],
        businessHours: {
          daysOfWeek: [1, 2, 3, 4, 5, 6],

          startTime: "08:30",
          endTime: "19:30",
        },
        height: 850,
        aspectRatio: 1,
        locales: [itLocale],
        locale: "it",
        themeSystem: "bootstrap5",
        plugins: [timeGridPlugin, bootstrap5Plugin, iCalendarPlugin],
        initialView: "timeGridWeek",
        eventSources: [
          {
            url: "https://apache.prod.up.cineca.it/api/FiltriICal/impegniICal?id=62180476609c0c0021d834a0",
            format: "ics",
          },
          {
            url: "https://apache.prod.up.cineca.it/api/FiltriICal/impegniICal?id=6218058cc0b69e001c96830e",
            format: "ics",
          },
        ],
      },
    };
  },
};
</script>
<template>
  <FullCalendar :options="calendarOptions" />
</template>
