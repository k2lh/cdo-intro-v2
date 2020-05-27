<template id="pageheadSolutions">
  <div class="page-header">
    <div class="container-head">
      <div class="sitenav-menu-container">
        <div class="sitenav-menu-name">
          Solutions
        </div>
        <div class="sitenav-menu-list">
          <ul role="menubar">
            <li role="presentation">
              <router-link to="/clarify" class="bx--tabs__nav-link" role="tab">Clarify</router-link>
            </li>
            <li role="presentation">
              <router-link to="/evaluate" class="bx--tabs__nav-link" role="tab">Evaluate</router-link>
            </li>
            <li role="presentation">
              <router-link to="/visualize" class="bx--tabs__nav-link" role="tab">Visualize</router-link>
            </li>
            <!-- <li role="presentation">
              <router-link to="/implement" class="bx--tabs__nav-link" role="tab">Implement</router-link>
            </li> -->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pageheadSolutions',
  data() {
    return {
      isActive: false
    }
  }
};
</script>
