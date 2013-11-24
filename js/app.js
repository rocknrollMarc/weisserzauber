// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation({
  orbit: {
    animation: 'slide',
    timer_speed: 1000,
    pause_on_hover: true,
    animation_speed: 500,
    navigation_arrows: true,
    bullets: false,
    next_on_click: true,
    container_class: 'orbit-container',
    next_class: 'orbit-next',
    prev_class: 'orbit-prev',
    timer_container_class: 'orbit-timer',
    timer_paused_class: 'paused',
    slides_container_class: 'orbit-slides-container',
    bullets_active_class: 'active',
    slide_number_class: 'orbit-slide-number',
    caption_class: 'orbit-caption',
    active_slide_class: 'active',
    orbit_transition_class: 'orbit-transitioning',
    timer: true
  },
  topbar:{
    sticky_class: 'sticky',
    custom_back_text: true,
    back_text: "back",
    scrolltop: true,
    mobile_show_parent_link: false
  }
});
