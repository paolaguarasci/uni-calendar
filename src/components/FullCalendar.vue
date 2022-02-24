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
    FullCalendar,
  },

  data() {
    const vm = this;

    return {
      calendarOptions: {
        customButtons: {
          all: {
            text: "all",
            click: function () {
              vm.$refs.calendar.options.eventSources = [
                {
                  id: 1,
                  url: "https://apache.prod.up.cineca.it/api/FiltriICal/impegniICal?id=62180476609c0c0021d834a0",
                  format: "ics",
                  color: "green",
                },
                {
                  id: 2,
                  url: "https://apache.prod.up.cineca.it/api/FiltriICal/impegniICal?id=6218058cc0b69e001c96830e",
                  format: "ics",
                  color: "red",
                },
              ];
            },
          },
          info: {
            text: "informatica",
            click: function () {
              vm.$refs.calendar.options.eventSources = [
                {
                  id: 1,
                  url: "https://apache.prod.up.cineca.it/api/FiltriICal/impegniICal?id=62180476609c0c0021d834a0",
                  format: "ics",
                  color: "green",
                },
              ];
            },
          },
          sfp: {
            text: "sfp",
            click: function () {
              vm.$refs.calendar.options.eventSources = [
                {
                  id: 2,
                  url: "https://apache.prod.up.cineca.it/api/FiltriICal/impegniICal?id=6218058cc0b69e001c96830e",
                  format: "ics",
                  color: "red",
                },
              ];
            },
          },
        },
        dateClick: function (arg) {
          console.log(arg.date.toUTCString());
        },
        eventClick: function (info) {
          alert("Event: " + info.event.title);
          info.el.style.borderColor = "green";
        },

        headerToolbar: {
          left: "prev,next today",
          center: "all info sfp",
          right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
        },
        titleFormat: { year: "numeric", month: "long", day: "numeric" },
        nowIndicator: true,
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
            id: 1,
            url: "https://apache.prod.up.cineca.it/api/FiltriICal/impegniICal?id=62180476609c0c0021d834a0",
            format: "ics",
            color: "green",
          },
          {
            id: 2,
            url: "https://apache.prod.up.cineca.it/api/FiltriICal/impegniICal?id=6218058cc0b69e001c96830e",
            format: "ics",
            color: "red",
          },
        ],
      },
    };
  },
};
</script>
<template>
  <div>
    <FullCalendar :options="calendarOptions" ref="calendar" />
  </div>
</template>
