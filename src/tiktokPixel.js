// utils/tiktokPixel.js
export const initTikTokPixel = (pixelId) => {
  // Load TikTok Pixel script
  const script = document.createElement("script");
  script.innerHTML = `
    !function (w, d, t) {
      w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};
      ttq.load('${pixelId}');
      ttq.page();
    }(window, document, 'ttq');
  `;
  document.head.appendChild(script);
};

// Track custom events
export const trackTikTokEvent = (eventName, properties = {}) => {
  if (window.ttq) {
    window.ttq.track(eventName, properties);
  }
};

// Standard TikTok events
export const tiktokEvents = {
  // Page view (automatically tracked)
  pageView: () => {
    if (window.ttq) window.ttq.page();
  },

  // E-commerce events
  viewContent: (contentId, contentType = "product") => {
    trackTikTokEvent("ViewContent", {
      content_id: contentId,
      content_type: contentType,
    });
  },

  addToCart: (contentId, value, currency = "USD") => {
    trackTikTokEvent("AddToCart", {
      content_id: contentId,
      value: value,
      currency: currency,
    });
  },

  initiateCheckout: (value, currency = "USD", contents = []) => {
    trackTikTokEvent("InitiateCheckout", {
      value: value,
      currency: currency,
      contents: contents,
    });
  },

  completePayment: (value, currency = "USD", contentId = null) => {
    trackTikTokEvent("CompletePayment", {
      value: value,
      currency: currency,
      content_id: contentId,
    });
  },

  // Lead generation
  submitForm: (formType = "contact") => {
    trackTikTokEvent("SubmitForm", {
      form_type: formType,
    });
  },

  // Custom events for your app
  signUp: (method = "email") => {
    trackTikTokEvent("CompleteRegistration", {
      registration_method: method,
    });
  },

  subscribe: (subscriptionType, value, currency = "USD") => {
    trackTikTokEvent("Subscribe", {
      subscription_type: subscriptionType,
      value: value,
      currency: currency,
    });
  },
};

// Enhanced e-commerce tracking
export const trackPurchase = (orderId, value, currency, items = []) => {
  trackTikTokEvent("CompletePayment", {
    order_id: orderId,
    value: value,
    currency: currency,
    contents: items.map((item) => ({
      content_id: item.id,
      content_name: item.name,
      content_category: item.category,
      quantity: item.quantity,
      price: item.price,
    })),
  });
};
