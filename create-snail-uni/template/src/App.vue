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
<style lang="scss"><% if (uiType === 'TuniaoUI'){%>
@import '@tuniao/tn-style/dist/uniapp/index.css';<%}%><% if (uiType === 'Sard-ui'){%>@import 'sard-uniapp/index';
page,
  .sar-portal {
    font-family:
      system-ui,
      -apple-system,
      'Segoe UI',
      Roboto,
      'Helvetica Neue',
      'Noto Sans',
      'Liberation Sans',
      Arial,
      sans-serif,
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      'Noto Color Emoji',
      monospace;
    font-size: var(--sar-text-base);
    color: var(--sar-body-color);
    -webkit-tap-highlight-color: transparent;
  }
<%}%>
</style>
