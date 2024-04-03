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
                <p v-if="item.event"><p style="color: green; font-size:11pt;">{{ item.event }}</p></p>
              </td>
              <td><a v-if="item.slide" :href="item.slide">[slide]</a><a v-if="item.record" :href="item.record">[record]</a></td>
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
  record?: string;
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
    week: 1,
    date: "Fri, Jan 19",
    lecture: "Introduction to Trustworthy AI (cont.)",
    slide: import.meta.env.BASE_URL + "01-intro.pdf",
  },
  {
    week: 2,
    date: "Mon, Jan 22",
    lecture: "Deep Learning Basics, CNNs, and RNNs",
    slide: import.meta.env.BASE_URL + "02-basics.pdf",
    hw: import.meta.env.BASE_URL + "hw1.zip",
    new_api: true,
  },
  {
    week: 2,
    date: "Wed, Jan 24",
    lecture: "No class",
    // slide: import.meta.env.BASE_URL + "02-basics.pdf",
    reading: "Trustworthy Machine Learning Book – Chapter 1.1 Defining Trust - http://www.trustworthymachinelearning.com/",
    event: "The reading assignment will be in place of Wed's class"
  },
  {
    week: 3,
    date: "Mon, Jan 29",
    lecture: "Transformers",
    slide: import.meta.env.BASE_URL + "03-transformers.pdf",
    record: "https://yale.zoom.us/rec/share/YSmMakqHoY9yU0kdq1yuXjHaWyGYTpMDakk6j3zJvpQm-5bkkvj65n0B-4KgwkrA.1luDA1L7fxikpzdi?startTime=1706556830000",
    colab: import.meta.env.BASE_URL + "colab1.zip",
    new_api: true,
  },
  {
    week: 3, 
    date: "Web, Jan 31",
    lecture: "Explainability of Neural Networks (XAI)",
    slide: import.meta.env.BASE_URL + "04-explainability.pdf",
    record: "https://yale.zoom.us/rec/share/KNJmIlL31cnnnR_5fBco7DTAakXpX2EtADO5_0xQqcEAno0DS6_q08HbD2JW2M4v.SDKVhzsqh_MwYUGy?startTime=1706729674000",
    // deadline: "[Due] Finalize project groups",
  },
  {
    week: 4, 
    date: "Mon, Feb 5",
    lecture: "Explainability of Neural Networks (XAI) (cont.)",
    slide: import.meta.env.BASE_URL + "05-surrogates.pdf",
    // deadline: "[Due] Finalize project groups",
  },
  {
    week: 4, 
    date: "Wed, Feb 7",
    lecture: "Explainability Evaluation and Global Explanability",
    slide: import.meta.env.BASE_URL + "06-explainability_eval.pdf",
    record: "https://yale.zoom.us/rec/share/c81nDhP_jssGtcxt2QLiRrg6xJTZ6hl8T-dgUbF7wwSq_gioeBB1K3GmCk4YoZr7.bVFwL5VAgsrzu4Fp?startTime=1707334489000"
    // deadline: "[Due] Finalize project groups",
  },
  {
    week: 5, 
    date: "Mon, Feb 12",
    lecture: "Explainability Evaluation and Global Explanability (cont.)",
    slide: import.meta.env.BASE_URL + "06-explainability_eval.pdf",
    // record: "https://yale.zoom.us/rec/share/c81nDhP_jssGtcxt2QLiRrg6xJTZ6hl8T-dgUbF7wwSq_gioeBB1K3GmCk4YoZr7.bVFwL5VAgsrzu4Fp?startTime=1707334489000"
    // deadline: "[Due] Finalize project groups",
  },
  {
    week: 5, 
    date: "Wed, Feb 14",
    lecture: "Adversarial Attacks and Defenses",
    slide: import.meta.env.BASE_URL + "07-adversarial_evasion.pdf",
    record: "https://yale.zoom.us/rec/share/d5z_5030Ol3BdqNzZEt_Xf61yZ4Daq_ls4BJ6kJGELlNJe7wffNcZDTMpBSw5_QN.aHtxKILdYPR0lqyS"
    // deadline: "[Due] Finalize project groups",
  },
  {
    week: 6, 
    date: "Mon, Feb 19",
    lecture: "In-class project discussions",
    slide: import.meta.env.BASE_URL + "in-class-brainstorming.pdf",
  },
  {
    week: 6, 
    date: "Wed, Feb 21",
    lecture: "Adversarial Attacks and Defenses (cont.)",
    slide: import.meta.env.BASE_URL + "08-defense_poison.pdf",
    deadline: "[Due] Written homework 1",
  },
  {
    week: 7, 
    date: "Mon, Feb 26",
    lecture: "Adversarial Attacks and Defenses (cont.)",
    slide: import.meta.env.BASE_URL + "08-defense_poison.pdf",
    record: "https://yale.zoom.us/rec/share/46z4jI-sRHhCJ_EnuR3Y0zhREaKS-P0gKbUMSqH6fTUF-PEdatdO5fckyPziLm90.hDrvebMpdESsxzMv",
    deadline: "[Due] Programming homework 1",
  },
  {
    week: 7, 
    date: "Mon, Feb 26",
    lecture: "Adversarial Attacks and Defenses (cont.)",
    slide: import.meta.env.BASE_URL + "08-defense_poison.pdf",
    deadline: "[Due] Programming homework 1",
  },
  {
    week: 7, 
    date: "Wed, Feb 28",
    lecture: "Verification and Robust Reinforecement Learning",
    slide: import.meta.env.BASE_URL + "09-verification.pdf",
    colab: import.meta.env.BASE_URL + "colab2.zip",
    new_api: true,
  },
  {
    week: 7, 
    date: "Fri, March 1",
    deadline: "[Due] Project proposal",
    lecture: "No class",
  },
  {
    week: 8, 
    date: "Mon, March 4",
    lecture: "In-class work session",
    slide: import.meta.env.BASE_URL + "in-class-programming.pdf",
  },
  {
    week: 8, 
    date: "Web, March 6",
    lecture: "Guest lecture (Zoom)",
    hw: import.meta.env.BASE_URL + "hw2.zip",
    new_api: true,
  },
  {
    week: 11, 
    date: "Mon, March 25",
    lecture: "Differential Privacy",
    slide: import.meta.env.BASE_URL + "10-privacy.pdf",
  },
  {
    week: 11, 
    date: "Wed, March 27",
    lecture: "Differential Privacy (cont.)",
    slide: import.meta.env.BASE_URL + "10-privacy.pdf",
  },
  {
    week: 12, 
    date: "Mon, April 1",
    lecture: "(Guest Lecture) Differential Privacy",
    slide: import.meta.env.BASE_URL + "11-gautam_DP.pdf",
  },
  {
    week: 12, 
    date: "Wed, April 3",
    deadline: "[Due] Programming Homework 2",
    lecture: "",
  },
  {
    week: 12, 
    date: "Fri, April 5",
    deadline: "[Due] Project milestone",
    lecture: "No class",
  },
  {
    week: 13, 
    date: "Wed, April 10",
    deadline: "[Due] Written Homework 2",
    lecture: "",
  },
  {
    week: 15, 
    date: "Wed, April 24",
    lecture: "Exam",
  },
  {
    week: 16, 
    date: "Fri, May 5",
    lecture: "No class",
    deadline: "[Due] Final project report",
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
