<template>
  <div class="page-header">
    <div class="container-head">
      <div class="sitenav-menu-container">
        <div class="sitenav-menu-name">
          Projects
        </div>
        <div class="sitenav-menu-list">
          <ul role="menubar">
            <li role="presentation">
              <router-link to="/projects/core" class="bx--tabs__nav-link" role="tab">Co-creation</router-link>
            </li>
            <li role="presentation">
              <router-link to="/projects/active" class="bx--tabs__nav-link" role="tab">Active</router-link>
            </li>
            <li role="presentation">
              <router-link to="/projects/inactive" class="bx--tabs__nav-link" role="tab">Inactive</router-link>
            </li>
            <li role="presentation">
              <router-link to="/activity" class="bx--tabs__nav-link" role="tab">Activity Log</router-link>
            </li>
            <li role="presentation">
              <router-link to="/engagements" class="bx--tabs__nav-link" role="tab">Engagements</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pageheadProjects'
};
</script>
