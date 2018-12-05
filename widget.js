(function() {
  <%= File.read(Rails.root.join("vendor/assets/javascripts/getElementsByClassName-1.0.1.js")) %>
  <%= File.read(Rails.root.join("vendor/assets/javascripts/ready.js")) %>
  domready(function() {
    var widget_link, iframe, i, widget_links;
    widget_links = getElementsByClassName('');
    for (i = 0; i < widget_links.length; i++) {
      widget_link = widget_links[i];
      iframe = document.createElement('iframe');
      iframe.setAttribute('src', widget_link.href + "/demoProject.html");
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('scrolling', 'no');
      widget_link.parentNode.replaceChild(iframe, widget_link);
    }
  });

})();