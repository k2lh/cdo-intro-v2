<template>
  <div class="page-header">
    <div class="container-head">
      <div class="sitenav-menu-container">
        <div class="sitenav-menu-name">
          Learn more
        </div>
        <div class="sitenav-menu-list">
          <ul role="menubar">
            <li role="presentation">
              <router-link to="/education" class="bx--tabs__nav-link" role="tab">Education</router-link>
            </li>
            <li role="presentation">
              <router-link to="/videos" class="bx--tabs__nav-link" role="tab">Videos</router-link>
            </li>
            <li role="presentation">
              <router-link to="/articles" class="bx--tabs__nav-link" role="tab">Articles</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  name: 'pageheadLibrary'
};
</script>
