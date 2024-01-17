<template>
  <v-container>
    <v-row>
      <v-col>
        <v-table>
          <thead>
            <tr>
              <th>Week</th>
              <th>Date</th>
              <th>Lecture</th>
              <th>Slides</th>
              <th>Readings</th>
              <th></th>
              <th>Deadlines</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items">
              <td><b>{{ item.week }}</b></td>
              <td>{{ item.date }}</td>
              <td>
                <p v-if="item.lecture == 'No class'"><p style="color:grey;">{{ item.lecture }}</p></p>
                <p v-else>{{ item.lecture }}</p>
              </td>
              <td><a v-if="item.slide" :href="item.slide">[slide]</a></td>
              <td>{{ item.reading }}</td>
              <td>
                <div v-if="item.new_api">
                  <div v-if="item.hw">
                    <a :href="item.hw">[{{ baseName(item.hw) }}]</a> released
                  </div>
                  <br v-if="item.colab" />
                  <div v-if="item.colab">
                    <a :href="item.colab">[{{ baseName(item.colab) }}]</a>
                    released
                  </div>
                </div>
                <div v-else>
                  {{ item.event }}
                </div>
              </td>
              <td><p style="color:red;">{{ item.deadline }}</p></td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface Item {
  week: number;
  date: string;
  lecture: string;
  slide?: string;
  reading?: string;
  event?: string;
  deadline?: string;
  hw?: string;
  colab?: string;
  new_api?: boolean;
}

enum EventType {
  homework,
  colab,
}

var items: Item[] = [
  {
    week: 1,
    date: "Wed, Jan 17",
    lecture: "Introduction to Trustworthy AI",
    slide: import.meta.env.BASE_URL + "01-intro.pdf",
  },
  {
    week: 3, 
    date: "Fri, Feb 02rd",
    lecture: "No class",
    deadline: "[Due] Finalize project groups",
  },
  {
    week: 5, 
    date: "Fri, Feb 14th",
    lecture: "In-class project discussions",
  },
  {
    week: 7, 
    date: "Fri, March 1st",
    deadline: "[Due] Project proposal",
    lecture: "No class",
  },
  {
    week: 8, 
    date: "Wed, March 6th",
    lecture: "In-class work session",
  },
  {
    week: 12, 
    date: "Fri, April 5th",
    deadline: "[Due] Project milestone",
    lecture: "No class",
  },
  {
    week: 15, 
    date: "Wed, April 24th",
    lecture: "Exam",
  },
];

export default defineComponent({
  name: "Syllabus",

  data: () => ({
    items: items,
  }),
  methods: {
    baseName(str) {
      var base = new String(str).substring(str.lastIndexOf("/") + 1);
      if (base.lastIndexOf(".") != -1)
        base = base.substring(0, base.lastIndexOf("."));
      return base;
    },
  },
});
</script>
