<template>
  <div class="page-header">
    <div class="container-head">
      <div class="sitenav-menu-container">
        <div class="sitenav-menu-name">
          Community
        </div>
        <div class="sitenav-menu-list">
          <ul role="menubar">
            <li role="presentation">
              <router-link to="/community" class="bx--tabs__nav-link" role="tab">About</router-link>
            </li>
            <li role="presentation">
              <router-link to="/advocates" class="bx--tabs__nav-link" role="tab">Data Advocates</router-link>
            </li>
            <li role="presentation">
              <router-link to="/events" class="bx--tabs__nav-link" role="tab">Events</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  name: 'pageheadCommunity'
};
</script>
