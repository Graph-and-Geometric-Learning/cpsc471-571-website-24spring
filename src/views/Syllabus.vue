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
            <tr v-for="item in items" :key="item.date">
              <td><b>{{ item.week }}</b></td>
              <td>{{ item.date }}</td>
              <td>
                <p v-if="item.lecture == 'No class'" style="color:grey;">{{ item.lecture }}</p>
                <p v-else>{{ item.lecture }}</p>
                <p v-if="item.event" style="color: green; font-size:11pt;">{{ item.event }}</p>
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

var items: Item[] = [
  {
    week: 1,
    date: "Thu, Aug 28",
    lecture: "Introduction to Trustworthy AI",
  },
  {
    week: 2,
    date: "Tue, Sep 2",
    lecture: "Introduction to Trustworthy AI (cont.)",
  },
  {
    week: 2,
    date: "Thu, Sep 4",
    lecture: "Deep Learning Basics, CNNs, and RNNs",
  },
  {
    week: 3,
    date: "Tue, Sep 9",
    lecture: "Transformers",
  },
  {
    week: 3,
    date: "Thu, Sep 11",
    lecture: "Explainability of Neural Networks (XAI)",
    hw: import.meta.env.BASE_URL + "hw1_placeholder.zip",
    new_api: true,
  },
  {
    week: 4,
    date: "Tue, Sep 16",
    lecture: "Explainability of Neural Networks (XAI) (cont.)",
  },
  {
    week: 4,
    date: "Thu, Sep 18",
    lecture: "Explainability Evaluation and Global Explanability",
  },
  {
    week: 5,
    date: "Tue, Sep 23",
    lecture: "Explainability Evaluation and Global Explanability (cont.)",
  },
  {
    week: 5,
    date: "Thu, Sep 25",
    lecture: "LLM Interpretability",
  },
  {
    week: 6,
    date: "Tue, Sep 30",
    lecture: "Adversarial Attacks and Defenses",
    deadline: "[Due] hw1",
  },
  {
    week: 6,
    date: "Thu, Oct 2",
    lecture: "In-class project discussions",
    hw: import.meta.env.BASE_URL + "hw2_placeholder.zip",
    new_api: true,
  },
  {
    week: 7,
    date: "Tue, Oct 7",
    lecture: "Adversarial Attacks and Defenses (cont.)",
  },
  {
    week: 7,
    date: "Thu, Oct 9",
    lecture: "Adversarial Attacks and Defenses (cont.)",
  },
  {
    week: 7,
    date: "Fri, Oct 10",
    lecture: "No class",
    deadline: "[Due] Project proposal",
  },
  {
    week: 8,
    date: "Tue, Oct 14",
    lecture: "Verification and Robust Reinforecement Learning",
  },
  {
    week: 9,
    date: "Tue, Oct 21",
    lecture: "LLM Adversarial Robustness",
  },
  {
    week: 9,
    date: "Thu, Oct 23",
    lecture: "In-class work session",
    deadline: "[Due] hw2",
  },
  {
    week: 10,
    date: "Tue, Oct 28",
    lecture: "Guest lecture (Zoom)",
    hw: import.meta.env.BASE_URL + "hw3_placeholder.zip",
    new_api: true,
  },
  {
    week: 10,
    date: "Thu, Oct 30",
    lecture: "Differential Privacy",
  },
  {
    week: 11,
    date: "Tue, Nov 4",
    lecture: "Differential Privacy (cont.)",
  },
  {
    week: 11,
    date: "Thu, Nov 6",
    lecture: "Machine Unlearning",
  },
  {
    week: 12,
    date: "Tue, Nov 11",
    lecture: "Federated Learning",
  },
  {
    week: 12,
    date: "Thu, Nov 13",
    lecture: "Quantization",
  },
  {
    week: 13,
    date: "Tue, Nov 18",
    lecture: "Algorithmic Fairness in ML",
  },
  {
    week: 13,
    date: "Thu, Nov 20",
    lecture: "Algorithmic Fairness in ML",
    deadline: "[Due] hw3",
  },
  {
    week: 15,
    date: "Tue, Dec 2",
    lecture: "",
  },
  {
    week: 15,
    date: "Thu, Dec 4",
    lecture: "Exam",
  },
  {
    week: 16,
    date: "Mon, Dec 15",
    lecture: "No class",
    deadline: "[Due] Final project report (strict deadline)",
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
