<horizontal-navbar>
<div class="android-navigation-container">
  <nav class="android-navigation mdl-navigation">
    <a each={ tab, i in config.views } class="mdl-navigation__link mdl-typography--text-uppercase { is-active: parent.isActiveTab(tab.ref) }" onclick={ parent.toggleTab }>{tab.title}</a>
  </nav>
</div>

this.config = this.opts.config || {};
  this.activeTab = this.config.views[0];


  isActiveTab(tab) {
    return this.activeTab === tab;
  }

  toggleTab(e) {
    this.activeTab = e.item.tab.ref;
    riot.route(this.activeTab);
    return true
  }


</horizontal-navbar>