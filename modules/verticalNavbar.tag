<vertical-navbar>
  
    
      <span class="mdl-layout-title">
          <img class="android-logo-image" src="images/android-logo-white.png">
        </span>
        <nav class="mdl-navigation">
          <a each={ tab, i in config.views } class="mdl-navigation__link mdl-typography--text-uppercase { is-active: parent.isActiveTab(tab.ref) }" onclick={ parent.toggleTab }>{tab.title}</a>
        </nav>

<script>

  this.config = this.opts || {};
  this.activeTab = this.config.views[0];


  isActiveTab(tab) {
    return this.activeTab === tab;
  }

  toggleTab(e) {
    this.activeTab = e.item.tab.ref;
    riot.route(this.activeTab);
    return true
  }

</script>


</vertical-navbar>