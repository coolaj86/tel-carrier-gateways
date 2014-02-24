'use strict';
// HISTORIC
// this is a compiled list of known carriers that have not yet
// yet been seen in the wild. It is believed that they are
// bought out and deprecated (such as Alltel and Cingular), but since many
// numbers are still listed under their original carrier in many
// public records and some of their gateways still function, they
// are useful nonetheless.

// ALPHABETIC
// When editing this file, please maintain alphabetic order
module.exports = [
  { name: 'alltel'
  , sms: 'text.wireless.alltel.com'
  , wireless: true
  }
  // listed a second time for reverse lookup by the alternate sms address
, { name: 'alltel'
  , sms: 'message.alltel.com'
  , wireless: true
  }
, { name: 'cingular'
  , sms: 'cingularme.com'
  , wireless: true
  }
, { name: 'nextel'
  , sms: 'messaging.nextel.com'
  , wireless: true
  }
, { name: 'powertel'
  , sms: 'ptel.net'
  }
, { name: 'suncom'
  , sms: 'tms.suncom.com'
  }
];
