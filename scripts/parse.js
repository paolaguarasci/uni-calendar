const Fs = require("fs-extra");

const fileRaw = Fs.readFileSync("../data/calendar.ics", "utf8").split(
  "BEGIN:VEVENT"
);
let events = [];

for (let i = 1; i < fileRaw.length; i++) {
  const line = fileRaw[i];
  const lineSplit = line.split(":");
  let event = {
    id: i - 1,
    sequence: 0,
    dtstamp: "",
    dtstart: "",
    dtend: "",
    summary: "",
    location: "",
    description: "",
    corso: "",
  };
  for (let j = 0; j < lineSplit.length; j++) {
    if (lineSplit[j].includes("SEQUENCE")) {
      event.sequence = parseInt(lineSplit[j + 1].split("\r\n")[0]);
    }
    if (lineSplit[j].includes("DTSTAMP")) {
      event.dtstamp = lineSplit[j + 1].split("\r\n")[0];
    }
    if (lineSplit[j].includes("DTSTART")) {
      event.dtstart = lineSplit[j + 1].split("\r\n")[0];
    }
    if (lineSplit[j].includes("DTEND")) {
      event.dtend = lineSplit[j + 1].split("\r\n")[0];
    }
    if (lineSplit[j].includes("SUMMARY")) {
      event.summary = lineSplit[j + 1].split("\r\n")[0].toLowerCase();
    }
    if (lineSplit[j].includes("LOCATION")) {
      event.location = lineSplit[j + 1]
        .split("\r\n")[0]
        .toLowerCase()
        .split(" - via")[0];
    }
    if (lineSplit[j].includes("DESCRIPTION")) {
      event.description = lineSplit[j + 1].split("\r\n")[0].toLowerCase();
    }
  }
  events.push(event);
  console.log(event);
}

Fs.writeFileSync("../src/data/events.json", JSON.stringify(events));
