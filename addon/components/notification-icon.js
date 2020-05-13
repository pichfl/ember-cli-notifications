import Component from '@ember/component';
import layout from '../templates/components/notification-icon';
import { computed } from '@ember/object';

export default Component.extend({
  layout,
  tagName: '',

  notificationSVGPath: computed('notification.type', function () {
    switch (this.get('notification.type')) {
      case 'error':
      case 'info':
        return 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z';
      case 'success':
        return 'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z';
      case 'warning':
        return 'M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z';
    }

    return '';
  }),
});
