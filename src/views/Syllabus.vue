<template>
  <v-container>
    <v-row>
      <v-col>
        <v-table>
          <thead>
            <tr>
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
              <td>{{ item.date }}</td>
              <td>
                {{ item.lecture }}
                <a v-if="item.date === 'Mon 10/02'" href="https://yale.zoom.us/j/94207787464?from=addon">[Zoom]</a>
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
              <td>{{ item.deadline }}</td>
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
    date: "Wed 08/30",
    lecture: "Background: Machine Learning and Graphs as Data Structure",
    slide: import.meta.env.BASE_URL + "01-intro.pdf",
  },
  {
    date: "Fri 09/01",
    lecture: "Plethora of Tasks and Features on Graphs",
    slide: import.meta.env.BASE_URL + "02-tasks.pdf",
    event: "[HW1]Released\n[Colab1] Released",
    hw: import.meta.env.BASE_URL + "hw1.zip",
    colab: import.meta.env.BASE_URL + "colab1.ipynb",
    new_api: true,
  },
  {
    date: "Wed 09/06",
    lecture: "Graph Neural Networks Models",
    slide: import.meta.env.BASE_URL + "03-GNN.pdf",
  },
  {
    date: "Mon 09/11",
    lecture: "Graph Neural Networks Designs",
    slide: import.meta.env.BASE_URL + "04-GNN_design.pdf",
  },
  {
    date: "Wed 09/13",
    lecture: "GNN Implementations, Objectives and Loss Functions",
    slide: import.meta.env.BASE_URL + "05-GNN_training.pdf",
  },
  {
    date: "Fri 09/15",
    lecture: "No Class",
    event: "[HW2] Released",
    deadline: "[HW1] Due",
    hw: import.meta.env.BASE_URL + "hw2.zip",
    new_api: true,
  },
  {
    date: "Mon 09/18",
    lecture: "Scalable GNN Architectures",
    slide: import.meta.env.BASE_URL + "06-scalable.pdf",
  },
  {
    date: "Wed 09/20",
    lecture: "Graph Attention Networks and Heterogeneous Graphs",
    slide: import.meta.env.BASE_URL + "07-graph_attention.pdf",
  },
  {
    date: "Fri 09/22",
    lecture: "No Class",
    event: "[Colab2] Released",
    deadline: "[Colab1] Due",
    colab: import.meta.env.BASE_URL + "colab2.ipynb",
    new_api: true,
  },
  {
    date: "Mon 09/25",
    lecture: "GNNs and Transformers",
    slide: import.meta.env.BASE_URL + "08-transformers_and_graphs.pdf"
  },
  {
    date: "Wed 09/27",
    lecture: "Theory of Graph Neural Networks",
    slide: import.meta.env.BASE_URL + "09-theory.pdf",
  },
  {
    date: "Mon 10/02",
    lecture: "Spectral GNNs",
    slide: import.meta.env.BASE_URL + "Spectral_GNN_Slides.pdf",
    deadline: "[HW2] Due",
  },
  {
    date: "Wed 10/04",
    lecture: "GNN Expressive Power",
    slide: import.meta.env.BASE_URL + "10-expressive_gnns.pdf",
  },
  {
    date: "Mon 10/09",
    deadline: "[Colab2] Due",
    lecture: "PyTorch Geometric Library (Part 1)",
    slide: import.meta.env.BASE_URL + "12_pyg.pdf",
  },
  {
    date: "Wed 10/11",
    lecture: "PyTorch Geometric Library (Part 2)",
  },
  {
    date: "Mon 10/16",
    lecture: "Graph Transformers",
    slide: import.meta.env.BASE_URL + "14-graph_transformer.pdf",
  },
  {
    date: "Mon 10/23",
    lecture: "Self-supervised Learning with GNNs",
    slide: import.meta.env.BASE_URL + "15-unsupervised_learning.pdf",
    hw: import.meta.env.BASE_URL + "hw3.zip",
    new_api: true,
  },
  {
    date: "Wed 10/25",
    slide: import.meta.env.BASE_URL + "16-ssl_extension.pdf",
    lecture: "Foundation models and Pre-trained GNNs",
  },
  {
    date: "Fri 10/27",
    lecture: "No Class",
    colab: import.meta.env.BASE_URL + "colab3.ipynb",
    new_api: true,
  },
  {
    date: "Mon 10/30",
    slide: import.meta.env.BASE_URL + "17-xai_graphs.pdf",
    lecture: "Explaining GNN Predictions",
  },
  {
    date: "Wed 11/01",
    lecture: "Explaining GNN Predictions (Cont.)",
  },
  {
    date: "Mon 11/06",
    lecture: "Distributed Node Embeddings",
    slide: import.meta.env.BASE_URL + "18-node_embeddings.pdf",
  },
  {
    date: "Wed 11/08",
    event: "[HW3] Due",
    lecture: "Knowledge Graph Reasoning",
    slide: import.meta.env.BASE_URL + "19-kg.pdf",
  },
  {
    date: "Mon 11/13",
    lecture: "Graph Generative Models",
    slide: import.meta.env.BASE_URL + "20-deep-graph-generation.pdf",
  },
  {
    date: "Wed 11/15",
    lecture: "Hyperbolic Embeddings and Hyperbolic GNNs",
    slide: import.meta.env.BASE_URL + "21-hyperbolic.pdf",
  },
  {
    date: "Fri 11/17",
    lecture: "No Class",
    deadline: "[Colab3] Due",
    hw: import.meta.env.BASE_URL + "hw4.zip",
    new_api: true,
  },
  {
    date: "Wed 11/27",
    lecture: "Applications of Hyperbolic Representation Learning",
    slide: import.meta.env.BASE_URL + "22-hyperbolic_applications.pdf"
  },
  {
    date: "Mon 11/29",
    deadline: "[HW4] Due",
    lecture: "Knowledge Graph Logical Queries",
    slide: import.meta.env.BASE_URL + "23-reasoning.pdf",
    colab: import.meta.env.BASE_URL + "colab4.ipynb",
    new_api: true,
  },
  {
    date: "Wed 12/04",
    lecture: "Applications in Graphics, Robotics and Scientific Simulations",
    slide: import.meta.env.BASE_URL + "24-simulation.pdf",
  },
  {
    date: "Wed 12/06",
    lecture: "Final Exam",
  },
  {
    date: "Fri 12/08",
    lecture: "No Class",
    deadline: "[Colab4] Due",
  },
  {
    date: "Tue 12/12",
    lecture: "No Class",
    deadline: "[Final Project] Due"
  }
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
