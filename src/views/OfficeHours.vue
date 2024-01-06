<template>
    <v-container>
        <v-row>
            <v-col>
                <v-sheet class="pa-8" elevation="6">
                    <h1>Office Hours Calendar</h1>
                    <div style="margin-top: 2em;">
                        <vue-cal style="height: 1000px;" :events="events" :disable-views="['years', 'year']"
                            :time-cell-height="100" active-view="month" events-on-month-view=true />
                    </div>
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'

import { defineComponent } from "vue";

function time_number_to_string(time: number) {
    if (time - Math.floor(time) < 0.5) {
        return String(Math.floor(time)) + ":00"
    } else {
        return String(Math.floor(time)) + ":30"
    }
}

var recesses = [
    {
        start: new Date("2023-10-17"),
        end: new Date("2023-10-23")
    },
    {
        start: new Date("2023-11-17"),
        end: new Date("2023-11-27")
    },
]

function getRecurringEventsStartEnd(start: string, end: string, day: number, name: string, loc: string, zoom_link: string, start_time: number, end_time: number) {
    var dates: { [key: string]: string }[] = []
    var start_date = new Date(start)
    var end_date = new Date(end)
    while (start_date < end_date) {
        start_date.setDate(start_date.getDate() + (((day + 7 - start_date.getDay()) % 7) || 7))
        var date = start_date.getFullYear() + '-' + String(start_date.getMonth() + 1).padStart(2, '0') + '-' + String(start_date.getDate()).padStart(2, '0')
        let in_recess = false
        for (let recess of recesses) {
            let date_object = new Date(date)
            if (date_object.getTime() >= recess.start.getTime() && date_object.getTime() < recess.end.getTime()) {
                in_recess = true
                break
            }
        }

        if (date == "2023-11-20") {
            in_recess = true
        }

        var contents: string[] = []
        if (loc) {
            contents.push(loc)
        }
        if (zoom_link) {
            contents.push(`<a href=${zoom_link}>zoom</a>`)
        }

        if (!in_recess) {
            dates.push({
                title: name,
                content: contents.join("<br>"),
                start: date + ' ' + time_number_to_string(start_time),
                end: date + ' ' + time_number_to_string(end_time),
            })
        }
    }
    return dates
}

function getRecurringEvents(day: number, name: string, loc: string, zoom_link: string, start_time: number, end_time: number) {
    return getRecurringEventsStartEnd("2023-08-30", "2023-12-08", day, name, loc, zoom_link, start_time, end_time)
}

function getRexEvents() {
    return getRecurringEvents(1, "Rex Ying", "17 Hillhouse, Room 332", "", 15, 16)
}

function getJialinEvents() {
    return getRecurringEvents(5, "Jialin Chen", "Dunham 431", "", 14, 15)
}

function getYuhangEvents() {
    return getRecurringEvents(2, "Yuhang Chen", "Marx Library C49", "", 10, 11)
}

function getAgastyaEvents() {
    return getRecurringEvents(3, "Agastya Rana", "", "https://yale.zoom.us/j/91070275564", 20, 21)
}

function getMahdiEvents() {
    return getRecurringEvents(4, "Mahdi Soleimani", "AKW 209", "https://yale.zoom.us/my/matt.so", 13.5, 14.5)
}

function getMeiliEvents() {
    return getRecurringEvents(5, "Meili Gupta", "WLH 015", "https://yale.zoom.us/j/9734866003", 10, 11)
}

function getEvents() {
    return getRexEvents()
            .concat(getYuhangEvents())
            .concat(getAgastyaEvents())
            .concat(getMahdiEvents())
            .concat(getMeiliEvents())
            .concat(getJialinEvents())
}


export default defineComponent({
    components: { VueCal },
    data: () => ({
        events: getEvents()
    })
})
</script>

<style>

.vuecal__event-title {
  font-size: 1.2em;
  font-weight: bold;
  /* margin: 4px 0 8px; */
}

.vuecal__event-time {
  display: inline-block;
  /* margin-bottom: 12px;
  padding-bottom: 12px; */
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

.vuecal__event-content {
  font-style: italic;
  font-size: 0.8em;
}
</style>