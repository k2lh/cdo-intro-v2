<template id="pageheadSolutions">
  <div class="page-header">
    <div class="container-head">
      <div class="sitenav-menu-container">
        <div class="sitenav-menu-name">
          Discover
        </div>
        <div class="sitenav-menu-list">
          <ul role="menubar">
            <!-- <li role="presentation">
              <router-link to="/requests" class="bx--tabs__nav-link" role="tab">Open a Service Request</router-link>
            </li> -->
            <li role="presentation">
             <router-link to="/infodpe" class="bx--tabs__nav-link" role="tab">For DPEs</router-link>
            </li>
            <li role="presentation">
              <router-link to="/infope" class="bx--tabs__nav-link" role="tab">For PEs/Sales</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pageheadDiscover',
  data() {
    return {
      isActive: false
    }
  }
};
</script>
