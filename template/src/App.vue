<script setup<% if (useTs) { %> lang="ts"<% } %>>
  onLaunch(() => {
    console.log('App Launch');
  });
  onShow(() => {
    console.log('App Show');
  });
  onHide(() => {
    console.log('App Hide');
  });
</script>
<style>
<% if (uiType === 'TuniaoUI') { %>@import '@tuniao/tn-style/dist/uniapp/index.css'; <% } %>
</style>
