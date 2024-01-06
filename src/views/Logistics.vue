<template>
    <v-container>
        <v-row>
            <v-col>
                <v-sheet class="pa-8" elevation="6">
                    <h1>Welcom to CPSC 471/571!</h1>
                    <ul>
                        <li>Lectures are on Monday/Wednesday 16:00PM - 17:15PM EDT in <a
                                href="https://cpsc.yale.edu/department-information/yale-computer-science-faq/computer-science-department-akw">Mason Laboratory 211
                            </a>.
                        <ul>
                            <li>Most of the lecture will be in-person.</li>
                            <li>There will be 2-3 guest lectures, some of which might be held remotely, including GNN library applications of graph learning.</li>
                        </ul></li>
                        <li>This is a new course, and feedbacks are especially welcomed!
                            <ul>
                                <li>Many of the content comes from relatively recent research (>2017)</li>
                                <li>Lecture style, homework, projects, ...</li>
                            </ul>
                        </li>
                        <li>Slides will be posted here before classes.</li>

                    </ul>
                </v-sheet>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-sheet class="pa-8" elevation="6">
                    <h1>Prerequisites</h1>
                    <ul>
                        <li>The course has relevance to a wide range of topics and background in graph or ML is always
                            helpful</li>
                        <li>Minimum prerequisites
                            <ul>
                                <li><a href="https://courses.yale.edu/?keyword=CPSC%20201&srcdb=999999">CPSC 201</a>, <a href="https://courses.yale.edu/?keyword=CPSC%20223&srcdb=999999">CPSC 223</a> and one of <a href="https://courses.yale.edu/?keyword=CPSC%20365&srcdb=999999">CPSC 365</a> and <a href="https://courses.yale.edu/?keyword=CPSC%20366&srcdb=999999">CPSC 366</a>.</li>
                                <li>Nice-to-have background (have taken a course or have done research)
                                    <ul>
                                        <li>machine Learning (minimum: high familiarity with linear algebra and multi-variable calculus)</li>
                                        <li>algorithm and graph theory</li>
                                        <li>probability and statistics</li>
                                    </ul>
                                </li>
                                <li>Programming <ul>
                                        <li>You should be able to write non-trivial programs (in <b>Python</b>), as well
                                            as knowledge about common libaries such as NumPy (<b>Vectorization</b>), Pandas, etc.</li>
                                        <li>Ideally you have used <b>PyTorch</b> (or equivalent) before. But learning it
                                            is not too hard if you have good knowledge in machine learning.</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </v-sheet>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-sheet class="pa-8" elevation="6">
                    <h1>Readings</h1>
                    <h2>Recommended Readings</h2>
                    <ul>
                        <li>PyTorch <a href="https://pytorch.org/docs/stable/index.html">documentation</a> and <a href="https://pytorch.org/tutorials/">tutorial</a></li>
                        <li><a href="https://www.cs.mcgill.ca/~wlh/grl_book/">Graph Representation Learning Book</a> by Will
                        Hamilton</li>
                        <li>Research papers</li>
                    </ul>
                    <h2>Optional Readings</h2>
                    <ul>
                        <li>Please see <a :href="BASE_URL+'#/syllabus'">syllabus</a></li>
                        These will be very useful for course projects.
                    </ul>
                    <h2>
                        PyTorch Geometric Readings

                    </h2>
                    <ul>
                        <li>Python <a href="https://pytorch-geometric.readthedocs.io/en/latest/">Documentation</a>
                        </li>
                        <li><a href="https://github.com/pyg-team/pytorch_geometric">GitHub</a> Repository (for the
                            latest development)</li>
                    </ul>
                </v-sheet>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-sheet class="pa-8" elevation="6">
                    <h1>Communication</h1>
                    <h2>Ed Discussion</h2>
                    <ul>
                        <li>Sign up <a href="https://edstem.org/us/courses/44408/discussion/">Ed Discussion</a> with your @yale.edu email.</li>
                        <li>Please participate and help each other, but
                            <ul>
                                <li>Annotate your questions</li>
                                <li>Search for answers before you ask</li>
                                <li>Don't post code</li>
                            </ul>
                        </li>
                        <li><b>We do not encourage private posts on Ed Discussion</b> as they reduce the efficience with which we serve all students.</li>
                    </ul>
                    <h2>Mailing List</h2>
                    <ul>
                        <li>Teaching staff: <a
                                href="mailto:cpsc483_23fall_staff@googlegroups.com">cpsc483_23fall_staff@googlegroups.com</a></li>
                    </ul>

                    <h2>Office Hours</h2>
                    <p>Refer to <a :href="BASE_URL+'#/officehours'">Office Hours</a>.</p>

                    <h3>We will post course annoucements to this website. Make sure you check it regularly. </h3>
                </v-sheet>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-sheet class="pa-8" elevation="6">
                    <h1>Graph Machine Learning Tools</h1>
                    <ul>
                        <li>We use <a href="https://github.com/rusty1s/pytorch_geometric">PyTorch Geometric (PyG)</a>
                        </li>
                        <li>We further recommend:
                            <ul>
                                <li><a href="https://github.com/snap-stanford/deepsnap">DeepSnap</a>: Libary that
                                    assists
                                    deep learning on graphs.</li>
                                <li><a
                                        href="https://pytorch-geometric.readthedocs.io/en/latest/notes/graphgym.html">GraphGym</a>:
                                    Platform for
                                    designing Graph Neural Networks.</li>
                                Both platforms are very helpful for the course project (save your time & provide
                                advanced GNN funcionalities)
                            </ul>
                        </li>
                        <li>Other network analytics tools:
                            <ul>
                                <li><a href="https://snap.stanford.edu/snappy/">SNAP.PY</a></li>
                                <li><a href="https://networkx.org/">NetworkX</a></li>
                                <li><a href="https://graph-tool.skewed.de/">Graph-Tool</a></li>
                                <li><a href="https://graphviz.org/">Graphvis</a></li>

                            </ul>
                        </li>
                    </ul>
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    data() {
        return {
            BASE_URL: import.meta.env.BASE_URL
        }
    }
})
</script>
