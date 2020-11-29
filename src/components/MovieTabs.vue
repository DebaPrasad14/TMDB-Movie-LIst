<template>
  <TabContainer>
    <TabNavbar>
      <TabNavItem
        exact
        v-for="tab in tabList"
        :key="tab.key"
        :routePath="tab.path"
      >
        {{ tab.name }}
      </TabNavItem>
    </TabNavbar>
    <TabBody class="mt-4">
      <router-view :key="$route.fullPath"></router-view>
    </TabBody>
  </TabContainer>
</template>

<script>
import TabContainer from "./tabs/TabContainer";
import TabNavbar from "./tabs/TabNavbar";
import TabNavItem from "./tabs/TabNavItem";
import TabBody from "./tabs/TabBody";

export default {
  components: {
    TabContainer,
    TabNavbar,
    TabNavItem,
    TabBody,
  },
  data() {
    return {
      tabList: [
        { key: "new-release", name: "New Release", path: "new-release" },
        { key: "upcoming", name: "Upcoming", path: "upcoming" },
        { key: "action", name: "Action", path: "action" },
        { key: "comedy", name: "Comedy", path: "comedy" },
        { key: "crime", name: "Crime", path: "crime" },
        { key: "drama", name: "Drama", path: "drama" },
        { key: "thriller", name: "Thriller", path: "thriller" },
        { key: "sci-fi", name: "Sci-Fi", path: "sci-fi" },
        { key: "family", name: "Family", path: "family" },
        { key: "horror", name: "Horror", path: "horror" },
      ],
    };
  },
  mounted() {
    if (this.$route.name === "movie-list") {
      try {
        this.$router.push({
          path: `${this.$route.fullPath}/${this.tabList[0].path}`,
        });
      } catch (error) {
        // eslint-disable-next-line
        console.log("tab route error:: ", error);
      }
    }
  },
  // watch: {
  //   $route(to) {
  //     if (to.name === "movie-list") {
  //       this.$router.push({
  //         path: `${this.$route.fullPath}/${this.tabList[0].path}`,
  //       });
  //     }
  //   },
  // },
};
</script>
